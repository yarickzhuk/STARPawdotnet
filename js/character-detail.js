// Single character detail page — reads ?slug= and renders from the shared character data.
(function () {
  var characters = window.STARPAW_CHARACTERS_DATA;
  var slug = new URLSearchParams(window.location.search).get("slug");
  var character = characters.filter(function (c) {
    return c.slug === slug;
  })[0];

  var mount = document.getElementById("character-detail");

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (!character) {
    mount.innerHTML =
      '<div class="eyebrow">FILE NOT FOUND</div>' +
      '<h1 class="hero-title">THIS DOSSIER DOESN’T EXIST</h1>' +
      '<p class="lead">Starpaw probably moved it. <a href="/files.html">Back to the Starpaw Files.</a></p>';
    document.title = "Character not found — STARPaw.net";
    return;
  }

  document.title = character.name + " — STARPaw.net";

  function renderStats(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var rows = section.stats
      .map(function (pair) {
        return '<div class="row"><span>' + escapeHtml(pair[0]) + ":</span><strong>" + escapeHtml(pair[1]) + "</strong></div>";
      })
      .join("");
    return heading + '<div class="stat-box"><dl>' + rows + "</dl></div>";
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
    var tag = section.ordered ? "ol" : "ul";
    return heading + "<" + tag + ">" + items + "</" + tag + ">";
  }

  function renderQuote(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var lines = section.lines
      .map(function (l) {
        return '<p class="lead">' + escapeHtml(l) + "</p>";
      })
      .join("");
    return heading + lines;
  }

  var RENDERERS = { stats: renderStats, text: renderText, list: renderList, quote: renderQuote };

  var labels = (character.labels || [])
    .map(function (l) {
      return '<span class="tag-pill">' + escapeHtml(l) + "</span>";
    })
    .join("\n");

  var sections = (character.sections || [])
    .map(function (section) {
      var renderer = RENDERERS[section.type];
      if (!renderer) return "";
      return '<section style="margin-top:36px;">' + renderer(section) + "</section>";
    })
    .join("\n");

  mount.innerHTML =
    '<a class="btn btn-white" href="/files.html">← BACK TO THE STARPAW FILES</a>' +
    '<div class="tag-row" style="margin-top:28px;">' + labels + "</div>" +
    "<h1 class=\"hero-title\" style=\"margin-top:14px;\">" + escapeHtml(character.name) + "</h1>" +
    '<p class="lead" style="font-style:italic;">' + escapeHtml(character.quote) + "</p>" +
    sections;
})();
