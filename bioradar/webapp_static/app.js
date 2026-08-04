/* BioRadar control panel.
   Vanilla JS on purpose: this is served from the pipeline image, and a bundler
   would mean rebuilding 11.7 GB to change a button. */

const $  = (id) => document.getElementById(id);
const el = (sel) => document.querySelector(sel);

const STAGES = [
  "Reading sample sheet", "Building QIIME2 manifest", "Importing paired-end reads",
  "Trimming primers (cutadapt)", "Denoising into ASVs (DADA2)",
  "Assigning taxonomy (naive Bayes)", "Exporting QIIME2 artifacts",
  "Building ASV count table", "Writing QC report", "Alpha rarefaction",
  "Rendering PDF report", "Collecting results",
  "Normalizing to BioRadar contract", "Recording chain-of-custody hash",
];

const PHYLUM_COLOR = {
  Annelida: "#60a5fa", Echinodermata: "#22d3a6", Porifera: "#a78bfa",
  Arthropoda: "#fbbf24", Mollusca: "#f472b6", Cnidaria: "#38bdf8",
  Chordata: "#34d399", Bryozoa: "#fb923c", Platyhelminthes: "#c084fc",
  Nematoda: "#94a3b8",
};
const colorFor = (p) => PHYLUM_COLOR[p] || "#64748b";

let staged = [];          // files chosen but not yet uploaded
let busy = false;         // a run is in progress
const maps = {};          // run_id -> Leaflet instance

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
const fmt = (n) => Number(n || 0).toLocaleString();
const mb  = (b) => (b / 1e6).toFixed(1) + " MB";

function toast(message, isError) {
  const node = $("toast");
  node.textContent = message;
  node.className = "toast show" + (isError ? " error" : "");
  clearTimeout(node._t);
  node._t = setTimeout(() => (node.className = "toast"), 4200);
}

/* ── tabs ─────────────────────────────────────────────────── */
$("tabs").addEventListener("click", (event) => {
  const tab = event.target.closest(".tab");
  if (!tab) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  tab.classList.add("active");
  $("view-" + tab.dataset.view).classList.add("active");
  // Leaflet mis-measures when its container was display:none at init.
  Object.values(maps).forEach((m) => setTimeout(() => m.invalidateSize(), 60));
});

/* ── upload ───────────────────────────────────────────────── */
const dropzone = $("dropzone");
const fileInput = $("fileInput");
const folderInput = $("folderInput");

$("folderBtn").addEventListener("click", (e) => { e.stopPropagation(); folderInput.click(); });
$("filesBtn").addEventListener("click", (e) => { e.stopPropagation(); fileInput.click(); });
fileInput.addEventListener("change", () => addFiles([...fileInput.files]));
folderInput.addEventListener("change", () => addFiles([...folderInput.files]));

["dragenter", "dragover"].forEach((type) =>
  dropzone.addEventListener(type, (e) => { e.preventDefault(); dropzone.classList.add("over"); }));
["dragleave", "drop"].forEach((type) =>
  dropzone.addEventListener(type, (e) => { e.preventDefault(); dropzone.classList.remove("over"); }));
// Dropping a folder gives directory entries, not files, so walk them.
dropzone.addEventListener("drop", async (event) => {
  const items = [...(event.dataTransfer.items || [])];
  const entries = items.map((i) => i.webkitGetAsEntry && i.webkitGetAsEntry()).filter(Boolean);
  if (!entries.length) { addFiles([...event.dataTransfer.files]); return; }
  const collected = [];
  await Promise.all(entries.map((entry) => walkEntry(entry, collected)));
  addFiles(collected);
});

function walkEntry(entry, out) {
  return new Promise((resolve) => {
    if (entry.isFile) {
      entry.file((file) => { out.push(file); resolve(); }, resolve);
    } else if (entry.isDirectory) {
      const reader = entry.createReader();
      const readBatch = () => reader.readEntries(async (batch) => {
        if (!batch.length) return resolve();
        await Promise.all(batch.map((child) => walkEntry(child, out)));
        readBatch();          // readEntries returns at most 100 at a time
      }, resolve);
      readBatch();
    } else { resolve(); }
  });
}

function mateOf(name) {
  const stem = name.replace(/\.(fastq|fq)(\.gz)?$/i, "");
  const m = stem.match(/_R?([12])(_001)?$/i);
  return m ? Number(m[1]) : null;
}

const isFastq = (name) => /\.(fastq|fq)(\.gz)?$/i.test(name);
const isMetadata = (name) => /\.(csv|tsv)$/i.test(name);

function addFiles(files) {
  // Sample sheets are accepted alongside the reads. Coordinates are never in a
  // FASTQ, so discarding the CSV is discarding the map.
  const keep = files.filter((f) => isFastq(f.name) || isMetadata(f.name));
  const rejected = files.length - keep.length;
  staged = staged.concat(keep.filter((f) => !staged.some((s) => s.name === f.name)));
  if (rejected) {
    toast(`${rejected} file(s) ignored — FASTQ reads and CSV sample sheets only`, true);
  }
  renderFiles();
}

function renderFiles() {
  const list = $("fileList");
  if (!staged.length) {
    list.innerHTML = "";
    $("uploadPanel").classList.add("hidden");
    return;
  }
  list.innerHTML = staged.map((f, i) => {
    const meta = isMetadata(f.name);
    const mate = meta ? null : mateOf(f.name);
    const tag = meta ? `<span class="tag meta">SHEET</span>`
              : mate ? `<span class="tag r${mate}">R${mate}</span>`
                     : `<span class="tag bad">no mate</span>`;
    return `<div class="file-row">
      ${tag}
      <span class="nm">${esc(f.name)}</span>
      <span class="sz">${mb(f.size)}</span>
      <button class="link" data-rm="${i}" type="button">remove</button>
    </div>`;
  }).join("");
  list.querySelectorAll("[data-rm]").forEach((b) =>
    b.addEventListener("click", () => { staged.splice(Number(b.dataset.rm), 1); renderFiles(); }));

  $("uploadPanel").classList.remove("hidden");

  const reads = staged.filter((f) => isFastq(f.name));
  const sheets = staged.filter((f) => isMetadata(f.name));
  const r1 = reads.filter((f) => mateOf(f.name) === 1).length;
  const r2 = reads.filter((f) => mateOf(f.name) === 2).length;
  const sheetNote = sheets.length
    ? ` · ${sheets.length} sample sheet (map coordinates)`
    : " · no sample sheet — the map will be empty";
  $("uploadStatus").textContent =
    (r1 === r2 && r1 > 0 ? `${r1} sample(s) paired` : `${r1} R1 and ${r2} R2 — these must match`)
    + sheetNote;
}

$("clearBtn").addEventListener("click", () => { staged = []; renderFiles(); });

$("uploadBtn").addEventListener("click", async () => {
  if (!staged.length) return;
  const reads = staged.filter((f) => isFastq(f.name));
  const r1 = reads.filter((f) => mateOf(f.name) === 1).length;
  const r2 = reads.filter((f) => mateOf(f.name) === 2).length;
  if (!r1 || r1 !== r2) {
    toast("Every sample needs both an R1 and an R2 file", true);
    return;
  }

  const batch = "b" + Date.now().toString(36);
  const bar = $("uploadBar");
  const fill = bar.firstElementChild;
  bar.classList.remove("hidden");
  $("uploadBtn").disabled = true;

  try {
    // Four at a time. Sequential upload of 24 small files spends nearly all its
    // wall time on round-trip latency rather than bytes; the browser caps
    // per-host connections anyway, so a small pool is the whole win.
    const CONCURRENCY = 4;
    let done = 0;
    let cursor = 0;

    const worker = async () => {
      while (cursor < staged.length) {
        const file = staged[cursor++];
        const response = await fetch(
          `/api/upload?batch=${encodeURIComponent(batch)}&filename=${encodeURIComponent(file.name)}`,
          { method: "POST", body: file });
        if (!response.ok) throw new Error((await response.json()).error);
        done++;
        fill.style.width = `${Math.round((done / staged.length) * 100)}%`;
        $("uploadStatus").textContent = `Uploading ${done}/${staged.length}…`;
      }
    };
    await Promise.all(
      Array.from({ length: Math.min(CONCURRENCY, staged.length) }, worker)
    );

    $("uploadStatus").textContent = "Reading your data and configuring the pipeline…";
    const finalize = await fetch("/api/upload/finalize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        batch,
        autodetect: true,
        name: $("cfgName").value || null,
        region: $("cfgRegion").value || null,
        fprimer: $("cfgF").value || null,
        rprimer: $("cfgR").value || null,
        trunc_len_f: Number($("cfgTF").value) || null,
        trunc_len_r: Number($("cfgTR").value) || null,
      }),
    });
    const dataset = await finalize.json();
    if (!finalize.ok) throw new Error(dataset.error);

    staged = [];
    renderFiles();
    bar.classList.add("hidden");
    fill.style.width = "0";
    const d = dataset.detected || {};
    toast(dataset.status === "ready"
      ? `Detected ${d.marker || "marker"} — ready to analyze`
      : `Uploaded, but: ${dataset.status_detail}`,
      dataset.status !== "ready");
    runsSignature = "";
    await loadDatasets();
  } catch (error) {
    toast(error.message || String(error), true);
    bar.classList.add("hidden");
  } finally {
    $("uploadBtn").disabled = false;
    $("uploadStatus").textContent = "";
  }
});

/* ── datasets ─────────────────────────────────────────────── */
async function loadDatasets() {
  const { datasets } = await (await fetch("/api/datasets")).json();

  if (!datasets.length) {
    $("datasets").innerHTML =
      `<div class="empty-state">
         <div class="empty-title">No datasets yet</div>
         <div class="hint">Upload a folder above and it will appear here, configured and ready to run.</div>
       </div>`;
    return;
  }

  $("datasets").innerHTML = datasets.map((d) => {
    const det = d.detected || {};
    const detected = det.marker ? `
      <div class="detected">
        <div class="det-row"><span>Marker</span><b>${esc(det.marker)}</b></div>
        <div class="det-row"><span>Primer match</span><b>${Math.round((det.match_rate || 0) * 100)}% of reads</b></div>
        <div class="det-row"><span>Read length</span><b>${det.read_length || "—"} bp</b></div>
        <div class="det-row"><span>Denoiser</span><b>${esc(d.denoiser || "dada2")}</b></div>
        ${det.swapped_on_import
          ? `<div class="det-note">Mates were the wrong way round — swapped on import.</div>` : ""}
      </div>` : "";
    const runnable = d.status === "ready" && !busy;
    const shown = (d.findings || []).slice(0, 1);
    const extra = (d.findings || []).length - shown.length;

    const notes = shown.map((f) => `
      <div class="note ${esc(f.level)}">
        <strong>${esc(f.check)}</strong> — ${esc(f.message)}
        ${f.hint ? `<span class="arrow">→ ${esc(f.hint)}</span>` : ""}
      </div>`).join("")
      + (extra > 0 ? `<div class="hint">…and ${extra} more like it.</div>` : "");

    return `<div class="card">
      <div class="card-top">
        <h3>${esc(d.name)}</h3>
        <span class="badge ${esc(d.status)}">${esc(d.status)}</span>
      </div>
      <div class="sub">${esc(d.region)}${
        d.sample_count ? ` · ${d.sample_count} samples` : ""}</div>
      <div class="detail">${esc(d.status_detail || "")}</div>
      ${detected}
      ${notes}
      <div class="card-foot">
        <button class="btn primary sm" ${runnable ? "" : "disabled"}
                data-run="${esc(d.id)}">Analyze</button>
        <button class="btn ghost sm" data-del="${esc(d.id)}"
                data-uploaded="${d.uploaded ? "1" : "0"}"
                title="${d.uploaded ? "Deletes the uploaded files"
                                    : "Removes it from the list; files stay on disk"}"
        >Remove</button>
      </div>
    </div>`;
  }).join("");

  $("datasets").querySelectorAll("[data-run]").forEach((b) =>
    b.addEventListener("click", () => startRun(b.dataset.run)));
  $("datasets").querySelectorAll("[data-del]").forEach((b) =>
    b.addEventListener("click", async () => {
      const uploaded = b.dataset.uploaded === "1";
      const question = uploaded
        ? "Delete this uploaded dataset and its FASTQ files?"
        : "Remove this dataset from the list? Its files stay on disk.";
      if (!confirm(question)) return;

      const r = await fetch(`/api/datasets/${encodeURIComponent(b.dataset.del)}`,
                            { method: "DELETE" });
      const body = await r.json();
      if (!r.ok) { toast(body.error, true); return; }
      toast(body.note || "Dataset deleted");
      await loadDatasets();
    }));
}

async function startRun(id) {
  const response = await fetch("/api/runs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dataset_id: id }),
  });
  const body = await response.json();
  if (!response.ok) { toast(body.error, true); return; }
  busy = true;
  toast("Pipeline started — follow it under Results");
  el('.tab[data-view="results"]').click();
  refresh();
}

/* ── results ──────────────────────────────────────────────── */
function stageChips(run) {
  const index = STAGES.indexOf(run.stage);
  return `<div class="stages">${STAGES.map((s, i) => {
    const state = run.status === "completed" || (index > -1 && i < index) ? "done"
                : i === index ? "current" : "";
    return `<span class="stage ${state}">${esc(s)}</span>`;
  }).join("")}</div>`;
}

function phylumBars(report) {
  if (!report.phyla_breakdown || !report.phyla_breakdown.length) return "";
  const total = report.phyla_breakdown.reduce((a, p) => a + p.reads, 0) || 1;
  return `<div class="bars">${report.phyla_breakdown.map((p) => `
    <div class="bar-row">
      <span class="lbl">${esc(p.name)}</span>
      <span class="bar-track"><span class="bar-fill"
        style="width:${(p.reads / total) * 100}%;background:${colorFor(p.name)}"></span></span>
      <span class="val">${((p.reads / total) * 100).toFixed(1)}%</span>
    </div>`).join("")}</div>`;
}

function speciesTable(report) {
  if (!report.top_species || !report.top_species.length) return "";
  return `<table class="data">
    <tr><th>Taxon</th><th>Phylum</th><th class="num">Reads</th><th class="num">Conf.</th></tr>
    ${report.top_species.map((s) => `<tr>
      <td><em>${esc(s.name)}</em>${s.placeholder ? " †" : ""}</td>
      <td><span style="color:${colorFor(s.phylum)}">●</span> ${esc(s.phylum || "—")}</td>
      <td class="num">${fmt(s.reads)}</td>
      <td class="num">${s.confidence}</td>
    </tr>`).join("")}
  </table>
  ${report.placeholders ? `<div class="hint" style="margin-top:8px">
     † unidentified <code>&lt;taxon&gt; sp.</code> record — the classifier reached that
     group but no named species.</div>` : ""}`;
}

// Free, no-API-key basemaps. CARTO rebuilds from OpenStreetMap continuously and
// looks current; OSM's own raster style is the dated one. `{r}` requests retina
// tiles so the map is not blurry on a laptop screen.
const BASEMAPS = {
  "Dark": {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 20,
  },
  "Light": {
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 20,
  },
  "Satellite": {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Imagery &copy; Esri, Maxar, Earthstar Geographics",
    maxZoom: 19,
  },
};

function prefersDark() {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Fullscreen via the browser API rather than a plugin: one dependency fewer,
// and Leaflet only needs telling to re-measure afterwards.
const FullscreenControl = L.Control.extend({
  options: { position: "topleft" },
  onAdd(map) {
    const container = L.DomUtil.create("div", "leaflet-bar leaflet-control map-fs");
    const link = L.DomUtil.create("a", "", container);
    link.href = "#";
    link.title = "Toggle fullscreen";
    link.innerHTML = "&#x26F6;";
    L.DomEvent.on(link, "click", (event) => {
      L.DomEvent.stop(event);
      const target = map.getContainer();
      if (document.fullscreenElement) document.exitFullscreen();
      else if (target.requestFullscreen) target.requestFullscreen();
    });

    // Leaflet caches the container size and only requests tiles for that
    // rectangle. Entering fullscreen changes the size without telling it, so it
    // keeps painting a small block in the middle of a large empty box. The
    // browser also reports the new size a frame or two late, hence resizing
    // more than once rather than guessing a single delay.
    const resize = () => {
      [0, 60, 250, 600].forEach((delay) =>
        setTimeout(() => {
          map.invalidateSize({ animate: false, pan: false });
        }, delay));
    };
    map.__fsHandler = () => {
      if (document.fullscreenElement === map.getContainer() ||
          document.fullscreenElement === null) resize();
    };
    document.addEventListener("fullscreenchange", map.__fsHandler);
    return container;
  },
});

async function drawMap(run) {
  const node = document.getElementById("map-" + run.run_id);
  if (!node) return;
  const existing = maps[run.run_id];
  if (existing) {
    // Survives a re-render: if the old container is still on the page the map
    // is fine; if it was replaced, drop the stale instance and rebuild.
    if (document.body.contains(existing.getContainer())) return;
    existing.remove();
    delete maps[run.run_id];
  }
  if (node.querySelector(".leaflet-container")) return;

  let points = [];
  try {
    points = (await (await fetch(`/api/runs/${run.run_id}/map`)).json()).points || [];
  } catch { /* fall through to the empty state */ }

  if (!points.length) {
    node.innerHTML = `<div class="map-empty">
      <strong>No coordinates for this dataset</strong><br>
      FASTQ files contain sequences, not locations. To map the sites, include a
      <code>samples.csv</code> in the upload with <code>sample_id</code>,
      <code>latitude</code> and <code>longitude</code> columns —
      the sample ids must match the FASTQ filename prefixes.
    </div>`;
    return;
  }

  const map = L.map(node, {
    scrollWheelZoom: true,
    zoomControl: true,
    worldCopyJump: true,
  });
  maps[run.run_id] = map;

  const spinner = L.DomUtil.create("div", "map-spinner", node);
  spinner.innerHTML = '<div class="spinner"></div>';

  const layers = {};
  Object.entries(BASEMAPS).forEach(([name, config]) => {
    const layer = L.tileLayer(config.url, {
      attribution: config.attribution,
      maxZoom: config.maxZoom,
      detectRetina: true,
      // Keep a ring of off-screen tiles so panning does not expose blank space,
      // and fetch while panning rather than only after it stops.
      keepBuffer: 3,
      updateWhenIdle: false,
    });
    layer.on("loading", () => spinner.classList.add("on"));
    layer.on("load", () => spinner.classList.remove("on"));
    layers[name] = layer;
  });
  (prefersDark() ? layers.Dark : layers.Light).addTo(map);

  L.control.layers(layers, null, { position: "topright", collapsed: true }).addTo(map);
  L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);
  map.addControl(new FullscreenControl());

  // Teardrop pins rather than scaled translucent circles. The circles read as
  // loading spinners at a glance and their size encoded a variable nobody was
  // reading off the map; the count belongs in the popup and the table.
  const bounds = [];
  points.forEach((p) => {
    bounds.push([p.latitude, p.longitude]);
    const marker = L.marker([p.latitude, p.longitude], {
      icon: L.divIcon({
        className: "site-pin",
        html: `<svg viewBox="0 0 24 32" width="26" height="34" aria-hidden="true">
                 <path d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 20 12 20s12-11.6 12-20c0-6.6-5.4-12-12-12z"
                       fill="#22d3a6" stroke="#04231b" stroke-width="1.5"/>
                 <circle cx="12" cy="12" r="4.5" fill="#04231b"/>
               </svg>`,
        iconSize: [26, 34],
        iconAnchor: [13, 34],
        popupAnchor: [0, -32],
      }),
      title: p.site_id,
    }).addTo(map);

    marker.bindPopup(`
      <div class="pop">
        <div class="pop-site">${esc(p.site_id)}</div>
        <div class="pop-sample">${esc(p.sample_id)}</div>
        <div class="pop-stats">
          <span><b>${p.species_count}</b> species</span>
          <span><b>${fmt(p.total_reads)}</b> reads</span>
          <span>Shannon <b>${p.shannon}</b></span>
        </div>
        ${p.collected_at ? `<div class="pop-date">Collected ${esc(p.collected_at)}</div>` : ""}
        ${p.top_taxa.length ? `<div class="pop-taxa"><b>Top taxa</b>${
          p.top_taxa.map((t) => `<div><em>${esc(t.name)}</em> · ${fmt(t.reads)}</div>`).join("")
        }</div>` : ""}
      </div>`, { maxWidth: 280 });
  });

  map.fitBounds(bounds, { padding: [45, 45], maxZoom: 11 });
  setTimeout(() => map.invalidateSize(), 80);
}

let runsSignature = "";

async function loadRuns() {
  const { runs } = await (await fetch("/api/runs")).json();
  busy = runs.some((r) => r.status === "running");
  $("runCount").textContent = runs.length;

  if (!runs.length) {
    $("runs").innerHTML =
      `<div class="empty-state">
         <div class="empty-title">No analyses yet</div>
         <div class="hint">Upload a dataset on the Analyze tab to get started.</div>
       </div>`;
    return;
  }

  const toolbar = `<div class="runs-bar">
      <span class="hint">${runs.length} analysis result(s) — held in memory only,
        cleared when the app restarts</span>
      <button class="btn ghost sm" id="clearRuns">Clear results</button>
    </div>`;

  // Re-render only when something actually changed. Rewriting innerHTML every
  // poll would tear the Leaflet map out of the DOM on a three-second cycle,
  // leaving an empty box behind.
  const signature = runs
    .map((r) => `${r.run_id}:${r.status}:${r.percent}:${r.stage}:${!!r.report}`)
    .join("|");
  if (signature === runsSignature) return;
  runsSignature = signature;

  $("runs").innerHTML = toolbar + runs.map((run) => {
    const report = run.report;
    return `<article class="run">
      <div class="run-head">
        <div>
          <h3>${esc(run.dataset_name)}</h3>
          <div class="hint mono">${esc(run.run_id)}</div>
        </div>
        <span class="badge ${esc(run.status)}">${esc(run.status)}</span>
      </div>
      <div class="run-body">
        ${run.status === "running" ? `
          <div class="progress"><div style="width:${run.percent || 0}%"></div></div>
          ${stageChips(run)}` : ""}
        ${run.status === "failed" ? `<div class="err-box">${esc(run.error || "failed")}</div>` : ""}
        ${report ? `
          <div class="stats">
            <div class="stat"><div class="v">${report.named_species}</div><div class="k">Named species</div></div>
            <div class="stat"><div class="v">${report.phyla}</div><div class="k">Phyla</div></div>
            <div class="stat"><div class="v">${report.samples}</div><div class="k">Samples</div></div>
            <div class="stat"><div class="v">${fmt(report.detections)}</div><div class="k">Detections</div></div>
            <div class="stat"><div class="v">${report.placeholders}</div><div class="k">Unnamed sp.</div></div>
          </div>
          <div class="map" id="map-${esc(run.run_id)}"></div>
          ${phylumBars(report)}
          ${speciesTable(report)}
          <details class="more">
            <summary>Provenance</summary>
            <div class="hint mono" style="margin-top:8px">
              sha256 ${esc(run.artifact_hash || "—")}<br>
              <a href="/api/runs/${esc(run.run_id)}/report" target="_blank">full markdown report</a>
            </div>
          </details>` : ""}
      </div>
    </article>`;
  }).join("");

  const clear = $("clearRuns");
  if (clear) {
    clear.addEventListener("click", async () => {
      if (!confirm("Clear all analysis results?")) return;
      await fetch("/api/runs", { method: "DELETE" });
      Object.values(maps).forEach((m) => m.remove());
      Object.keys(maps).forEach((k) => delete maps[k]);
      runsSignature = "";
      toast("Results cleared");
      refresh();
    });
  }

  runs.filter((r) => r.report).forEach(drawMap);
}

async function refresh() {
  try { await loadRuns(); await loadDatasets(); }
  catch (error) { console.error(error); }
}

refresh();
setInterval(refresh, 3000);
