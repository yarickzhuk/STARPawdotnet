// Single roast detail page — reads ?slug= and renders from the shared roast data.
(function () {
  var roasts = window.STARPAW_ROASTS_DATA;
  var slug = new URLSearchParams(window.location.search).get("slug");
  var roast = roasts.filter(function (r) {
    return r.slug === slug;
  })[0];

  var mount = document.getElementById("roast-detail");

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (!roast) {
    mount.innerHTML =
      '<div class="eyebrow">ROAST NOT FOUND</div>' +
      '<h1 class="hero-title">THIS FILE DOESN’T EXIST</h1>' +
      '<p class="lead">Starpaw probably moved it. <a href="/roasts.html">Back to the Roast Archive.</a></p>';
    document.title = "Roast not found — STARPaw.net";
    return;
  }

  document.title = roast.title + " — STARPaw.net";

  function renderPanels(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var note = section.note ? '<p class="lead">' + escapeHtml(section.note) + "</p>" : "";
    var panels = section.panels
      .map(function (p, i) {
        var lines = p.lines
          .map(function (l) {
            return "<p>" + escapeHtml(l) + "</p>";
          })
          .join("");
        return (
          '<div class="card" style="background:var(--bg);">' +
          '<div class="stat-line" style="opacity:0.6;">PANEL ' + (i + 1) + "</div>" +
          "<p>" + escapeHtml(p.visual) + "</p>" +
          lines +
          "</div>"
        );
      })
      .join("");
    return heading + note + '<div class="card-grid cols-sm">' + panels + "</div>";
  }

  function renderComposition(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var note = section.note ? '<p class="lead">' + escapeHtml(section.note) + "</p>" : "";
    var blocks = section.blocks
      .map(function (b) {
        var lines = b.lines
          .map(function (l) {
            return "<p>" + escapeHtml(l) + "</p>";
          })
          .join("");
        return '<div class="card"><h3>' + escapeHtml(b.heading) + "</h3>" + lines + "</div>";
      })
      .join("");
    return heading + note + '<div class="card-grid cols-sm">' + blocks + "</div>";
  }

  function renderCaptions(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var lines = section.lines
      .map(function (l) {
        return '<div class="stat-line">' + escapeHtml(l) + "</div>";
      })
      .join("");
    return heading + '<div class="stat-box">' + lines + "</div>";
  }

  function renderText(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var paras = section.paragraphs
      .map(function (p) {
        return '<p class="lead">' + escapeHtml(p) + "</p>";
      })
      .join("");
    return heading + paras;
  }

  function renderList(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var items = section.items
      .map(function (i) {
        return "<li>" + escapeHtml(i) + "</li>";
      })
      .join("");
    return heading + "<ul>" + items + "</ul>";
  }

  function renderDialogue(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var lines = section.lines
      .map(function (l) {
        return '<p class="lead">' + escapeHtml(l) + "</p>";
      })
      .join("");
    return heading + lines;
  }

  function renderRating(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var rows = section.stats
      .map(function (pair) {
        return (
          '<div class="row"><span>' + escapeHtml(pair[0]) + ":</span><strong>" + escapeHtml(pair[1]) + "</strong></div>"
        );
      })
      .join("");
    return heading + '<div class="stat-box"><dl>' + rows + "</dl></div>";
  }

  function renderRelated(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var items = section.items
      .map(function (i) {
        return '<a class="btn btn-white" href="' + i.href + '">' + escapeHtml(i.label) + "</a>";
      })
      .join("");
    return heading + '<div style="display:flex; gap:12px; flex-wrap:wrap;">' + items + "</div>";
  }

  var RENDERERS = {
    panels: renderPanels,
    composition: renderComposition,
    captions: renderCaptions,
    text: renderText,
    list: renderList,
    dialogue: renderDialogue,
    rating: renderRating,
    related: renderRelated
  };

  var labels = (roast.labels || [])
    .map(function (l) {
      return '<span class="tag-pill">' + escapeHtml(l) + "</span>";
    })
    .join("\n");

  var sections = (roast.sections || [])
    .map(function (section) {
      var renderer = RENDERERS[section.type];
      if (!renderer) return "";
      return '<section style="margin-top:36px;">' + renderer(section) + "</section>";
    })
    .join("\n");

  mount.innerHTML =
    '<a class="btn btn-white" href="/roasts.html">← BACK TO ROAST ARCHIVE</a>' +
    '<div class="tag-row" style="margin-top:28px;">' + labels + "</div>" +
    "<h1 class=\"hero-title\" style=\"margin-top:14px;\">" + escapeHtml(roast.title) + "</h1>" +
    (roast.subheading ? '<p class="lead">' + escapeHtml(roast.subheading) + "</p>" : "") +
    sections;
})();
