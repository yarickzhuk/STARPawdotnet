// Roasts archive page: category filters + working "Read Roast" links + Random pick.
(function () {
  var FILTER_DEFS = [
    "ALL",
    "FANDOM",
    "CANON LOGIC",
    "CURSED SHIPS",
    "OUT OF CONTEXT",
    "GAMING LOGIC",
    "PURE INTERRUPTION"
  ];

  var roasts = window.STARPAW_ROASTS_DATA;
  var active = "ALL";

  var filterMount = document.getElementById("filter-pills");
  var gridMount = document.getElementById("roast-grid");

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderFilters() {
    filterMount.innerHTML = FILTER_DEFS.map(function (label) {
      var cls = "filter-pill" + (active === label ? " active" : "");
      return '<button type="button" class="' + cls + '" data-filter="' + escapeHtml(label) + '">' + label + "</button>";
    }).join("\n");

    Array.prototype.forEach.call(filterMount.querySelectorAll("[data-filter]"), function (btn) {
      btn.addEventListener("click", function () {
        active = btn.getAttribute("data-filter");
        renderFilters();
        renderGrid();
      });
    });
  }

  function visibleRoasts() {
    if (active === "ALL") return roasts;
    var key = active.toLowerCase();
    return roasts.filter(function (r) {
      return r.cats.indexOf(key) !== -1;
    });
  }

  function renderGrid() {
    var visible = visibleRoasts();
    gridMount.innerHTML = visible
      .map(function (r) {
        var tags = r.cats
          .map(function (c) {
            return '<span class="tag-pill">' + escapeHtml(c.toUpperCase()) + "</span>";
          })
          .join("\n");
        return (
          '<article class="card" data-slug="' + r.slug + '">' +
          '<div class="tag-row">' + tags + "</div>" +
          "<h3>" + escapeHtml(r.title) + "</h3>" +
          "<p>" + escapeHtml(r.blurb) + "</p>" +
          '<div class="stat-line">ABSURDITY: ' + r.absurdity + "</div>" +
          '<a class="btn btn-ember" href="/roast.html?slug=' + encodeURIComponent(r.slug) + '">READ ROAST</a>' +
          "</article>"
        );
      })
      .join("\n");
  }

  function pickRandom() {
    var visible = visibleRoasts();
    if (!visible.length) return;
    var pick = visible[Math.floor(Math.random() * visible.length)];
    var card = gridMount.querySelector('[data-slug="' + pick.slug + '"]');
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    card.classList.remove("roast-highlight");
    // restart the animation even if the same card was just highlighted
    void card.offsetWidth;
    card.classList.add("roast-highlight");
    window.setTimeout(function () {
      card.classList.remove("roast-highlight");
    }, 1600);
  }

  renderFilters();
  renderGrid();

  window.STARPAW_ROASTS = { pickRandom: pickRandom };

  if (new URLSearchParams(window.location.search).get("random") === "1") {
    window.setTimeout(pickRandom, 50);
  }
})();
