/* BioRadar dashboard.

   The shell reads the feature registry and renders whatever is in it; the
   features below register themselves and never reference each other. Adding
   the next one is a new registerFeature() call and nothing else — which is the
   test the UI guide sets for the architecture.

   Vanilla JS on purpose: this is served from the pipeline image, and a bundler
   would mean rebuilding 11.7 GB to change a button. */

(function () {
  "use strict";

  var UI = window.BioRadarUI;
  var Registry = window.BioRadarRegistry;
  var Charts = window.BioRadarCharts;
  var MapKit = window.BioRadarMap;
  var I18n = window.BioRadarI18n;
  var t = I18n.t;
  var esc = UI.esc;

  /* ── Application state ────────────────────────────────────────────── */

  var state = {
    datasets: [],
    runs: [],
    analyses: {},        // run_id -> analysis payload
    alerts: {},          // run_id -> watchlist result
    activeRun: null,     // run_id shown in Results / Monitor
    selectedSites: [],
    health: null,
    online: navigator.onLine,
    staged: [],          // files chosen but not uploaded
    lastGoodAt: null
  };

  var maps = {};         // run_id -> { map, cluster, heat }

  /* ── API ──────────────────────────────────────────────────────────── */

  function api(path, options) {
    options = options || {};
    return fetch(path, options).then(function (response) {
      var type = response.headers.get("content-type") || "";
      if (type.indexOf("application/json") === -1) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.text();
      }
      return response.json().then(function (body) {
        if (!response.ok) {
          var error = new Error(body.error || ("HTTP " + response.status));
          error.errorId = body.error_id;
          error.status = response.status;
          throw error;
        }
        return body;
      });
    });
  }

  /* ── Theme ────────────────────────────────────────────────────────────
     Dark is the default. The guide makes that a field decision rather than a
     taste one: a light UI is unreadable on a phone at midday on a riverbank. */

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("bioradar.theme", theme); } catch (e) { /* private mode */ }
    // Tiles must follow the theme: a dark dashboard around a bright white
    // basemap is the single most jarring thing a map dashboard can do.
    Object.keys(maps).forEach(function (runId) {
      var entry = maps[runId];
      if (!entry || !entry.layers) return;
      var wanted = theme === "light" ? "Light" : "Dark";
      if (entry.activeBasemap === "Satellite" || entry.activeBasemap === "Topographic") return;
      entry.map.removeLayer(entry.layers[entry.activeBasemap]);
      entry.layers[wanted].addTo(entry.map);
      entry.activeBasemap = wanted;
      if (entry.heat) entry.heat._redraw();
    });
    document.dispatchEvent(new CustomEvent("bioradar:theme", { detail: theme }));
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function restoreTheme() {
    var saved = null;
    try { saved = localStorage.getItem("bioradar.theme"); } catch (e) { /* private mode */ }
    applyTheme(saved === "light" ? "light" : "dark");
  }

  /* ── Shell ────────────────────────────────────────────────────────── */

  var activeViewId = null;

  function buildShell() {
    var sidebar = document.getElementById("sidebar");
    var tabbar = document.getElementById("tabbar");
    var workspace = document.getElementById("viewHost");
    var actions = document.getElementById("appbarActions");

    var views = Registry.bySlot("main-view");

    sidebar.innerHTML = views.map(navButton).join("");
    // Four is the ceiling for a phone tab bar; the rest stay reachable from the
    // sidebar on any screen wide enough to show it.
    tabbar.innerHTML = views.filter(function (f) { return f.primary; })
                            .slice(0, 4).map(navButton).join("");

    workspace.innerHTML = views.map(function (feature) {
      return '<section class="view" id="view-' + esc(feature.id) +
             '" role="tabpanel" aria-labelledby="nav-' + esc(feature.id) + '"></section>';
    }).join("");

    actions.innerHTML = Registry.bySlot("header-action")
      .map(function (f) { return f.mount ? f.mount() : ""; }).join("");

    document.querySelectorAll("[data-view]").forEach(function (node) {
      node.addEventListener("click", function () { showView(node.dataset.view); });
    });

    Registry.bySlot("header-action").forEach(function (f) { if (f.onShow) f.onShow(); });
  }

  function navButton(feature) {
    return '<button class="nav-item" type="button" role="tab" data-view="' + esc(feature.id) +
      '" id="nav-' + esc(feature.id) + '" aria-current="false">' +
      UI.icon(feature.icon) +
      '<span class="nav-badge" data-badge="' + esc(feature.id) + '" data-count="0"></span>' +
      "<span>" + esc(feature.label()) + "</span></button>";
  }

  function showView(id) {
    var feature = Registry.get(id);
    if (!feature) return;

    if (activeViewId && activeViewId !== id) {
      var previous = Registry.get(activeViewId);
      if (previous && previous.onHide) previous.onHide();
    }

    document.querySelectorAll(".view").forEach(function (node) {
      node.classList.toggle("active", node.id === "view-" + id);
    });
    document.querySelectorAll("[data-view]").forEach(function (node) {
      node.setAttribute("aria-current", node.dataset.view === id ? "page" : "false");
    });

    var container = document.getElementById("view-" + id);
    if (!feature.mounted && feature.mount) {
      feature.mount(container);
      feature.mounted = true;
    }
    activeViewId = id;
    if (feature.onShow) feature.onShow(container);
    if (feature.refresh) feature.refresh(container);

    // Leaflet mis-measures a container that was display:none when it
    // initialised, and paints a strip of tiles in the corner of a grey box.
    Object.keys(maps).forEach(function (runId) {
      setTimeout(function () {
        if (maps[runId]) maps[runId].map.invalidateSize();
      }, 80);
    });

    try { history.replaceState(null, "", "#" + id); } catch (e) { /* file:// */ }
  }

  function setBadge(viewId, count) {
    document.querySelectorAll('[data-badge="' + viewId + '"]').forEach(function (node) {
      node.textContent = count > 99 ? "99+" : String(count || "");
      node.setAttribute("data-count", String(count || 0));
    });
  }

  function refreshActive() {
    var feature = Registry.get(activeViewId);
    if (feature && feature.refresh) {
      feature.refresh(document.getElementById("view-" + activeViewId));
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
     Header actions
     ══════════════════════════════════════════════════════════════════════ */

  Registry.registerFeature({
    id: "theme-toggle", name: "Theme", slot: "header-action", order: 10,
    mount: function () {
      return UI.button("", {
        id: "themeBtn", icon: currentTheme() === "light" ? "moon" : "sun",
        className: "icon", ariaLabel: "Switch between light and dark mode",
        title: "Light / dark"
      });
    },
    onShow: function () {
      var btn = document.getElementById("themeBtn");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var next = currentTheme() === "light" ? "dark" : "light";
        applyTheme(next);
        btn.innerHTML = UI.icon(next === "light" ? "moon" : "sun", 17);
      });
    }
  });

  Registry.registerFeature({
    id: "lang-toggle", name: "Language", slot: "header-action", order: 20,
    mount: function () {
      return '<div class="segmented" role="group" aria-label="Language">' +
        I18n.available.map(function (lang) {
          return '<button type="button" data-lang="' + lang.code + '" aria-pressed="' +
            (I18n.language() === lang.code) + '">' + esc(lang.label) + "</button>";
        }).join("") + "</div>";
    },
    onShow: function () {
      document.querySelectorAll("[data-lang]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          I18n.setLanguage(btn.dataset.lang);
          document.querySelectorAll("[data-lang]").forEach(function (other) {
            other.setAttribute("aria-pressed", String(other.dataset.lang === btn.dataset.lang));
          });
        });
      });
    }
  });

  Registry.registerFeature({
    id: "health-indicator", name: "Health", slot: "header-action", order: 30,
    mount: function () {
      return '<span class="health" id="healthChip" title="System health">' +
        '<span class="health-dot" id="healthDot"></span>' +
        '<span id="healthText">' + esc(t("common.loading")) + "</span></span>";
    }
  });

  /* ══════════════════════════════════════════════════════════════════════
     Feature: Analyze
     ══════════════════════════════════════════════════════════════════════ */

  Registry.registerFeature({
    id: "analyze", name: "Analyze", slot: "main-view", order: 10, primary: true,
    icon: "upload",
    label: function () { return t("nav.analyze"); },
    mount: function (container) {
      container.innerHTML =
        '<div class="view-head"><div><h1>' + esc(t("analyze.title")) + "</h1>" +
        "<p>" + esc(t("analyze.lede")) + "</p></div></div>" +

        UI.card(
          '<div id="dropzone" class="dropzone" tabindex="0" role="button" ' +
          'aria-label="' + esc(t("analyze.drop")) + '">' +
            '<svg class="dz-icon" viewBox="0 0 24 24" aria-hidden="true">' +
            '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" ' +
            'stroke-linejoin="round"/><path d="M12 16v-5m0 0-2 2m2-2 2 2" ' +
            'stroke-linecap="round" stroke-linejoin="round"/></svg>' +
            '<div class="dz-title">' + esc(t("analyze.drop")) + "</div>" +
            '<div class="dz-actions">' +
              UI.button(t("analyze.selectFolder"), { id: "folderBtn", variant: "primary" }) +
              UI.button(t("analyze.selectFiles"), { id: "filesBtn" }) +
            "</div>" +
            '<div class="dz-note">' + esc(t("analyze.note")) + "</div>" +
            '<input type="file" id="folderInput" webkitdirectory directory multiple hidden>' +
            '<input type="file" id="fileInput" multiple accept=".gz,.fastq,.fq,.csv,.tsv" hidden>' +
          "</div>" +
          '<div id="fileList" class="filelist"></div>' +
          '<div id="uploadPanel" class="hidden" style="margin-top:16px">' +
            '<div class="config-grid">' +
              '<label class="field"><span>' + esc(t("analyze.name")) + "</span>" +
                '<input id="cfgName" type="text" placeholder="Mandovi estuary survey"></label>' +
              '<label class="field"><span>' + esc(t("analyze.location")) +
                ' <span class="opt">' + esc(t("analyze.optional")) + "</span></span>" +
                '<input id="cfgRegion" type="text" placeholder="Goa, India"></label>' +
            "</div>" +
            '<details class="advanced"><summary>' + esc(t("analyze.advanced")) + "</summary>" +
              '<div class="config-grid" style="margin-top:12px">' +
                '<label class="field"><span>' + esc(t("analyze.fprimer")) + "</span>" +
                  '<input id="cfgF" type="text" spellcheck="false" placeholder="auto-detected"></label>' +
                '<label class="field"><span>' + esc(t("analyze.rprimer")) + "</span>" +
                  '<input id="cfgR" type="text" spellcheck="false" placeholder="auto-detected"></label>' +
                '<label class="field"><span>' + esc(t("analyze.truncF")) + "</span>" +
                  '<input id="cfgTF" type="number" min="0" placeholder="auto"></label>' +
                '<label class="field"><span>' + esc(t("analyze.truncR")) + "</span>" +
                  '<input id="cfgTR" type="number" min="0" placeholder="auto"></label>' +
              "</div></details>" +
            '<div class="card-foot">' +
              UI.button(t("analyze.upload"), { id: "uploadBtn", variant: "primary", icon: "upload" }) +
              UI.button(t("analyze.clear"), { id: "clearBtn" }) +
              '<span id="uploadStatus" class="hint"></span>' +
            "</div>" +
            '<div class="progress hidden" id="uploadBar"><div style="width:0"></div></div>' +
          "</div>", { size: "lg" }) +

        '<section><div class="view-head"><div><h2>' + esc(t("analyze.datasets")) + "</h2>" +
        '<p class="hint">' + esc(t("analyze.datasetsHint")) + "</p></div></div>" +
        '<div id="datasets" class="grid" style="margin-top:16px">' +
        UI.skeleton("card", 2) + "</div></section>";

      wireUpload();
    },
    refresh: function () { renderDatasets(); }
  });

  /* ── upload ───────────────────────────────────────────────────────── */

  var isFastq = function (name) { return /\.(fastq|fq)(\.gz)?$/i.test(name); };
  var isMetadata = function (name) { return /\.(csv|tsv)$/i.test(name); };

  function mateOf(name) {
    var stem = name.replace(/\.(fastq|fq)(\.gz)?$/i, "");
    var match = stem.match(/_R?([12])(_001)?$/i);
    return match ? Number(match[1]) : null;
  }

  function wireUpload() {
    var dropzone = document.getElementById("dropzone");
    var fileInput = document.getElementById("fileInput");
    var folderInput = document.getElementById("folderInput");

    document.getElementById("folderBtn").addEventListener("click", function (e) {
      e.stopPropagation(); folderInput.click();
    });
    document.getElementById("filesBtn").addEventListener("click", function (e) {
      e.stopPropagation(); fileInput.click();
    });
    fileInput.addEventListener("change", function () { addFiles([].slice.call(fileInput.files)); });
    folderInput.addEventListener("change", function () { addFiles([].slice.call(folderInput.files)); });

    // The dropzone is focusable and Enter/Space opens the picker: a
    // drag-and-drop-only upload is unusable without a mouse.
    dropzone.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); folderInput.click(); }
    });

    ["dragenter", "dragover"].forEach(function (type) {
      dropzone.addEventListener(type, function (e) { e.preventDefault(); dropzone.classList.add("over"); });
    });
    ["dragleave", "drop"].forEach(function (type) {
      dropzone.addEventListener(type, function (e) { e.preventDefault(); dropzone.classList.remove("over"); });
    });

    dropzone.addEventListener("drop", function (event) {
      var items = [].slice.call(event.dataTransfer.items || []);
      var entries = items.map(function (i) {
        return i.webkitGetAsEntry && i.webkitGetAsEntry();
      }).filter(Boolean);
      if (!entries.length) { addFiles([].slice.call(event.dataTransfer.files)); return; }
      var collected = [];
      Promise.all(entries.map(function (entry) { return walkEntry(entry, collected); }))
             .then(function () { addFiles(collected); });
    });

    document.getElementById("clearBtn").addEventListener("click", function () {
      state.staged = []; renderFiles();
    });
    document.getElementById("uploadBtn").addEventListener("click", startUpload);
  }

  function walkEntry(entry, out) {
    return new Promise(function (resolve) {
      if (entry.isFile) {
        entry.file(function (file) { out.push(file); resolve(); }, resolve);
      } else if (entry.isDirectory) {
        var reader = entry.createReader();
        var readBatch = function () {
          reader.readEntries(function (batch) {
            if (!batch.length) return resolve();
            Promise.all(batch.map(function (child) { return walkEntry(child, out); }))
                   .then(readBatch);
          }, resolve);
        };
        readBatch();
      } else { resolve(); }
    });
  }

  function addFiles(files) {
    // Sample sheets travel with the reads. Coordinates are never inside a
    // FASTQ, so discarding the CSV is discarding the map.
    var keep = files.filter(function (f) { return isFastq(f.name) || isMetadata(f.name); });
    var rejected = files.length - keep.length;
    keep.forEach(function (file) {
      if (!state.staged.some(function (s) { return s.name === file.name; })) state.staged.push(file);
    });
    if (rejected) {
      UI.toast(rejected + " file(s) ignored — FASTQ reads and CSV sample sheets only", "warning");
    }
    renderFiles();
  }

  function renderFiles() {
    var list = document.getElementById("fileList");
    var panel = document.getElementById("uploadPanel");
    if (!list) return;

    if (!state.staged.length) {
      list.innerHTML = "";
      panel.classList.add("hidden");
      return;
    }

    list.innerHTML = state.staged.map(function (file, index) {
      var meta = isMetadata(file.name);
      var mate = meta ? null : mateOf(file.name);
      var tag = meta ? '<span class="tag meta">SHEET</span>'
              : mate ? '<span class="tag r' + mate + '">R' + mate + "</span>"
                     : '<span class="tag bad">no mate</span>';
      return '<div class="file-row">' + tag +
        '<span class="nm" title="' + esc(file.name) + '">' + esc(file.name) + "</span>" +
        '<span class="sz">' + UI.mb(file.size) + "</span>" +
        '<button class="link" type="button" data-rm="' + index + '">remove</button>' +
        "</div>";
    }).join("");

    list.querySelectorAll("[data-rm]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.staged.splice(Number(btn.dataset.rm), 1);
        renderFiles();
      });
    });

    panel.classList.remove("hidden");

    var reads = state.staged.filter(function (f) { return isFastq(f.name); });
    var sheets = state.staged.filter(function (f) { return isMetadata(f.name); });
    var r1 = reads.filter(function (f) { return mateOf(f.name) === 1; }).length;
    var r2 = reads.filter(function (f) { return mateOf(f.name) === 2; }).length;
    document.getElementById("uploadStatus").textContent =
      (r1 === r2 && r1 > 0 ? r1 + " sample(s) paired" : r1 + " R1 and " + r2 + " R2 — these must match") +
      (sheets.length ? " · " + sheets.length + " sample sheet (map coordinates)"
                     : " · no sample sheet — the map will be empty");
  }

  function startUpload() {
    if (!state.staged.length) return;
    var reads = state.staged.filter(function (f) { return isFastq(f.name); });
    var r1 = reads.filter(function (f) { return mateOf(f.name) === 1; }).length;
    var r2 = reads.filter(function (f) { return mateOf(f.name) === 2; }).length;
    if (!r1 || r1 !== r2) {
      UI.toast("Every sample needs both an R1 and an R2 file", "error");
      return;
    }

    var batch = "b" + Date.now().toString(36);
    var bar = document.getElementById("uploadBar");
    var fill = bar.firstElementChild;
    var button = document.getElementById("uploadBtn");
    var status = document.getElementById("uploadStatus");

    bar.classList.remove("hidden");
    button.disabled = true;
    button.classList.add("loading");

    var done = 0, cursor = 0;
    var CONCURRENCY = 4;   // the browser caps per-host connections anyway

    function worker() {
      if (cursor >= state.staged.length) return Promise.resolve();
      var file = state.staged[cursor++];
      return fetch("/api/upload?batch=" + encodeURIComponent(batch) +
                   "&filename=" + encodeURIComponent(file.name),
                   { method: "POST", body: file })
        .then(function (response) {
          if (!response.ok) return response.json().then(function (b) { throw new Error(b.error); });
          done++;
          fill.style.width = Math.round((done / state.staged.length) * 100) + "%";
          status.textContent = "Uploading " + done + " " + t("common.of") + " " + state.staged.length + "…";
          return worker();
        });
    }

    var pool = [];
    for (var i = 0; i < Math.min(CONCURRENCY, state.staged.length); i++) pool.push(worker());

    Promise.all(pool)
      .then(function () {
        status.textContent = "Reading your data and configuring the pipeline…";
        return api("/api/upload/finalize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            batch: batch, autodetect: true,
            name: document.getElementById("cfgName").value || null,
            region: document.getElementById("cfgRegion").value || null,
            fprimer: document.getElementById("cfgF").value || null,
            rprimer: document.getElementById("cfgR").value || null,
            trunc_len_f: Number(document.getElementById("cfgTF").value) || null,
            trunc_len_r: Number(document.getElementById("cfgTR").value) || null
          })
        });
      })
      .then(function (dataset) {
        state.staged = [];
        renderFiles();
        bar.classList.add("hidden");
        fill.style.width = "0";
        var detected = dataset.detected || {};
        UI.toast(
          dataset.status === "ready"
            ? "Detected " + (detected.marker || "marker") + " — ready to analyze"
            : "Uploaded, but: " + dataset.status_detail,
          dataset.status === "ready" ? "success" : "warning"
        );
        return poll();
      })
      .catch(function (error) {
        UI.toast(error.message || String(error), "error");
        bar.classList.add("hidden");
      })
      .then(function () {
        button.disabled = false;
        button.classList.remove("loading");
        document.getElementById("uploadStatus").textContent = "";
      });
  }

  /* ── datasets ─────────────────────────────────────────────────────── */

  var datasetSignature = "";

  function renderDatasets() {
    var host = document.getElementById("datasets");
    if (!host) return;

    var signature = state.datasets.map(function (d) {
      return d.id + ":" + d.status + ":" + (d.sample_count || 0);
    }).join("|") + "|" + state.runs.filter(function (r) {
      return r.status === "running" || r.status === "queued";
    }).length;
    if (signature === datasetSignature) return;
    datasetSignature = signature;

    if (!state.datasets.length) {
      host.innerHTML = UI.state("first-run", t("state.noData"), t("state.noDataBody"));
      return;
    }

    var busy = state.runs.some(function (r) { return r.status === "running"; });

    host.innerHTML = state.datasets.map(function (dataset) {
      var detected = dataset.detected || {};
      var detectedBlock = detected.marker ? '<div class="detected">' +
        detRow("Marker", detected.marker) +
        detRow("Primer match", Math.round((detected.match_rate || 0) * 100) + "% of reads") +
        detRow("Read length", (detected.read_length || "—") + " bp") +
        detRow("Denoiser", dataset.denoiser || "dada2") +
        (detected.swapped_on_import
          ? '<div class="det-note">Mates were the wrong way round — swapped on import.</div>' : "") +
        "</div>" : "";

      var findings = (dataset.findings || []).slice(0, 1).map(function (f) {
        return '<div class="note ' + esc(f.level) + '"><strong>' + esc(f.check) + "</strong> — " +
          esc(f.message) + (f.hint ? '<span class="arrow">→ ' + esc(f.hint) + "</span>" : "") + "</div>";
      }).join("");
      var extra = (dataset.findings || []).length - 1;
      if (extra > 0) findings += '<div class="hint">…and ' + extra + " more like it.</div>";

      return UI.card(
        '<div class="card-head"><h3>' + esc(dataset.name) + "</h3>" +
        UI.badge(dataset.status, dataset.status) + "</div>" +
        '<div class="hint">' + esc(dataset.region) +
          (dataset.sample_count ? " · " + dataset.sample_count + " samples" : "") + "</div>" +
        '<div style="margin-top:8px;font-size:14px">' + esc(dataset.status_detail || "") + "</div>" +
        detectedBlock + findings +
        '<div class="card-foot">' +
          UI.button(busy ? t("analyze.queue") : t("analyze.run"), {
            variant: "primary", size: "sm", icon: "activity",
            disabled: dataset.status !== "ready",
            data: { run: dataset.id }
          }) +
          UI.button(t("analyze.remove"), {
            size: "sm",
            title: dataset.uploaded ? "Deletes the uploaded files"
                                    : "Removes it from the list; files stay on disk",
            data: { del: dataset.id, uploaded: dataset.uploaded ? "1" : "0" }
          }) +
        "</div>"
      );
    }).join("");

    host.querySelectorAll("[data-run]").forEach(function (btn) {
      btn.addEventListener("click", function () { startRun(btn.dataset.run); });
    });
    host.querySelectorAll("[data-del]").forEach(function (btn) {
      btn.addEventListener("click", function () { confirmDelete(btn.dataset.del, btn.dataset.uploaded === "1"); });
    });
  }

  function detRow(label, value) {
    return '<div class="det-row"><span>' + esc(label) + "</span><b>" + esc(value) + "</b></div>";
  }

  function confirmDelete(id, uploaded) {
    UI.modal(
      uploaded ? "Delete this dataset?" : "Remove from the list?",
      "<p>" + (uploaded
        ? "This deletes the uploaded FASTQ files from the server. It cannot be undone."
        : "The dataset comes off the list. Its files stay on disk untouched.") + "</p>",
      UI.button(t("common.cancel"), { id: "delCancel" }) +
      UI.button(uploaded ? "Delete" : "Remove", { id: "delConfirm", variant: "danger" })
    );
    document.getElementById("delCancel").addEventListener("click", UI.closeModal);
    document.getElementById("delConfirm").addEventListener("click", function () {
      UI.closeModal();
      api("/api/datasets/" + encodeURIComponent(id), { method: "DELETE" })
        .then(function (body) {
          UI.toast(body.note || "Dataset removed", "success");
          datasetSignature = "";
          return poll();
        })
        .catch(function (error) { UI.toast(error.message, "error"); });
    });
  }

  function startRun(id) {
    api("/api/runs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dataset_id: id })
    }).then(function (run) {
      state.activeRun = run.run_id;
      UI.toast(run.status === "queued"
        ? "Queued — it will start when the current run finishes"
        : "Pipeline started", "success");
      showView("monitor");
      return poll();
    }).catch(function (error) { UI.toast(error.message, "error"); });
  }

  /* ══════════════════════════════════════════════════════════════════════
     Feature: Monitor — the live pipeline DAG
     ══════════════════════════════════════════════════════════════════════ */

  var PIPELINE_RULES = [
    ["create_metadata", "Reading sample sheet"],
    ["create_manifest", "Building QIIME 2 manifest"],
    ["import_reads", "Importing paired-end reads"],
    ["trim_reads", "Trimming primers (cutadapt)"],
    ["clean_reads", "Denoising into sequence variants"],
    ["assign_taxonomy", "Assigning taxonomy (naive Bayes)"],
    ["export_data", "Exporting QIIME 2 artifacts"],
    ["count_table", "Building ASV count table"],
    ["collect_fast", "Collecting results"],
    ["normalize_taxonomy", "Normalizing to the BioRadar contract"],
    ["emit_hash", "Recording chain-of-custody hash"]
  ];

  Registry.registerFeature({
    id: "monitor", name: "Monitor", slot: "main-view", order: 20, primary: true,
    icon: "activity",
    label: function () { return t("nav.monitor"); },
    mount: function (container) {
      container.innerHTML =
        '<div class="view-head"><div><h1>' + esc(t("monitor.title")) + "</h1>" +
        "<p>" + esc(t("monitor.lede")) + "</p></div></div>" +
        '<div id="monitorBody"></div>';
    },
    refresh: function () { renderMonitor(); }
  });

  function renderMonitor() {
    var host = document.getElementById("monitorBody");
    if (!host) return;

    var live = state.runs.filter(function (r) {
      return r.status === "running" || r.status === "queued";
    });
    var recent = state.runs.filter(function (r) {
      return r.status !== "running" && r.status !== "queued";
    }).slice(0, 3);

    if (!live.length && !recent.length) {
      host.innerHTML = UI.state("empty", t("monitor.noRuns"), t("monitor.noRunsBody"));
      return;
    }

    host.innerHTML = live.concat(recent).map(runMonitorCard).join("");

    host.querySelectorAll("[data-cancel]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        api("/api/runs/" + encodeURIComponent(btn.dataset.cancel), { method: "DELETE" })
          .then(function () { UI.toast("Cancelling…", "warning"); return poll(); })
          .catch(function (e) { UI.toast(e.message, "error"); });
      });
    });
    host.querySelectorAll("[data-see]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.activeRun = btn.dataset.see;
        showView("results");
      });
    });
  }

  function runMonitorCard(run) {
    var reached = {};
    var order = [];
    (run.stages || []).forEach(function (rule) { reached[rule] = true; order.push(rule); });
    var currentRule = order.length ? order[order.length - 1] : null;

    var nodes = PIPELINE_RULES.map(function (pair, index) {
      var rule = pair[0], label = pair[1];
      var cls = "";
      if (run.status === "completed") cls = "done";
      else if (reached[rule] && rule !== currentRule) cls = "done";
      else if (rule === currentRule && run.status === "running") cls = "current";
      else if (run.status === "failed" && rule === currentRule) cls = "failed";

      return '<div class="dag-node ' + cls + '"><span class="dag-dot">' +
        (cls === "done" ? "✓" : cls === "failed" ? "!" : String(index + 1)) + "</span>" +
        '<span class="dag-label">' + esc(label) +
          '<span class="dag-rule">' + esc(rule) + "</span></span>" +
        '<span class="dag-time">' + (cls === "current" ? "running" : "") + "</span></div>";
    }).join("");

    var elapsed = UI.elapsedSince(run.started_at);
    var header =
      '<div class="card-head"><div><h3>' + esc(run.dataset_name || run.run_id) + "</h3>" +
      '<div class="hint mono">' + esc(run.run_id) + "</div></div>" +
      UI.badge(run.status, run.status) + "</div>";

    if (run.status === "queued") {
      return UI.card(header +
        UI.state("empty", t("monitor.queued"),
          "This run starts when the pipeline is free. Position " +
          ((run.queue_position || 0) + 1) + " in the queue. " +
          "Runs are executed one at a time because the pipeline already uses every core.") +
        '<div class="card-foot">' +
        UI.button(t("monitor.cancel"), { size: "sm", data: { cancel: run.run_id } }) + "</div>",
        { size: "lg" });
    }

    var progress = run.status === "running"
      ? '<div class="progress" role="progressbar" aria-valuenow="' + (run.percent || 0) +
        '" aria-valuemin="0" aria-valuemax="100"><div style="width:' +
        (run.percent || 0) + '%"></div></div>' +
        '<div class="row hint" style="margin:8px 0 16px"><span>' + esc(run.stage || "") +
        "</span><span class=\"spacer\"></span><span>" + (run.percent || 0) + "% · " +
        UI.duration(elapsed) + " elapsed</span></div>"
      : "";

    var failure = "";
    if (run.status === "failed" || run.status === "timed_out") {
      failure = UI.state("pipeline", t("state.failed"),
        run.error || "The pipeline did not complete.") +
        (run.error_id ? '<div class="hint mono" style="margin-top:8px">error id ' +
          esc(run.error_id) + " — quote this when reporting it</div>" : "");
    }

    var log = (run.recent_log && run.recent_log.length)
      ? '<details class="more"><summary>' + esc(t("monitor.log")) + "</summary>" +
        '<div class="log-stream">' + run.recent_log.map(function (line) {
          return "<div>" + esc(line) + "</div>";
        }).join("") + "</details>"
      : "";

    return UI.card(header + progress + failure +
      '<div class="dag">' + nodes + "</div>" + log +
      '<div class="card-foot">' +
      (run.status === "running"
        ? UI.button(t("monitor.cancel"), { size: "sm", data: { cancel: run.run_id } }) : "") +
      (run.report ? UI.button("See results", { size: "sm", variant: "primary", data: { see: run.run_id } }) : "") +
      "</div>", { size: "lg" });
  }

  /* ══════════════════════════════════════════════════════════════════════
     Feature: Results
     ══════════════════════════════════════════════════════════════════════ */

  Registry.registerFeature({
    id: "results", name: "Results", slot: "main-view", order: 30, primary: true,
    icon: "layers",
    label: function () { return t("nav.results"); },
    mount: function (container) {
      container.innerHTML =
        '<div class="view-head"><div><h1>' + esc(t("results.title")) + "</h1>" +
        "<p>" + esc(t("results.lede")) + "</p></div>" +
        '<div id="resultsActions"></div></div>' +
        '<div id="resultsBody"></div>';
    },
    refresh: function () { renderResults(); }
  });

  var resultsSignature = "";

  function renderResults() {
    var host = document.getElementById("resultsBody");
    var actions = document.getElementById("resultsActions");
    if (!host) return;

    var finished = state.runs.filter(function (r) { return r.report; });

    if (!finished.length) {
      var pending = state.runs.some(function (r) { return r.status === "running"; });
      var signature = "empty:" + pending;
      if (signature === resultsSignature) return;
      resultsSignature = signature;
      actions.innerHTML = "";
      host.innerHTML = pending
        ? UI.skeletonScreen()
        : UI.state("empty", t("state.noResults"), t("state.noResultsBody"));
      return;
    }

    if (!state.activeRun || !finished.some(function (r) { return r.run_id === state.activeRun; })) {
      state.activeRun = finished[0].run_id;
    }
    var run = finished.filter(function (r) { return r.run_id === state.activeRun; })[0];
    var analysis = state.analyses[run.run_id];

    var signature2 = run.run_id + ":" + run.status + ":" + (analysis ? "a" : "-") +
                     ":" + finished.length + ":" + currentTheme() + ":" + I18n.language();
    if (signature2 === resultsSignature) return;
    resultsSignature = signature2;

    actions.innerHTML =
      (finished.length > 1
        ? '<select id="runPicker" aria-label="Choose an analysis" style="max-width:320px">' +
          finished.map(function (r) {
            return '<option value="' + esc(r.run_id) + '"' +
              (r.run_id === run.run_id ? " selected" : "") + ">" +
              esc(r.dataset_name || r.run_id) + "</option>";
          }).join("") + "</select>"
        : "") +
      UI.button(t("results.clear"), { id: "clearRuns", size: "sm" });

    var report = run.report;
    host.innerHTML =
      '<div class="kpis">' +
        UI.kpi(t("results.namedSpecies"), report.named_species, { color: "accent" }) +
        UI.kpi(t("results.phyla"), report.phyla) +
        UI.kpi(t("results.samples"), report.samples) +
        UI.kpi(t("results.detections"), UI.num(report.detections)) +
        UI.kpi(t("results.unnamed"), report.placeholders, { color: "rare" }) +
      "</div>" +
      emptyResultNotice(report) +
      UI.card('<div class="map-toolbar" id="mapToolbar-' + esc(run.run_id) + '"></div>' +
              '<div class="map" id="map-' + esc(run.run_id) + '"></div>' +
              '<div id="timeline-' + esc(run.run_id) + '" style="margin-top:12px"></div>',
              { className: "map-card" }) +
      UI.card("<h2>" + esc(t("results.composition")) + "</h2><div style='margin-top:16px'>" +
              UI.bars((report.phyla_breakdown || []).map(function (p) {
                return { label: p.name, value: p.reads };
              })) + "</div>") +
      UI.card("<h2>" + esc(t("results.inventory")) + "</h2>" + speciesTable(report)) +
      exportCard(run) +
      UI.card('<details class="more"><summary>' + esc(t("results.provenance")) + "</summary>" +
        '<div class="hint mono" style="margin-top:8px;line-height:1.8">' +
        "run id " + esc(run.run_id) + "<br>" +
        "started " + esc(UI.istTime(run.started_at)) + "<br>" +
        "sha256 " + esc(run.artifact_hash || "—") + "<br>" +
        '<a href="/api/runs/' + esc(run.run_id) + '/report" target="_blank" rel="noopener">' +
        "full markdown report</a></div></details>");

    var picker = document.getElementById("runPicker");
    if (picker) {
      picker.addEventListener("change", function () {
        state.activeRun = picker.value;
        resultsSignature = "";
        renderResults();
      });
    }
    document.getElementById("clearRuns").addEventListener("click", clearResults);
    wireExports(run);
    drawMap(run);
  }

  /* An eDNA run that finds nothing is a normal result, not a broken app. Saying
     so — and saying what it usually means — is the difference between a judge
     seeing a working system and a judge seeing a blank screen. */
  function emptyResultNotice(report) {
    if (!report.samples) {
      return UI.state("no-results", t("state.noSpecies"), t("state.noSpeciesBody"));
    }
    if (!report.named_species && !report.placeholders) {
      return UI.state("no-results", t("state.noSpecies"), t("state.noSpeciesBody"));
    }
    var top = report.top_species || [];
    var confident = top.filter(function (s) { return s.confidence >= 0.7; });
    if (top.length && !confident.length) {
      return UI.state("low-confidence", t("state.lowConfidence"), t("state.lowConfidenceBody"));
    }
    return "";
  }

  function speciesTable(report) {
    var rows = report.top_species || [];
    if (!rows.length) return '<p class="hint" style="margin-top:16px">No taxa to list.</p>';
    return '<div class="table-wrap" style="margin-top:16px"><table class="data"><thead><tr>' +
      "<th>Taxon</th><th>Phylum</th><th class='num'>Reads</th>" +
      "<th class='num'>Confidence</th><th>Field status</th></tr></thead><tbody>" +
      rows.map(function (s) {
        var v = s.verification || {};
        return "<tr><td><em>" + esc(s.name) + "</em>" + (s.placeholder ? " †" : "") + "</td>" +
          '<td><span class="dot-swatch" style="background:' + UI.categorical(s.phylum) +
            '"></span>' + esc(s.phylum || "—") + "</td>" +
          '<td class="num">' + UI.num(s.reads) + "</td>" +
          '<td class="num">' + Number(s.confidence).toFixed(3) + "</td>" +
          "<td>" + UI.badge(v.status || "unverified", v.status || "unverified") + "</td></tr>";
      }).join("") + "</tbody></table></div>" +
      (report.placeholders
        ? '<div class="hint" style="margin-top:12px">† an unidentified <code>&lt;taxon&gt; sp.</code> ' +
          "record — the classifier reached that group but no named species. " +
          "Counting these as species would overstate what the data supports.</div>"
        : "");
  }

  function exportCard(run) {
    var stats = run.export_stats || {};
    return UI.card("<h2>" + esc(t("results.export")) + "</h2>" +
      '<p class="hint" style="margin-top:8px">' +
      "Every export carries the chain-of-custody hash for this run." +
      (stats.occurrences !== undefined
        ? " The Darwin Core Archive contains " + UI.num(stats.occurrences) +
          " occurrence records; " + UI.num(stats.excluded_unassigned || 0) +
          " unassigned detections are excluded, because an occurrence record " +
          "asserts that a named organism was present and \"Unassigned\" asserts nothing."
        : "") + "</p>" +
      '<div class="card-foot">' +
      UI.button("CSV — detections", { size: "sm", icon: "download", data: { export: "detections.csv" } }) +
      UI.button("CSV — species", { size: "sm", icon: "download", data: { export: "species.csv" } }) +
      UI.button("JSON", { size: "sm", icon: "download", data: { export: "analysis.json" } }) +
      UI.button("Printable report (PDF)", { size: "sm", icon: "download", data: { export: "report.html" } }) +
      UI.button("Darwin Core Archive", { size: "sm", variant: "primary", icon: "download",
                                          data: { export: "dwca.zip" } }) +
      "</div>" +
      '<div class="hint" style="margin-top:12px">' +
      "The Darwin Core Archive is the format GBIF and OBIS ingest. BioRadar builds " +
      "it and hands it to you rather than submitting it: publishing to a global " +
      "registry is irreversible and needs a registered publishing organisation, " +
      "so that step stays yours." +
      "</div>");
  }

  function wireExports(run) {
    document.querySelectorAll("[data-export]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var kind = btn.dataset.export;
        var url = "/api/runs/" + encodeURIComponent(run.run_id) + "/export/" + kind;
        if (kind === "report.html") {
          // Opened rather than downloaded: the point of this one is that the
          // reader presses Ctrl-P and gets a PDF.
          window.open(url, "_blank", "noopener");
        } else {
          var link = document.createElement("a");
          link.href = url;
          link.download = "";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
    });
  }

  function clearResults() {
    UI.modal("Clear all results?",
      "<p>Analysis results are held in memory for this session. Clearing them " +
      "removes them from this page; the files the pipeline wrote stay on disk.</p>",
      UI.button(t("common.cancel"), { id: "clearCancel" }) +
      UI.button("Clear", { id: "clearConfirm", variant: "danger" }));

    document.getElementById("clearCancel").addEventListener("click", UI.closeModal);
    document.getElementById("clearConfirm").addEventListener("click", function () {
      UI.closeModal();
      api("/api/runs", { method: "DELETE" }).then(function () {
        Object.keys(maps).forEach(function (id) {
          maps[id].map.remove();
          delete maps[id];
        });
        state.analyses = {};
        state.alerts = {};
        state.activeRun = null;
        resultsSignature = "";
        UI.toast("Results cleared", "success");
        return poll();
      }).catch(function (e) { UI.toast(e.message, "error"); });
    });
  }

  /* ── map ──────────────────────────────────────────────────────────── */

  function drawMap(run) {
    var node = document.getElementById("map-" + run.run_id);
    if (!node) return;

    var existing = maps[run.run_id];
    if (existing) {
      if (document.body.contains(existing.map.getContainer())) {
        existing.map.invalidateSize();
        return;
      }
      existing.map.remove();
      delete maps[run.run_id];
    }

    // Claim the node before the fetch. Two renders can overlap -- a poll and a
    // view switch, say -- and without this both pass the guard above, both
    // fetch, and the second L.map() on the same element throws "Map container
    // is already initialized".
    if (node.dataset.building === "1") return;
    node.dataset.building = "1";

    api("/api/runs/" + encodeURIComponent(run.run_id) + "/map")
      .then(function (body) {
        // Re-resolve the node: a re-render between the request and its response
        // detaches the element captured above, and building into a detached div
        // produces a map nobody can see and a stale entry in `maps`.
        var live = document.getElementById("map-" + run.run_id) || node;
        delete node.dataset.building;
        buildMap(run, live, body.points || []);
      })
      .catch(function (error) {
        delete node.dataset.building;
        var live = document.getElementById("map-" + run.run_id);
        // Only paint the error where there is no map. Overwriting a working one
        // would hide the map and the real problem at the same time.
        if (live && !live._leaflet_id) {
          live.innerHTML = UI.errorState(
            "Could not load the sampling locations: " + (error.message || error));
        }
      });
  }

  function buildMap(run, node, points) {
    // Leaflet stamps _leaflet_id on a container it owns. If one is already
    // here, a concurrent call won this race -- and painting over it, whether
    // with another map or with an empty state, is how a working map turns into
    // "No coordinates for this dataset".
    if (node._leaflet_id) {
      if (maps[run.run_id]) maps[run.run_id].map.invalidateSize();
      return;
    }

    if (!points.length) {
      node.innerHTML =
        '<div class="map-empty">' + UI.icon("globe", 44) +
        "<strong>No coordinates for this dataset</strong>" +
        "<span>FASTQ files hold sequences, not locations. To map the sites, include " +
        "a <code>samples.csv</code> in the upload with <code>sample_id</code>, " +
        "<code>latitude</code> and <code>longitude</code> columns — the sample ids " +
        "must match the FASTQ filename prefixes.</span></div>";
      return;
    }

    var map = L.map(node, { scrollWheelZoom: true, zoomControl: true, worldCopyJump: true });
    var layers = {};
    Object.keys(MapKit.BASEMAPS).forEach(function (name) {
      var config = MapKit.BASEMAPS[name];
      layers[name] = L.tileLayer(config.url, {
        attribution: config.attribution, maxZoom: config.maxZoom,
        detectRetina: true, keepBuffer: 3, updateWhenIdle: false
      });
    });
    var initial = MapKit.prefersDarkTiles() ? "Dark" : "Light";
    layers[initial].addTo(map);

    // The view goes first. Every layer and control below projects coordinates
    // to pixels, and Leaflet refuses to do that on a map with no centre --
    // "Set map center and zoom first", thrown from inside the cluster layer.
    map.fitBounds(points.map(function (p) { return [p.latitude, p.longitude]; }),
                  { padding: [50, 50], maxZoom: 11 });

    L.control.layers(layers, null, { position: "topright", collapsed: true }).addTo(map);
    L.control.scale({ imperial: false, position: "bottomleft" }).addTo(map);
    map.addControl(new MapKit.FullscreenControl());
    map.addControl(new MapKit.MeasureControl());

    map.on("baselayerchange", function (event) {
      if (maps[run.run_id]) maps[run.run_id].activeBasemap = event.name;
    });

    var maxSpecies = points.reduce(function (m, p) {
      return Math.max(m, p.species_count || 0);
    }, 0) || 1;

    var cluster = new MapKit.ClusterLayer(points, {
      colorFor: function (point) { return UI.sequential((point.species_count || 0) / maxSpecies); },
      popupFor: function (point) { return popupHtml(point); },
      onSelect: function (point) { openSiteDetail(run, point); }
    }).addTo(map);

    var heat = new MapKit.HeatLayer(points, {
      weight: function (p) { return p.species_count || 1; }
    });

    maps[run.run_id] = { map: map, cluster: cluster, heat: heat, layers: layers,
                         activeBasemap: initial, points: points };

    setTimeout(function () { map.invalidateSize(); }, 80);

    buildMapToolbar(run, maps[run.run_id]);
    buildTimeline(run, maps[run.run_id]);

    // Popups are rendered as HTML strings, so their buttons need wiring after
    // Leaflet inserts them into the DOM.
    map.on("popupopen", function (event) {
      var button = event.popup.getElement().querySelector("[data-verify]");
      if (!button) return;
      button.addEventListener("click", function () {
        openVerifyForm({ site_id: button.dataset.site, scientific_name: button.dataset.verify,
                         run_id: run.run_id, sample_id: button.dataset.sample });
      });
    });
  }

  function buildMapToolbar(run, entry) {
    var host = document.getElementById("mapToolbar-" + run.run_id);
    if (!host) return;
    host.innerHTML =
      "<strong style='font-size:14px'>" + esc(t("results.map")) + "</strong>" +
      '<span class="spacer"></span>' +
      UI.toggle("heatToggle-" + run.run_id, "Heatmap", false) +
      UI.toggle("clusterToggle-" + run.run_id, "Cluster pins", true);

    var heatToggle = document.getElementById("heatToggle-" + run.run_id);
    heatToggle.addEventListener("change", function () {
      if (heatToggle.checked) entry.heat.addTo(entry.map);
      else entry.map.removeLayer(entry.heat);
    });

    var clusterToggle = document.getElementById("clusterToggle-" + run.run_id);
    clusterToggle.addEventListener("change", function () {
      // Turning clustering off simply widens the grid cell to nothing, so the
      // same code path draws both — no second rendering mode to keep in sync.
      entry.cluster.options.disabled = !clusterToggle.checked;
      entry.cluster.render();
    });
  }

  function buildTimeline(run, entry) {
    var host = document.getElementById("timeline-" + run.run_id);
    if (!host) return;
    var timeline = MapKit.timeline(entry.points, function (date) {
      var filter = date ? function (p) {
        return String(p.collected_at || "").slice(0, 10) <= date;
      } : null;
      entry.cluster.setFilter(filter);
      entry.heat.setFilter(filter);
    });
    if (timeline) {
      host.innerHTML = "";
      host.appendChild(timeline.node);
    } else {
      host.innerHTML = '<div class="hint">All samples share one collection date, ' +
        "so there is nothing to animate over time. Add <code>collected_at</code> " +
        "values spanning several dates to enable the time slider.</div>";
    }
  }

  function popupHtml(point) {
    return '<div class="pop"><div class="pop-site">' + esc(point.site_id) + "</div>" +
      '<div class="pop-sample">' + esc(point.sample_id) + "</div>" +
      '<div class="pop-stats"><span><b>' + point.species_count + "</b> species</span>" +
      "<span><b>" + UI.num(point.total_reads) + "</b> reads</span>" +
      "<span>Shannon <b>" + point.shannon + "</b></span></div>" +
      (point.collected_at ? '<div class="pop-date">Collected ' + esc(point.collected_at) + "</div>" : "") +
      ((point.top_taxa || []).length
        ? '<div class="pop-taxa"><b>Top taxa</b>' + point.top_taxa.map(function (taxon) {
            return "<div><em>" + esc(taxon.name) + "</em> · " + UI.num(taxon.reads) + "</div>";
          }).join("") + "</div>"
        : "") + "</div>";
  }

  function openSiteDetail(run, point) {
    UI.openPanel(point.site_id,
      '<div class="stack">' +
      '<div class="kpis">' +
        UI.kpi("Species", point.species_count, { color: "accent" }) +
        UI.kpi("Reads", UI.num(point.total_reads)) +
        UI.kpi("Shannon", point.shannon) +
      "</div>" +
      '<div class="hint mono">' + esc(point.sample_id) + "<br>" +
      point.latitude.toFixed(5) + ", " + point.longitude.toFixed(5) +
      (point.collected_at ? "<br>collected " + esc(point.collected_at) : "") + "</div>" +
      ((point.top_taxa || []).length
        ? "<div><h3>Top taxa</h3>" + UI.bars(point.top_taxa.map(function (taxon) {
            return { label: taxon.name, value: taxon.reads, color: UI.categorical(taxon.phylum) };
          })) + "</div>"
        : "") +
      "</div>");
  }

  /* ══════════════════════════════════════════════════════════════════════
     Feature: Compare — the biodiversity radar
     ══════════════════════════════════════════════════════════════════════ */

  Registry.registerFeature({
    id: "compare", name: "Compare", slot: "main-view", order: 40,
    icon: "radar",
    label: function () { return t("nav.compare"); },
    mount: function (container) {
      container.innerHTML =
        '<div class="view-head"><div><h1>' + esc(t("compare.title")) + "</h1>" +
        "<p>" + esc(t("compare.lede")) + "</p></div></div>" +
        '<div id="compareBody"></div>';
    },
    onShow: function () { ensureAnalysis(state.activeRun); },
    refresh: function () { renderCompare(); }
  });

  function renderCompare() {
    var host = document.getElementById("compareBody");
    if (!host) return;

    var run = state.runs.filter(function (r) { return r.run_id === state.activeRun && r.report; })[0]
           || state.runs.filter(function (r) { return r.report; })[0];
    if (!run) {
      host.innerHTML = UI.state("empty", t("state.noResults"), t("state.noResultsBody"));
      return;
    }

    var analysis = state.analyses[run.run_id];
    if (!analysis) {
      host.innerHTML = UI.card(UI.skeleton("block", 1)) ;
      ensureAnalysis(run.run_id);
      return;
    }

    var sites = Charts.siteMetrics(analysis, analysis.watchlist || []);
    if (sites.length < 2) {
      host.innerHTML = UI.state("empty", t("compare.needTwo"), t("compare.needTwoBody") +
        " This survey has " + sites.length + " site" + (sites.length === 1 ? "" : "s") +
        ". Sites come from the site_id column of your sample sheet; without one, " +
        "each sample is treated as its own site.");
      return;
    }

    if (!state.selectedSites.length) {
      // Five is the readable ceiling for overlaid radar polygons; past that the
      // fills stack into mud and the chart stops answering anything.
      state.selectedSites = sites.slice(0, Math.min(5, sites.length))
                                 .map(function (s) { return s.site_id; });
    }

    var chosen = sites.filter(function (s) {
      return state.selectedSites.indexOf(s.site_id) !== -1;
    });

    host.innerHTML =
      UI.card("<h2>" + esc(t("compare.pick")) + "</h2>" +
        '<div class="site-picker" style="margin-top:16px">' +
        sites.map(function (site, index) {
          var on = state.selectedSites.indexOf(site.site_id) !== -1;
          var colour = on ? UI.categoricalAt(chosen.map(function (c) { return c.site_id; })
                                                   .indexOf(site.site_id)) : "transparent";
          return '<button type="button" class="site-chip" data-site="' + esc(site.site_id) +
            '" aria-pressed="' + on + '"><span class="legend-swatch" style="background:' +
            colour + '"></span>' + esc(site.site_id) + "</button>";
        }).join("") + "</div>") +
      UI.card(chosen.length >= 2
        ? Charts.radar(chosen)
        : UI.state("empty", t("compare.needTwo"), t("compare.needTwoBody")), { size: "lg" });

    host.querySelectorAll("[data-site]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var id = chip.dataset.site;
        var index = state.selectedSites.indexOf(id);
        if (index === -1) {
          if (state.selectedSites.length >= 5) {
            UI.toast("Five sites is the readable maximum for one radar", "warning");
            return;
          }
          state.selectedSites.push(id);
        } else {
          state.selectedSites.splice(index, 1);
        }
        renderCompare();
      });
    });
  }

  function ensureAnalysis(runId) {
    if (!runId || state.analyses[runId]) return Promise.resolve();
    return api("/api/runs/" + encodeURIComponent(runId) + "/analysis")
      .then(function (body) {
        state.analyses[runId] = body;
        if (activeViewId === "compare") renderCompare();
        if (activeViewId === "alerts") renderAlerts();
      })
      .catch(function () { /* the view shows its own empty state */ });
  }

  /* ══════════════════════════════════════════════════════════════════════
     Feature: Alerts and field verification
     ══════════════════════════════════════════════════════════════════════ */

  Registry.registerFeature({
    id: "alerts", name: "Alerts", slot: "main-view", order: 50, primary: true,
    icon: "bell",
    label: function () { return t("nav.alerts"); },
    mount: function (container) {
      container.innerHTML =
        '<div class="view-head"><div><h1>' + esc(t("alerts.title")) + "</h1>" +
        "<p>" + esc(t("alerts.lede")) + "</p></div></div>" +
        '<div id="alertsBody"></div>';
    },
    onShow: function () { ensureAnalysis(state.activeRun); },
    refresh: function () { renderAlerts(); }
  });

  function renderAlerts() {
    var host = document.getElementById("alertsBody");
    if (!host) return;

    var run = state.runs.filter(function (r) { return r.run_id === state.activeRun && r.report; })[0]
           || state.runs.filter(function (r) { return r.report; })[0];
    if (!run) {
      host.innerHTML = UI.state("empty", t("state.noResults"), t("state.noResultsBody"));
      return;
    }

    var alerts = state.alerts[run.run_id];
    if (!alerts) {
      host.innerHTML = UI.card(UI.skeleton("line", 4));
      api("/api/runs/" + encodeURIComponent(run.run_id) + "/alerts")
        .then(function (body) { state.alerts[run.run_id] = body; renderAlerts(); })
        .catch(function (e) { host.innerHTML = UI.errorState(e.message); });
      return;
    }

    var list = alerts.alerts || [];
    setBadge("alerts", (alerts.summary || {}).high || 0);

    host.innerHTML =
      '<div class="kpis">' +
        UI.kpi("High severity", (alerts.summary || {}).high || 0, { color: "invasive" }) +
        UI.kpi("Medium", (alerts.summary || {}).medium || 0, { color: "rare" }) +
        UI.kpi("Watchlist size", alerts.watchlist_size || 0) +
        UI.kpi("Field checks", (alerts.verification_stats || {}).reports || 0, { color: "healthy" }) +
      "</div>" +
      (list.length
        ? '<div class="grid">' + list.map(alertCard).join("") + "</div>"
        : UI.state("success", t("alerts.none"), t("alerts.noneBody"))) +
      UI.card("<h2>Watchlist</h2>" +
        '<p class="hint" style="margin-top:8px">Screening uses ' +
        '<code>data/species_pool.csv</code> — a starter list of ' +
        (alerts.watchlist_size || 0) + " species with an <code>india_status</code> " +
        "column, not the National Biodiversity Authority's full invasive-species " +
        "register. Add rows to that CSV to widen it; nothing else needs changing.</p>");

    host.querySelectorAll("[data-verify]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openVerifyForm({
          scientific_name: btn.dataset.verify,
          site_id: btn.dataset.site || "",
          run_id: run.run_id
        });
      });
    });
  }

  function alertCard(alert) {
    var v = alert.verification || {};
    return UI.card(
      '<div class="alert-card">' +
        '<div class="alert-top"><div><div class="alert-name">' + esc(alert.scientific_name) +
        (alert.common_name ? '<span class="alert-common">' + esc(alert.common_name) + "</span>" : "") +
        "</div></div>" + UI.badge(alert.severity, alert.severity) + "</div>" +
        '<div class="alert-msg">' + esc(alert.message) + "</div>" +
        '<div class="conf-row"><div class="meter"><span style="width:' +
          Math.round((alert.confidence || 0) * 100) + '%"></span></div>' +
          '<span class="hint">' + Number(alert.confidence).toFixed(2) + " " +
          esc(t("alerts.confidence")) + "</span></div>" +
        '<div class="alert-meta"><span><b>' + UI.num(alert.reads) + "</b> " +
          esc(t("alerts.reads")) + "</span>" +
          "<span><b>" + (alert.sites || []).length + "</b> " + esc(t("alerts.sites")) + "</span>" +
          "<span>" + UI.badge(v.status || "unverified", v.status || "unverified") + "</span></div>" +
        '<div class="card-foot">' +
        UI.button(t("alerts.verify"), {
          size: "sm", variant: "primary", icon: "check",
          data: { verify: alert.scientific_name, site: (alert.sites || [])[0] || "" }
        }) + "</div>" +
      "</div>");
  }

  function openVerifyForm(context) {
    var outcomes = [
      ["confirmed", t("verify.confirmed")],
      ["not_found", t("verify.notFound")],
      ["misidentified", t("verify.misidentified")],
      ["uncertain", t("verify.uncertain")]
    ];

    UI.modal(t("verify.title"),
      '<div class="stack">' +
      '<label class="field"><span>' + esc(t("verify.species")) + "</span>" +
        '<input id="vSpecies" type="text" value="' + esc(context.scientific_name || "") + '"></label>' +
      '<label class="field"><span>' + esc(t("verify.site")) + "</span>" +
        '<input id="vSite" type="text" value="' + esc(context.site_id || "") + '"></label>' +
      '<label class="field"><span>' + esc(t("verify.outcome")) + "</span>" +
        '<select id="vOutcome">' + outcomes.map(function (o) {
          return '<option value="' + o[0] + '">' + esc(o[1]) + "</option>";
        }).join("") + "</select></label>" +
      '<label class="field" id="vObservedWrap" style="display:none"><span>' +
        esc(t("verify.observedName")) + "</span>" +
        '<input id="vObserved" type="text" placeholder="Scientific name if you know it"></label>' +
      '<label class="field"><span>' + esc(t("verify.observer")) + "</span>" +
        '<input id="vObserver" type="text" placeholder="Name or officer id"></label>' +
      '<label class="field"><span>' + esc(t("verify.notes")) + "</span>" +
        '<textarea id="vNotes" placeholder="Method, effort, conditions"></textarea></label>' +
      '<div class="hint">Field checks are appended, never edited. A record of what ' +
      "somebody observed on a particular day is evidence, and evidence that can be " +
      "quietly rewritten is not evidence. Corrections are added as new entries.</div>" +
      "</div>",
      UI.button(t("verify.cancel"), { id: "vCancel" }) +
      UI.button(t("verify.submit"), { id: "vSave", variant: "primary", icon: "check" }));

    var outcome = document.getElementById("vOutcome");
    var observedWrap = document.getElementById("vObservedWrap");
    outcome.addEventListener("change", function () {
      observedWrap.style.display = outcome.value === "misidentified" ? "flex" : "none";
    });

    document.getElementById("vCancel").addEventListener("click", UI.closeModal);
    document.getElementById("vSave").addEventListener("click", function () {
      var payload = {
        scientific_name: document.getElementById("vSpecies").value.trim(),
        site_id: document.getElementById("vSite").value.trim(),
        outcome: outcome.value,
        observed_name: document.getElementById("vObserved").value.trim(),
        observer: document.getElementById("vObserver").value.trim(),
        notes: document.getElementById("vNotes").value.trim(),
        run_id: context.run_id || "",
        sample_id: context.sample_id || ""
      };
      if (!payload.scientific_name) {
        UI.toast("A species name is required", "error");
        return;
      }
      api("/api/verifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }).then(function () {
        UI.closeModal();
        UI.toast(t("verify.saved"), "success");
        state.alerts = {};
        resultsSignature = "";
        return poll();
      }).catch(function (e) { UI.toast(e.message, "error"); });
    });
  }

  /* ══════════════════════════════════════════════════════════════════════
     Feature: Settings and diagnostics
     ══════════════════════════════════════════════════════════════════════ */

  Registry.registerFeature({
    id: "settings", name: "Settings", slot: "main-view", order: 60,
    icon: "settings",
    label: function () { return t("nav.settings"); },
    mount: function (container) {
      container.innerHTML =
        '<div class="view-head"><div><h1>' + esc(t("settings.title")) + "</h1></div></div>" +
        '<div id="settingsBody"></div>';
    },
    refresh: function () { renderSettings(); }
  });

  function renderSettings() {
    var host = document.getElementById("settingsBody");
    if (!host) return;

    var health = state.health || { status: "unknown", checks: {} };

    host.innerHTML =
      UI.card("<h2>" + esc(t("settings.appearance")) + "</h2>" +
        '<div style="margin-top:16px">' +
        UI.toggle("themeSetting", t("settings.theme"), currentTheme() === "light") +
        '<div class="hint" style="margin-top:8px">' + esc(t("settings.themeHint")) + "</div></div>") +

      UI.card("<h2>" + esc(t("settings.health")) + "</h2>" +
        '<div class="row" style="margin-top:12px"><span class="health-dot ' +
        esc(health.status) + '"></span><b>' + esc(health.status) + "</b>" +
        '<span class="hint">uptime ' + UI.duration(health.uptime_seconds) + "</span></div>" +
        '<div class="table-wrap" style="margin-top:16px"><table class="data"><tbody>' +
        Object.keys(health.checks || {}).map(function (name) {
          var check = health.checks[name];
          return "<tr><td>" + esc(name.replace(/_/g, " ")) + "</td>" +
            "<td>" + UI.badge(check.ok ? "ok" : "failed", check.ok ? "healthy" : "failed") + "</td>" +
            '<td class="hint">' + esc(check.detail || "") + "</td></tr>";
        }).join("") + "</tbody></table></div>") +

      UI.card("<h2>" + esc(t("settings.channels")) + "</h2>" +
        '<p class="hint" style="margin-top:8px">Nothing sends unless it is configured. ' +
        "A dashboard that quietly emails people because a default was left on is " +
        "worse than one that does not email at all.</p>" +
        '<div id="channelsBody" style="margin-top:16px">' + UI.skeleton("line", 3) + "</div>") +

      UI.card("<h2>" + esc(t("settings.errors")) + "</h2>" +
        '<p class="hint" style="margin-top:8px">Every request carries an id and every ' +
        "failure is recorded against it, so a problem in a demo is a search rather " +
        "than an investigation.</p>" +
        '<div id="errorsBody" style="margin-top:16px">' + UI.skeleton("line", 3) + "</div>");

    var themeSetting = document.getElementById("themeSetting");
    themeSetting.addEventListener("change", function () {
      applyTheme(themeSetting.checked ? "light" : "dark");
      var btn = document.getElementById("themeBtn");
      if (btn) btn.innerHTML = UI.icon(currentTheme() === "light" ? "moon" : "sun", 17);
    });

    api("/api/channels").then(function (channels) {
      var host2 = document.getElementById("channelsBody");
      if (!host2) return;
      host2.innerHTML = '<div class="table-wrap"><table class="data"><tbody>' +
        ["log", "email", "webhook", "browser"].map(function (name) {
          var channel = channels[name] || {};
          return "<tr><td>" + esc(name) + "</td><td>" +
            UI.badge(channel.enabled ? "on" : "off", channel.enabled ? "healthy" : "info") +
            '</td><td class="hint">' + esc(channel.detail || "") + "</td></tr>";
        }).join("") + "</tbody></table></div>" +
        '<div class="hint" style="margin-top:12px">Minimum severity: <b>' +
        esc(channels.min_severity || "medium") + "</b></div>";
    }).catch(function () { /* diagnostics are best-effort */ });

    api("/api/errors").then(function (body) {
      var host3 = document.getElementById("errorsBody");
      if (!host3) return;
      var errors = body.errors || [];
      host3.innerHTML = errors.length
        ? '<div class="log-stream">' + errors.map(function (entry) {
            return "<div>" + esc(UI.istTime(entry.ts)) + "  " + esc(entry.exception) +
              ": " + esc(entry.message) +
              (entry.request_id ? "  [req " + esc(entry.request_id) + "]" : "") + "</div>";
          }).join("") + "</div>"
        : '<div class="hint">' + esc(t("settings.noErrors")) + "</div>";
    }).catch(function () { /* diagnostics are best-effort */ });
  }

  /* ══════════════════════════════════════════════════════════════════════
     Polling, live events, offline handling
     ══════════════════════════════════════════════════════════════════════ */

  function poll() {
    return Promise.all([
      api("/api/datasets").catch(function () { return null; }),
      api("/api/runs").catch(function () { return null; })
    ]).then(function (results) {
      if (results[0]) state.datasets = results[0].datasets || [];
      if (results[1]) state.runs = results[1].runs || [];
      if (results[0] || results[1]) {
        state.lastGoodAt = Date.now();
        setOnline(true);
      }

      setBadge("results", state.runs.filter(function (r) { return r.report; }).length);
      setBadge("monitor", state.runs.filter(function (r) {
        return r.status === "running" || r.status === "queued";
      }).length);

      if (!state.activeRun) {
        var newest = state.runs.filter(function (r) { return r.report; })[0];
        if (newest) state.activeRun = newest.run_id;
      }
      if (state.activeRun) ensureAnalysis(state.activeRun);

      renderDatasets();
      refreshActive();
    });
  }

  function pollHealth() {
    return api("/api/health").then(function (health) {
      state.health = health;
      var dot = document.getElementById("healthDot");
      var text = document.getElementById("healthText");
      if (dot) dot.className = "health-dot " + health.status;
      if (text) text.textContent = health.status;
      var chip = document.getElementById("healthChip");
      if (chip) {
        chip.title = health.failing && health.failing.length
          ? "Degraded: " + health.failing.join(", ")
          : "All checks passing";
      }
    }).catch(function () { setOnline(false); });
  }

  function setOnline(online) {
    if (state.online === online) return;
    state.online = online;
    var banner = document.getElementById("offlineBanner");
    if (!banner) return;
    banner.classList.toggle("hidden", online);
    if (!online) {
      banner.innerHTML = UI.icon("offline", 20) + "<span>" + esc(t("state.offline")) +
        (state.lastGoodAt ? " (" + UI.istTime(new Date(state.lastGoodAt).toISOString()) + ")" : "") +
        "</span>";
    }
  }

  window.addEventListener("online", function () { setOnline(true); poll(); });
  window.addEventListener("offline", function () { setOnline(false); });

  /* Server-sent events rather than WebSockets. The stdlib HTTP server can hold
     a response open and write to it; a WebSocket handshake would mean
     implementing RFC 6455 framing by hand for a stream that only ever flows one
     way. EventSource also reconnects on its own, which is most of what the
     WebSocket code would have had to do. */
  function connectEvents() {
    if (typeof EventSource === "undefined") return;
    var source = new EventSource("/api/events");

    source.addEventListener("progress", function (event) {
      var payload = JSON.parse(event.data);
      var run = state.runs.filter(function (r) { return r.run_id === payload.run_id; })[0];
      if (run) {
        run.percent = payload.percent;
        run.stage = payload.stage;
        run.stages = payload.stages || run.stages;
        run.recent_log = payload.recent_log || run.recent_log;
        if (activeViewId === "monitor") renderMonitor();
      }
    });

    source.addEventListener("run", function () {
      resultsSignature = "";
      datasetSignature = "";
      poll();
    });

    source.addEventListener("alert", function (event) {
      var payload = JSON.parse(event.data);
      UI.toast(payload.title + " — " + payload.body,
               payload.severity === "high" ? "error" : "warning", 9000);
      notifyBrowser(payload);
      state.alerts = {};
    });

    source.onerror = function () { setOnline(false); };
    source.onopen = function () { setOnline(true); };
  }

  /* The browser Notification API, not a service worker. This reaches a tab that
     is open behind other windows, which is the realistic demo and field case;
     a closed-tab push needs a push service and a VAPID key pair, which is a
     deployment concern rather than an app one. */
  function notifyBrowser(payload) {
    if (!("Notification" in window)) return;
    if (Notification.permission === "granted") {
      new Notification("BioRadar: " + payload.title, { body: payload.body });
    } else if (Notification.permission !== "denied" && payload.severity === "high") {
      Notification.requestPermission();
    }
  }

  /* ══════════════════════════════════════════════════════════════════════
     Boot
     ══════════════════════════════════════════════════════════════════════ */

  function boot() {
    restoreTheme();
    I18n.restore();
    buildShell();

    var wanted = (location.hash || "").replace("#", "");
    showView(Registry.get(wanted) ? wanted : "analyze");

    document.addEventListener("bioradar:language", function () {
      // Rebuilding the shell re-runs every label function, so a language switch
      // does not need every feature to know about i18n.
      Registry.all().forEach(function (f) { f.mounted = false; });
      buildShell();
      resultsSignature = "";
      datasetSignature = "";
      showView(activeViewId || "analyze");
      poll();
    });

    document.addEventListener("bioradar:theme", function () {
      resultsSignature = "";
      if (activeViewId === "compare") renderCompare();
    });

    poll();
    pollHealth();
    connectEvents();

    // A slow safety net beneath the event stream: if SSE is blocked by a proxy
    // the UI still converges, just less promptly.
    setInterval(poll, 6000);
    setInterval(pollHealth, 30000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
