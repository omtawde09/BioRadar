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
      (options.id ? ' id="' + esc(options.id) + '"' : "") + ">" + content + "</div>";
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
    return '<div class="' + classes.join(" ") + '">' +
      '<div class="k">' + esc(label) + "</div>" +
      '<div class="v">' + esc(value) +
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
    return '<div class="bars">' + rows.map(function (row) {
      var pct = (row.value / total) * 100;
      return '<div class="bar-row">' +
        '<span class="lbl" title="' + esc(row.label) + '">' + esc(row.label) + "</span>" +
        '<span class="bar-track"><span class="bar-fill" style="width:' + pct.toFixed(2) +
          "%;background:" + (row.color || categorical(row.label)) + '"></span></span>' +
        '<span class="val">' + (options.absolute ? num(row.value) : pct.toFixed(1) + "%") +
        "</span></div>";
    }).join("") + "</div>";
  }

  global.BioRadarUI = {
    esc: esc, num: num, mb: mb, istTime: istTime, duration: duration,
    elapsedSince: elapsedSince,
    icon: icon, card: card, button: button, badge: badge, kpi: kpi, toggle: toggle,
    state: state, errorState: errorState, skeleton: skeleton,
    skeletonScreen: skeletonScreen,
    toast: toast, modal: modal, closeModal: closeModal,
    openPanel: openPanel, closePanel: closePanel,
    categorical: categorical, categoricalAt: categoricalAt,
    sequential: sequential, heat: heat, cssVar: cssVar, bars: bars
  };
})(window);
