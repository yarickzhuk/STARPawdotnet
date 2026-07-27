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

  var tags = roast.cats
    .map(function (c) {
      return '<span class="tag-pill">' + escapeHtml(c.toUpperCase()) + "</span>";
    })
    .join("\n");

  mount.innerHTML =
    '<a class="btn btn-white" href="/roasts.html">← BACK TO ROAST ARCHIVE</a>' +
    '<div class="tag-row" style="margin-top:28px;">' + tags + "</div>" +
    "<h1 class=\"hero-title\" style=\"margin-top:14px;\">" + escapeHtml(roast.title) + "</h1>" +
    '<p class="lead">' + escapeHtml(roast.blurb) + "</p>" +
    '<div class="stat-box"><div class="stat-line">ABSURDITY: ' + roast.absurdity + "</div></div>";
})();
