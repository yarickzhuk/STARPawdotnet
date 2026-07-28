// Shared header/footer shell used by every page except 404.html.
(function () {
  var NAV_ITEMS = [
    { key: "roasts", label: "ROASTS", href: "/roasts.html", color: "var(--ember)" },
    { key: "files", label: "FILES", href: "/files.html", color: "var(--mint)" },
    { key: "atlas", label: "ATLAS", href: "/atlas.html", color: "var(--sun)" },
    { key: "herbs", label: "HERBS", href: "/herbs.html", color: "var(--lilac)" },
    { key: "about", label: "ABOUT", href: "/about.html", color: "var(--sky)" }
  ];

  function renderHeader(activePage) {
    var navHtml = NAV_ITEMS.map(function (item) {
      var isActive = item.key === activePage;
      var style = isActive ? ' style="background:' + item.color + ';"' : "";
      var cls = "pill" + (isActive ? " active" : "");
      return '<a class="' + cls + '" href="' + item.href + '"' + style + ">" + item.label + "</a>";
    }).join("\n");

    return (
      '<header class="site-header">' +
      '<a class="brand" href="/index.html">STARPaw<span class="accent">.net</span></a>' +
      '<nav class="site-nav">' +
      navHtml +
      '<button type="button" id="random-btn" class="pill random">RANDOM</button>' +
      "</nav>" +
      "</header>"
    );
  }

  var FOOTERS = {
    home:
      '<footer class="site-footer wide"><div class="footer-inner">' +
      '<p class="footer-legal"><strong>STARPaw.net</strong> is a non-commercial fan project inspired by <em>Warriors</em>. It is not affiliated with Working Partners, HarperCollins, or the official creators and publishers of the series.<br><br>' +
      "Original characters, roleplay continuity, jokes, edits, writing, and site design belong to their respective creators. Canon characters and settings belong to their respective rights holders.<br><br>" +
      "<strong>Jayfeather reviewed this footer and found it legally exhausting.</strong></p>" +
      '<div class="footer-links">' +
      '<a href="/about.html">About</a>' +
      '<a href="#">Content Labels</a>' +
      '<a href="#">Accessibility</a>' +
      '<a href="#">Credits</a>' +
      '<a href="#top">Back to Top</a>' +
      "</div></div></footer>",
    section:
      '<footer class="site-footer"><div class="footer-inner">' +
      '<a href="/about.html">About</a>' +
      '<a href="/index.html">Home</a>' +
      "</div></footer>",
    about:
      '<footer class="site-footer"><div class="footer-inner">' +
      '<a href="/index.html">Home</a>' +
      "</div></footer>"
  };

  function wireRandomButton() {
    var btn = document.getElementById("random-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      if (window.STARPAW_ROASTS && typeof window.STARPAW_ROASTS.pickRandom === "function") {
        window.STARPAW_ROASTS.pickRandom();
      } else {
        window.location.href = "/roasts.html?random=1";
      }
    });
  }

  window.STARPAW_LAYOUT = {
    mount: function (activePage, footerKind) {
      var headerMount = document.getElementById("site-header-mount");
      if (headerMount) headerMount.outerHTML = renderHeader(activePage);
      var footerMount = document.getElementById("site-footer-mount");
      if (footerMount && footerKind) footerMount.outerHTML = FOOTERS[footerKind] || "";
      wireRandomButton();
    }
  };
})();
