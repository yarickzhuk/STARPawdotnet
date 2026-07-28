// Single herb detail page — reads ?slug= and renders from the shared herb data.
(function () {
  var herbs = window.STARPAW_HERBS_DATA;
  var slug = new URLSearchParams(window.location.search).get("slug");
  var herb = herbs.filter(function (h) {
    return h.slug === slug;
  })[0];

  var mount = document.getElementById("herb-detail");

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  if (!herb) {
    mount.innerHTML =
      '<div class="eyebrow">ITEM NOT FOUND</div>' +
      '<h1 class="hero-title">THIS HERB ISN’T STOCKED</h1>' +
      '<p class="lead">Jayfeather doesn’t know either. <a href="/herbs.html">Back to the Herb Guide.</a></p>';
    document.title = "Herb not found — STARPaw.net";
    return;
  }

  document.title = herb.name + " — STARPaw.net";

  function renderStats(section) {
    var heading = section.heading ? "<h2>" + escapeHtml(section.heading) + "</h2>" : "";
    var unlabeled = section.stats.length && !section.stats[0][0];
    if (unlabeled) {
      var lines = section.stats
        .map(function (pair) {
          return '<div class="stat-line">' + escapeHtml(pair[1]) + "</div>";
        })
        .join("");
      return heading + '<div class="stat-box">' + lines + "</div>";
    }
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
    return heading + "<ul>" + items + "</ul>";
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

  var labels = (herb.labels || [])
    .map(function (l) {
      return '<span class="tag-pill">' + escapeHtml(l) + "</span>";
    })
    .join("\n");

  var sections = (herb.sections || [])
    .map(function (section) {
      var renderer = RENDERERS[section.type];
      if (!renderer) return "";
      return '<section style="margin-top:36px;">' + renderer(section) + "</section>";
    })
    .join("\n");

  mount.innerHTML =
    '<a class="btn btn-white" href="/herbs.html">← BACK TO THE HERB GUIDE</a>' +
    '<div class="tag-row" style="margin-top:28px;">' + labels + "</div>" +
    "<h1 class=\"hero-title\" style=\"margin-top:14px;\">" + escapeHtml(herb.name) + "</h1>" +
    sections;
})();
