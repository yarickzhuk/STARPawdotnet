// Single incident report detail page — reads ?slug= and renders from the shared incident data.
(function () {
  var incidents = window.STARPAW_INCIDENTS_DATA;
  var slug = new URLSearchParams(window.location.search).get("slug");
  var incident = incidents.filter(function (i) {
    return i.slug === slug;
  })[0];

  var mount = document.getElementById("incident-detail");

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (!incident) {
    mount.innerHTML =
      '<div class="eyebrow">FILE NOT FOUND</div>' +
      '<h1 class="hero-title">THIS REPORT DOESN’T EXIST</h1>' +
      '<p class="lead">Starpaw probably moved it. <a href="/files.html">Back to the Starpaw Files.</a></p>';
    document.title = "Incident not found — STARPaw.net";
    return;
  }

  document.title = incident.header.join(" — ") + " — STARPaw.net";

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

  function renderQuote(section) {
    return renderDialogue(section);
  }

  function renderStats(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var rows = section.stats
      .map(function (pair) {
        return '<div class="row"><span>' + escapeHtml(pair[0]) + ":</span><strong>" + escapeHtml(pair[1]) + "</strong></div>";
      })
      .join("");
    return heading + '<div class="stat-box"><dl>' + rows + "</dl></div>";
  }

  var RENDERERS = { text: renderText, list: renderList, dialogue: renderDialogue, quote: renderQuote, stats: renderStats };

  var labels = (incident.labels || [])
    .map(function (l) {
      return '<span class="tag-pill">' + escapeHtml(l) + "</span>";
    })
    .join("\n");

  var sections = (incident.sections || [])
    .map(function (section) {
      var renderer = RENDERERS[section.type];
      if (!renderer) return "";
      return '<section style="margin-top:36px;">' + renderer(section) + "</section>";
    })
    .join("\n");

  mount.innerHTML =
    '<a class="btn btn-white" href="/files.html">← BACK TO THE STARPAW FILES</a>' +
    '<div class="tag-row" style="margin-top:28px;">' + labels + "</div>" +
    '<div class="eyebrow" style="margin-top:14px;">' + escapeHtml(incident.header[0]) + "</div>" +
    "<h1 class=\"hero-title\" style=\"margin-top:14px;\">" + escapeHtml(incident.header[1]) + "</h1>" +
    sections;
})();
