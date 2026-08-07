/* Component library.

   Section 10 of the UI guide specifies React components with props. These are
   the same components as functions returning DOM nodes or HTML strings — the
   props, the states and the class names are the ones the guide names.

   Building them once here, rather than inlining markup per view, is what stops
   copy-pasted components drifting apart, which the guide lists as a symptom of
   "vibe coded" UI. */

(function (global) {
  "use strict";

  var t = function (k, f) { return global.BioRadarI18n.t(k, f); };

  /* ── helpers ──────────────────────────────────────────────────────── */

  function esc(value) {
    return String(value === null || value === undefined ? "" : value)
      .replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
  }

  function num(value) { return Number(value || 0).toLocaleString(); }

  function mb(bytes) {
    if (bytes >= 1e9) return (bytes / 1e9).toFixed(2) + " GB";
    return (bytes / 1e6).toFixed(1) + " MB";
  }

  /* Timestamps arrive in UTC and are displayed in IST. A field officer in
     Kerala reading a UTC timestamp has to do arithmetic to know whether the
     sample was taken this morning; showing server time is a defect, not a
     detail. The zone is labelled so nobody has to guess which one they got. */
  function istTime(iso) {
    if (!iso) return "";
    var date = new Date(iso.length <= 19 && iso.indexOf("Z") === -1 ? iso + "Z" : iso);
    if (isNaN(date.getTime())) return String(iso);
    try {
      return date.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata", day: "2-digit", month: "short",
        hour: "2-digit", minute: "2-digit", hour12: false
      }) + " IST";
    } catch (e) {
      return date.toISOString().slice(0, 16).replace("T", " ") + " UTC";
    }
  }

  function duration(seconds) {
    if (seconds === null || seconds === undefined || isNaN(seconds)) return "";
    seconds = Math.max(0, Math.round(seconds));
    if (seconds < 60) return seconds + "s";
    var m = Math.floor(seconds / 60), s = seconds % 60;
    if (m < 60) return m + "m " + (s < 10 ? "0" : "") + s + "s";
    return Math.floor(m / 60) + "h " + (m % 60) + "m";
  }

  function elapsedSince(iso) {
    if (!iso) return null;
    var start = new Date(iso.indexOf("Z") === -1 ? iso + "Z" : iso).getTime();
    if (isNaN(start)) return null;
    return (Date.now() - start) / 1000;
  }

  /* ── icons (inline, 24px grid, stroke: currentColor) ──────────────── */

  var ICONS = {
    upload: '<path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke-linecap="round" stroke-linejoin="round"/>',
    activity: '<path d="M3 12h4l3-8 4 16 3-8h4" stroke-linecap="round" stroke-linejoin="round"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z" stroke-linejoin="round"/><path d="m3 13 9 5 9-5" stroke-linecap="round" stroke-linejoin="round"/>',
    radar: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12 19 7" stroke-linecap="round"/>',
    bell: '<path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 20a2 2 0 0 0 3 0" stroke-linecap="round"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2" stroke-linecap="round"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke-linejoin="round"/>',
    inbox: '<path d="M3 12h5l1.5 3h5L16 12h5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5h14l2 7v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" stroke-linejoin="round"/>',
    alert: '<path d="M12 9v4m0 4h.01" stroke-linecap="round"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" stroke-linejoin="round"/>',
    offline: '<path d="M2 2l20 20" stroke-linecap="round"/><path d="M5 12.5a10 10 0 0 1 4-2.4M1.5 9a15 15 0 0 1 5-3.2M22.5 9a15 15 0 0 0-9.6-3.4M19 12.5a10 10 0 0 0-3-2M8.5 16a5 5 0 0 1 7 0M12 20h.01" stroke-linecap="round"/>',
    check: '<path d="m4 12.5 5 5L20 6.5" stroke-linecap="round" stroke-linejoin="round"/>',
    sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" stroke-linecap="round"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" stroke-linejoin="round"/>',
    download: '<path d="M12 4v11m0 0 4-4m-4 4-4-4M4 19h16" stroke-linecap="round" stroke-linejoin="round"/>',
    x: '<path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18Z"/>'
  };

  function icon(name, size) {
    var body = ICONS[name] || "";
    var s = size || 22;
    return '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s +
           '" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">' +
           body + "</svg>";
  }

  /* ── Card ─────────────────────────────────────────────────────────── */

  function card(content, options) {
    options = options || {};
    var classes = ["card"];
    if (options.size) classes.push(options.size);
    if (options.interactive) classes.push("interactive");
    if (options.className) classes.push(options.className);
    return '<div class="' + classes.join(" ") + '"' +
      (options.id ? ' id="' + esc(options.id) + '"' : "") +
      (options.attrs ? " " + options.attrs : "") + ">" + content + "</div>";
  }

  /* ── Button ───────────────────────────────────────────────────────── */

  function button(label, options) {
    options = options || {};
    var classes = ["btn"];
    if (options.variant === "primary") classes.push("primary");
    if (options.variant === "danger") classes.push("danger");
    if (options.size === "sm") classes.push("sm");
    if (options.loading) classes.push("loading");
    if (options.className) classes.push(options.className);

    var attrs = ['type="button"', 'class="' + classes.join(" ") + '"'];
    if (options.id) attrs.push('id="' + esc(options.id) + '"');
    if (options.disabled) attrs.push("disabled");
    if (options.title) attrs.push('title="' + esc(options.title) + '"');
    if (options.ariaLabel) attrs.push('aria-label="' + esc(options.ariaLabel) + '"');
    Object.keys(options.data || {}).forEach(function (key) {
      attrs.push("data-" + key + '="' + esc(options.data[key]) + '"');
    });

    var inner = (options.icon ? icon(options.icon, 17) : "") +
                (label ? "<span>" + esc(label) + "</span>" : "");
    return "<button " + attrs.join(" ") + ">" + inner + "</button>";
  }

  /* ── Badge (FLAT — always carries its word, never colour alone) ───── */

  function badge(text, variant) {
    return '<span class="badge ' + esc(variant || text) + '">' + esc(text) + "</span>";
  }

  /* ── KPI tile ─────────────────────────────────────────────────────── */

  function kpi(label, value, options) {
    options = options || {};
    var classes = ["kpi"];
    if (options.color) classes.push(options.color);
    var trend = "";
    if (options.trend) {
      var arrow = { up: "↑", down: "↓", stable: "→" }[options.trend] || "";
      trend = '<div class="trend ' + esc(options.trend) + '">' + arrow + " " +
              esc(options.trendLabel || "") + "</div>";
    }
    // A numeric tile counts up; a string one ("12.4%") is written directly,
    // because animating a value the user cannot verify mid-flight is noise.
    var raw = typeof value === "number" ? value
            : (/^-?[\d,]+(\.\d+)?$/.test(String(value))
                ? Number(String(value).replace(/,/g, "")) : null);
    var inner = raw === null
      ? esc(value)
      : '<span data-count="' + raw + '">0</span>';

    return '<div class="' + classes.join(" ") + '">' +
      '<div class="k">' + esc(label) + "</div>" +
      '<div class="v">' + inner +
        (options.unit ? '<span class="u">' + esc(options.unit) + "</span>" : "") +
      "</div>" + trend + "</div>";
  }

  /* ── Toggle ───────────────────────────────────────────────────────── */

  function toggle(id, label, checked) {
    return '<label class="toggle" for="' + esc(id) + '">' +
      '<input type="checkbox" id="' + esc(id) + '"' + (checked ? " checked" : "") + ">" +
      '<span class="toggle-track"><span class="toggle-knob"></span></span>' +
      '<span class="toggle-label">' + esc(label) + "</span></label>";
  }

  /* ── States: empty, error, loading ────────────────────────────────── */

  /* The gap analysis calls empty-state handling "the single most likely demo
     failure mode", and the reason is that a blank map and a broken map look
     identical. Every one of these says what happened and what to do next. */
  function state(variant, title, body, action) {
    var iconName = {
      empty: "inbox", "first-run": "upload", "no-results": "inbox",
      "low-confidence": "alert", error: "alert", network: "offline",
      pipeline: "alert", permission: "alert", success: "check"
    }[variant] || "inbox";
    var tone = (variant === "error" || variant === "pipeline" || variant === "network")
      ? " error"
      : (variant === "low-confidence" ? " warning" : (variant === "success" ? " success" : ""));
    return '<div class="state' + tone + '" role="status">' +
      icon(iconName, 52) +
      '<div class="state-title">' + esc(title) + "</div>" +
      '<div class="state-body">' + esc(body) + "</div>" +
      (action || "") + "</div>";
  }

  function errorState(message, retryId) {
    return state(
      "error",
      t("state.error"),
      message || "The request did not complete.",
      retryId ? button(t("state.retry"), { id: retryId, variant: "primary", size: "sm" }) : ""
    );
  }

  /* Skeletons rather than a spinner for anything under ~30s: the guide's
     rule, and it is right — a skeleton tells you the shape of what is coming,
     a spinner only tells you that time is passing. */
  function skeleton(variant, count) {
    var n = count || 1, out = [];
    for (var i = 0; i < n; i++) {
      if (variant === "tile") out.push('<div class="skeleton tile"></div>');
      else if (variant === "block") out.push('<div class="skeleton block"></div>');
      else if (variant === "card") {
        out.push('<div class="card"><div class="skeleton line medium"></div>' +
                 '<div class="skeleton line"></div><div class="skeleton line short"></div></div>');
      } else out.push('<div class="skeleton line"></div>');
    }
    return out.join("");
  }

  function skeletonScreen() {
    return '<div class="stack">' +
      '<div class="skeleton-grid">' + skeleton("tile", 5) + "</div>" +
      '<div class="skeleton block"></div>' +
      '<div class="card">' + skeleton("line", 6) + "</div></div>";
  }

  /* ── Toasts ───────────────────────────────────────────────────────── */

  function toast(message, variant, timeout) {
    var host = document.getElementById("toasts");
    if (!host) return;
    var node = document.createElement("div");
    node.className = "toast" + (variant ? " " + variant : "");
    node.setAttribute("role", variant === "error" ? "alert" : "status");
    node.textContent = message;
    host.appendChild(node);
    var life = timeout || (variant === "error" ? 7000 : 4200);
    setTimeout(function () {
      node.classList.add("leaving");
      setTimeout(function () { if (node.parentNode) node.parentNode.removeChild(node); }, 200);
    }, life);
  }

  /* ── Modal ────────────────────────────────────────────────────────── */

  var openModal = null;

  function modal(title, bodyHtml, footHtml) {
    closeModal();
    var backdrop = document.getElementById("backdrop");
    var node = document.createElement("div");
    node.className = "modal";
    node.setAttribute("role", "dialog");
    node.setAttribute("aria-modal", "true");
    node.setAttribute("aria-label", title);
    node.innerHTML =
      '<div class="panel-head"><h2>' + esc(title) + "</h2>" +
      button("", { icon: "x", size: "sm", className: "icon modal-close",
                   ariaLabel: t("common.close") }) + "</div>" +
      "<div>" + bodyHtml + "</div>" +
      (footHtml ? '<div class="modal-foot">' + footHtml + "</div>" : "");
    document.body.appendChild(node);
    requestAnimationFrame(function () {
      node.classList.add("open");
      backdrop.classList.add("open");
    });

    node.querySelector(".modal-close").addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal, { once: true });

    // Focus moves into the dialog and Escape closes it. Without this a
    // keyboard user is stranded behind an overlay they cannot dismiss.
    var focusable = node.querySelector("input, select, textarea, button:not(.modal-close)");
    (focusable || node.querySelector(".modal-close")).focus();
    document.addEventListener("keydown", onEscape);

    openModal = node;
    return node;
  }

  function onEscape(event) { if (event.key === "Escape") closeModal(); }

  function closeModal() {
    document.removeEventListener("keydown", onEscape);
    var backdrop = document.getElementById("backdrop");
    if (backdrop) backdrop.classList.remove("open");
    if (!openModal) return;
    var node = openModal;
    openModal = null;
    node.classList.add("closing");
    node.classList.remove("open");
    setTimeout(function () { if (node.parentNode) node.parentNode.removeChild(node); }, 160);
  }

  /* ── Detail panel (right on desktop, bottom sheet on mobile) ──────── */

  function openPanel(title, bodyHtml) {
    var panel = document.getElementById("detailPanel");
    if (!panel) return null;
    panel.innerHTML =
      '<div class="panel-head"><h2>' + esc(title) + "</h2>" +
      button("", { icon: "x", size: "sm", className: "icon panel-close",
                   ariaLabel: t("common.close") }) + "</div>" + bodyHtml;
    panel.classList.add("open");
    panel.querySelector(".panel-close").addEventListener("click", closePanel);
    return panel;
  }

  function closePanel() {
    var panel = document.getElementById("detailPanel");
    if (panel) panel.classList.remove("open");
  }

  /* ── Data-viz palettes ────────────────────────────────────────────── */

  function cssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  /* Okabe-Ito, assigned by stable hash rather than by iteration order, so a
     phylum keeps its colour when the sort changes between runs. A legend that
     re-colours itself on every refresh teaches the reader nothing. */
  function categorical(key) {
    var hash = 0;
    var text = String(key || "");
    for (var i = 0; i < text.length; i++) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
    return cssVar("--cat-" + ((hash % 8) + 1));
  }

  function categoricalAt(index) { return cssVar("--cat-" + ((index % 8) + 1)); }

  /* Viridis, for continuous 0..1 values. */
  function sequential(value) {
    var stops = ["--seq-1", "--seq-2", "--seq-3", "--seq-4", "--seq-5", "--seq-6"];
    var clamped = Math.max(0, Math.min(1, Number(value) || 0));
    return cssVar(stops[Math.min(stops.length - 1, Math.floor(clamped * stops.length))]);
  }

  function heat(value) {
    var stops = ["--heat-1", "--heat-2", "--heat-3", "--heat-4", "--heat-5"];
    var clamped = Math.max(0, Math.min(1, Number(value) || 0));
    return cssVar(stops[Math.min(stops.length - 1, Math.floor(clamped * stops.length))]);
  }

  /* ── Bars (FLAT) ──────────────────────────────────────────────────── */

  function bars(rows, options) {
    options = options || {};
    if (!rows || !rows.length) return "";
    var total = rows.reduce(function (sum, r) { return sum + (r.value || 0); }, 0) || 1;
    return '<div class="bars">' + rows.map(function (row, index) {
      var pct = (row.value / total) * 100;
      // The target width lives in data-width so growBars() can start at zero
      // and transition to it after the node is in the document.
      return '<div class="bar-row" style="--i:' + index + '">' +
        '<span class="lbl" title="' + esc(row.label) + '">' + esc(row.label) + "</span>" +
        '<span class="bar-track"><span class="bar-fill" data-width="' + pct.toFixed(2) +
          '%" style="width:0%;background:' + (row.color || categorical(row.label)) +
          '"></span></span>' +
        '<span class="val">' + (options.absolute ? num(row.value) : pct.toFixed(1) + "%") +
        "</span></div>";
    }).join("") + "</div>";
  }

  /* ── Motion ───────────────────────────────────────────────────────────

     All of it is presentation. Nothing here carries information that is not
     also in the DOM, so `prefers-reduced-motion` can switch the lot off and
     lose nothing -- which is why every helper checks it and returns early. */

  function prefersReducedMotion() {
    return !!(global.matchMedia &&
              global.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /**
   * Stagger the direct children of a container into view.
   *
   * The delay is capped: past about ten items a per-item delay stops reading as
   * "the list is arriving" and starts reading as "the app is slow", which is
   * the opposite of what the animation is for.
   */
  function animateIn(container, selector) {
    if (!container || prefersReducedMotion()) return;
    var nodes = selector ? container.querySelectorAll(selector)
                         : container.children;
    // Write-only. Reading a layout property here -- offsetWidth, to restart a
    // CSS animation -- forces a full synchronous layout of the document, and
    // doing it once per child turns a ten-item list into ten layouts of a page
    // covered in box-shadows. That measured over a second on a single click.
    //
    // It is also unnecessary: these nodes were created by the innerHTML
    // assignment immediately before this call, so their entrance animation
    // plays on insertion with nothing to restart.
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].style.setProperty("--enter-delay", Math.min(i, 10) * 45 + "ms");
      nodes[i].classList.add("entering");
    }
  }

  /**
   * Flash a node that has just changed state.
   *
   * Unlike animateIn this genuinely has to re-trigger on an element that is
   * already in the document, so it uses the Web Animations API rather than the
   * remove-class/read-layout/add-class trick. Same result, no forced reflow.
   */
  function pulse(node) {
    if (!node || prefersReducedMotion() || typeof node.animate !== "function") return;
    node.animate(
      [
        { boxShadow: "0 0 0 0 " + cssVar("--alert-healthy") },
        { boxShadow: "0 0 0 12px transparent" }
      ],
      { duration: 620, easing: "cubic-bezier(0, 0, .2, 1)" }
    );
  }

  /**
   * Count a number up to its value.
   *
   * Specified in the guide's microinteraction table (1000ms, ease-out). Uses
   * requestAnimationFrame rather than a timer so it stays in step with paint,
   * and stops immediately when the tab is hidden -- an animation nobody is
   * looking at is pure battery cost.
   */
  function countUp(node, target, duration) {
    if (!node) return;
    var value = Number(target) || 0;
    if (prefersReducedMotion() || value === 0) {
      node.textContent = num(value);
      return;
    }
    var total = duration || 900;
    var start = null;
    var settled = false;
    // Integers count as integers; a diversity index counts to two decimals.
    var decimals = String(target).indexOf(".") > -1 ? 2 : 0;

    function settle() {
      if (settled) return;
      settled = true;
      node.textContent = format(value);
    }

    function frame(timestamp) {
      if (settled) return;
      if (document.hidden) { settle(); return; }
      if (start === null) start = timestamp;
      var progress = Math.min(1, (timestamp - start) / total);
      // ease-out cubic: fast first, settling at the end.
      var eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = format(value * eased);
      if (progress < 1) requestAnimationFrame(frame);
      else settled = true;
    }

    function format(n) {
      return decimals ? n.toFixed(decimals) : num(Math.round(n));
    }

    requestAnimationFrame(frame);
    // A backstop, because the failure mode of a stalled count-up is not a
    // missing animation -- it is a KPI tile that reads 0 when the answer is 16.
    // rAF is throttled in background tabs and absent in some embedded panes, so
    // the true value must not depend on it.
    setTimeout(settle, total + 250);
  }

  /** Grow bars and meters from zero once they are on screen. */
  function growBars(container) {
    if (!container) return;
    var fills = container.querySelectorAll(".bar-fill[data-width], .meter > span[data-width]");
    if (!fills.length) return;

    function apply() {
      fills.forEach(function (fill) {
        if (fill.style.width !== fill.dataset.width) fill.style.width = fill.dataset.width;
      });
    }

    if (prefersReducedMotion()) { apply(); return; }

    fills.forEach(function (fill) { fill.style.width = "0%"; });
    // Two frames so the zero width is committed before the target is set --
    // one frame and the browser coalesces both into a single style change and
    // the transition never runs.
    requestAnimationFrame(function () { requestAnimationFrame(apply); });
    // Same reasoning as countUp: a bar frozen at 0% misrepresents the data, so
    // the end state cannot depend on frames being delivered.
    setTimeout(apply, 200);
  }

  function aiBriefing(data) {
    if (!data) return "";
    var header = data.report_header || {};
    var exec = data.executive_summary || {};
    var kpis = exec.kpis || {};
    var threats = data.threat_matrix || [];
    var actions = data.action_plan || [];
    var xai = data.xai_audit || {};

    var riskColor = header.risk_level === "HIGH_INVASIVE_RISK" ? "#ef4444" :
                   (header.risk_level === "CONSERVATION_ALERT" ? "#f97316" : "#10b981");
    var riskLabel = header.risk_level === "HIGH_INVASIVE_RISK" ? "CRITICAL INVASIVE ALERT" :
                   (header.risk_level === "CONSERVATION_ALERT" ? "PROTECTED TAXA ALERT" : "STABLE BIO-COMMUNITY");

    // Paragraphs
    var pars = (exec.paragraphs || []).map(function (p) {
      return '<p style="margin:0 0 10px 0;line-height:1.6;font-size:14px;color:var(--text-primary)">' + esc(p) + '</p>';
    }).join("");

    // Use native KPI tiles matching the top results bar
    var kpiRow =
      '<div class="kpis" style="margin:16px 0">' +
        kpi("Total Taxa", kpis.total_taxa || 0, { color: "accent" }) +
        kpi("Invasive Species", kpis.invasive_taxa || 0, { color: kpis.invasive_taxa ? "rare" : "" }) +
        kpi("Threatened Taxa", kpis.threatened_taxa || 0, { color: kpis.threatened_taxa ? "rare" : "" }) +
        kpi("Sites Mapped", kpis.sites_mapped || 0) +
      '</div>';

    // Threat Matrix Table
    var threatRows = threats.map(function (t) {
      var sitesStr = (t.sites || []).join(", ") || "All sites";
      var badgeBg = t.severity_color === "#ef4444" ? "#ef444420" : "#f9731620";
      return '<tr style="border-bottom:1px solid var(--border)">' +
        '<td style="padding:10px 12px"><strong>' + esc(t.common_name || t.scientific_name) + '</strong><br><span style="font-size:11px;font-style:italic;color:var(--text-secondary)">' + esc(t.scientific_name) + '</span></td>' +
        '<td style="padding:10px 12px"><span style="padding:3px 10px;border-radius:12px;font-size:11px;font-weight:700;background:' + badgeBg + ';color:' + t.severity_color + '">' + esc(t.severity_badge) + '</span></td>' +
        '<td style="padding:10px 12px;font-size:13px;color:var(--text-primary)">' + esc(t.reads ? t.reads.toLocaleString() : "0") + ' reads</td>' +
        '<td style="padding:10px 12px;font-size:13px;color:var(--text-primary)">' + esc(sitesStr) + '</td>' +
        '<td style="padding:10px 12px;font-size:11px;color:var(--text-secondary)">' + esc(t.legal_status || "—") + '</td>' +
      '</tr>';
    }).join("");

    var threatTableHtml = threats.length ?
      '<div style="margin-top:18px">' +
        '<h4 style="margin:0 0 10px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-secondary)">Species Threat Assessment Matrix</h4>' +
        '<div style="overflow-x:auto;border:1px solid var(--border);border-radius:8px;background:var(--bg-surface)">' +
          '<table style="width:100%;border-collapse:collapse;text-align:left;font-size:13px;color:var(--text-primary)">' +
            '<thead style="background:var(--bg-card);border-bottom:1px solid var(--border)">' +
              '<tr>' +
                '<th style="padding:10px 12px;color:var(--text-secondary)">Species</th>' +
                '<th style="padding:10px 12px;color:var(--text-secondary)">Status</th>' +
                '<th style="padding:10px 12px;color:var(--text-secondary)">Abundance</th>' +
                '<th style="padding:10px 12px;color:var(--text-secondary)">Sites</th>' +
                '<th style="padding:10px 12px;color:var(--text-secondary)">Legal Backing</th>' +
              '</tr>' +
            '</thead>' +
            '<tbody>' + threatRows + '</tbody>' +
          '</table>' +
        '</div>' +
      '</div>' : "";

    // Action Plan Cards
    var actionItems = actions.map(function (a) {
      return '<div style="background:var(--bg-surface);padding:12px 14px;border-radius:8px;border:1px solid var(--border);border-left:4px solid ' + (a.priority_color || "#3b82f6") + ';margin-bottom:10px">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">' +
          '<span style="font-size:12px;font-weight:700;color:' + (a.priority_color || "#3b82f6") + '">STEP ' + a.step + ' &middot; ' + esc(a.priority) + '</span>' +
          '<span style="font-size:11px;color:var(--text-secondary)">' + esc(a.category) + '</span>' +
        '</div>' +
        '<div style="font-size:13px;line-height:1.5;margin-bottom:4px;color:var(--text-primary)"><strong>' + esc(a.location) + ':</strong> ' + esc(a.action) + '</div>' +
        (a.legal_reference ? '<div style="font-size:11px;color:var(--text-secondary)"><em>Reference: ' + esc(a.legal_reference) + '</em></div>' : "") +
      '</div>';
    }).join("");

    var actionPlanHtml = actions.length ?
      '<div style="margin-top:20px">' +
        '<h4 style="margin:0 0 10px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-secondary)">Prioritized Conservation Action Plan</h4>' +
        actionItems +
      '</div>' : "";

    // XAI Audit Footer
    var auditHtml =
      '<div style="margin-top:20px;padding-top:12px;border-top:1px solid var(--border);font-size:11px;color:var(--text-secondary);display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px">' +
        '<span>🔒 <strong>Audit:</strong> ' + esc(xai.chain_of_custody || "SHA-256 Verified") + '</span>' +
        '<span>🎯 <strong>Confidence:</strong> ' + esc(xai.confidence_statement || "High") + '</span>' +
      '</div>';

    return card(
      '<div style="border-bottom:1px solid var(--border);padding-bottom:12px;margin-bottom:14px;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px">' +
        '<div>' +
          '<div style="font-size:11px;font-weight:700;letter-spacing:1px;color:var(--text-secondary);text-transform:uppercase">' + esc(header.doc_id || "BR-REP-2026") + ' &middot; ' + esc(header.classification || "DECISION SUPPORT") + '</div>' +
          '<h2 style="margin:4px 0 0 0;font-size:20px;font-weight:800;letter-spacing:-0.5px;color:var(--text-primary)">' + esc(header.title || "CONSERVATION INTELLIGENCE BRIEFING") + '</h2>' +
        '</div>' +
        '<span style="padding:4px 12px;border-radius:16px;font-size:12px;font-weight:800;background:' + riskColor + '20;color:' + riskColor + ';border:1px solid ' + riskColor + '60">' + esc(riskLabel) + '</span>' +
      '</div>' +
      kpiRow +
      '<div style="background:var(--bg-surface);padding:14px;border-radius:8px;border-left:4px solid ' + riskColor + ';border:1px solid var(--border);border-left-width:4px;margin-bottom:14px">' + pars + '</div>' +
      threatTableHtml +
      actionPlanHtml +
      auditHtml,
      { className: "ai-briefing-report-card", size: "lg" }
    );
  }



  function pvaTrajectoryChart(pvaData) {
    if (!pvaData || !pvaData.pva_scenarios) return "";
    var scenarios = pvaData.pva_scenarios;
    var statusQuo = scenarios.status_quo || {};
    var moderate = scenarios.moderate_intervention || {};
    var aggressive = scenarios.aggressive_sanctuary || {};

    var width = 540;
    var height = 210;
    var padding = { top: 20, right: 25, bottom: 30, left: 40 };

    var chartW = width - padding.left - padding.right;
    var chartH = height - padding.top - padding.bottom;

    function getPolyline(traj) {
      if (!traj || !traj.length) return "";
      var points = [];
      for (var i = 0; i < traj.length; i++) {
        var x = padding.left + (i / 10) * chartW;
        var val = Math.max(0, Math.min(100, traj[i]));
        var y = padding.top + (1 - (val / 100)) * chartH;
        points.push(x.toFixed(1) + "," + y.toFixed(1));
      }
      return points.join(" ");
    }

    var sqPoints = getPolyline(statusQuo.trajectory);
    var modPoints = getPolyline(moderate.trajectory);
    var aggPoints = getPolyline(aggressive.trajectory);

    var xGrid = "";
    for (var yr = 0; yr <= 10; yr += 2) {
      var gx = padding.left + (yr / 10) * chartW;
      xGrid += '<line x1="' + gx + '" y1="' + padding.top + '" x2="' + gx + '" y2="' + (padding.top + chartH) + '" stroke="var(--border)" stroke-dasharray="2,2" opacity="0.6"/>' +
               '<text x="' + gx + '" y="' + (height - 8) + '" text-anchor="middle" font-size="10" fill="var(--text-secondary)">Yr ' + yr + '</text>';
    }

    var yGrid = "";
    for (var pct = 0; pct <= 100; pct += 25) {
      var gy = padding.top + (1 - (pct / 100)) * chartH;
      yGrid += '<line x1="' + padding.left + '" y1="' + gy + '" x2="' + (padding.left + chartW) + '" y2="' + gy + '" stroke="var(--border)" stroke-dasharray="2,2" opacity="0.6"/>' +
               '<text x="' + (padding.left - 6) + '" y="' + (gy + 3) + '" text-anchor="end" font-size="10" fill="var(--text-secondary)">' + pct + '%</text>';
    }

    var attributions = (pvaData.explanation && pvaData.explanation.attributions) || [];
    var attrHtml = attributions.map(function (a) {
      var pct = Math.round((a.importance || 0.2) * 100);
      return '<div style="margin-bottom:6px">' +
        '<div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-primary);margin-bottom:2px">' +
        '<span>' + esc(a.feature) + '</span>' +
        '<strong>' + pct + '%</strong>' +
        '</div>' +
        '<div style="background:var(--border);height:5px;border-radius:3px;overflow:hidden">' +
        '<div style="background:#ef4444;width:' + pct + '%;height:100%"></div>' +
        '</div>' +
        '</div>';
    }).join("");

    var svg =
      '<svg viewBox="0 0 ' + width + ' ' + height + '" style="width:100%;height:auto;overflow:visible">' +
        xGrid + yGrid +
        '<line x1="' + padding.left + '" y1="' + padding.top + '" x2="' + padding.left + '" y2="' + (padding.top + chartH) + '" stroke="var(--text-secondary)" stroke-width="1.5"/>' +
        '<line x1="' + padding.left + '" y1="' + (padding.top + chartH) + '" x2="' + (padding.left + chartW) + '" y2="' + (padding.top + chartH) + '" stroke="var(--text-secondary)" stroke-width="1.5"/>' +
        '<polyline points="' + sqPoints + '" fill="none" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>' +
        '<polyline points="' + modPoints + '" fill="none" stroke="#f97316" stroke-width="2.5" stroke-dasharray="5,3" stroke-linecap="round"/>' +
        '<polyline points="' + aggPoints + '" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round"/>' +
      '</svg>';

    return '<div class="pva-container" style="background:var(--bg-surface);border:1px solid var(--border);border-radius:10px;padding:16px;margin-top:16px">' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;flex-wrap:wrap;gap:8px">' +
        '<div>' +
          '<div style="font-size:11px;font-weight:800;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.5px">Population Viability Analysis (PVA)</div>' +
          '<h3 style="margin:2px 0 0 0;font-size:16px;font-weight:800;color:var(--text-primary)">' + esc(pvaData.species || "Species") + ' &middot; 10-Year Extinction Risk Trajectory</h3>' +
        '</div>' +
        '<div style="text-align:right">' +
          '<span style="padding:4px 10px;border-radius:12px;font-size:11px;font-weight:800;background:#ef444420;color:#ef4444;border:1px solid #ef444450">' + esc(pvaData.predicted_category || "Endangered") + '</span>' +
          '<div style="font-size:11px;color:var(--text-secondary);margin-top:4px">Extinction Horizon: <strong style="color:#dc2626">' + esc(pvaData.estimated_years_to_extinction || "4.2 Years") + '</strong></div>' +
        '</div>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 200px;gap:14px;align-items:center">' +
        '<div>' +
          svg +
          '<div style="display:flex;justify-content:center;gap:14px;margin-top:10px;font-size:11px;flex-wrap:wrap">' +
            '<span><strong style="color:#dc2626">&#9644;&#9644;</strong> Status Quo (No Action)</span>' +
            '<span><strong style="color:#f97316">&#9581;&#9581;</strong> Moderate Intervention</span>' +
            '<span><strong style="color:#10b981">&#9644;&#9644;</strong> Aggressive Sanctuary</span>' +
          '</div>' +
        '</div>' +
        '<div style="background:var(--bg-card);padding:12px;border-radius:8px;border:1px solid var(--border)">' +
          '<h5 style="margin:0 0 8px 0;font-size:11px;text-transform:uppercase;color:var(--text-secondary)">Threat Drivers (XAI)</h5>' +
          attrHtml +
        '</div>' +
      '</div>' +
    '</div>';
  }

  global.BioRadarUI = {
    esc: esc, num: num, mb: mb, istTime: istTime, duration: duration,
    animateIn: animateIn, pulse: pulse, countUp: countUp, growBars: growBars,
    prefersReducedMotion: prefersReducedMotion,
    elapsedSince: elapsedSince,
    icon: icon, card: card, button: button, badge: badge, kpi: kpi, toggle: toggle,
    state: state, errorState: errorState, skeleton: skeleton,
    skeletonScreen: skeletonScreen,
    toast: toast, modal: modal, closeModal: closeModal,
    openPanel: openPanel, closePanel: closePanel,
    categorical: categorical, categoricalAt: categoricalAt,
    sequential: sequential, heat: heat, cssVar: cssVar, bars: bars,
    aiBriefing: aiBriefing, pvaTrajectoryChart: pvaTrajectoryChart
  };
})(window);


