// Shared header/footer shell used by every page except 404.html.
(function () {
  var NAV_ITEMS = [
    { key: "roasts", label: "ROASTS", href: "/roasts.html", color: "var(--ember)" },
    { key: "files", label: "FILES", href: "/files.html", color: "var(--mint)" },
    { key: "atlas", label: "ATLAS", href: "/atlas.html", color: "var(--sun)" },
    { key: "herbs", label: "HERBS", href: "/herbs.html", color: "var(--lilac)" },
    { key: "about", label: "ABOUT", href: "/about.html", color: "var(--sky)" }
  ];

  // Distinct labels for the mobile menu, per firstversioncontent.md section 2.
  var MOBILE_ITEMS = [
    { label: "Home", href: "/index.html" },
    { label: "Roasts", href: "/roasts.html" },
    { label: "The Starpaw Files", href: "/files.html" },
    { label: "Expedition Atlas", href: "/atlas.html" },
    { label: "Herb Guide", href: "/herbs.html" },
    { label: "About This Disaster", href: "/about.html" }
  ];

  function renderHeader(activePage) {
    var navHtml = NAV_ITEMS.map(function (item) {
      var isActive = item.key === activePage;
      var style = isActive ? ' style="background:' + item.color + ';"' : "";
      var cls = "pill" + (isActive ? " active" : "");
      return '<a class="' + cls + '" href="' + item.href + '"' + style + ">" + item.label + "</a>";
    }).join("\n");

    var mobileLinksHtml = MOBILE_ITEMS.map(function (item) {
      return '<a href="' + item.href + '">' + item.label + "</a>";
    }).join("\n");

    return (
      '<header class="site-header">' +
      '<a class="brand" href="/index.html">STARPaw<span class="accent">.net</span></a>' +
      '<nav class="site-nav">' +
      navHtml +
      '<button type="button" id="random-btn" class="pill random">RANDOM</button>' +
      "</nav>" +
      '<button type="button" id="mobile-menu-btn" class="pill mobile-menu-toggle" aria-expanded="false" aria-controls="mobile-menu">MENU</button>' +
      '<nav id="mobile-menu" class="mobile-menu" hidden>' +
      mobileLinksHtml +
      '<button type="button" id="mobile-random-btn">Random File</button>' +
      "</nav>" +
      "</header>"
    );
  }

  var FULL_FOOTER =
    '<footer class="site-footer wide"><div class="footer-inner">' +
    '<p class="footer-legal"><strong>STARPaw.net</strong> is a non-commercial fan project inspired by <em>Warriors</em>. It is not affiliated with Working Partners, HarperCollins, or the official creators and publishers of the series.<br><br>' +
    "Original characters, roleplay continuity, jokes, edits, writing, and site design belong to their respective creators. Canon characters and settings belong to their respective rights holders.<br><br>" +
    "<strong>Jayfeather reviewed this footer and found it legally exhausting.</strong></p>" +
    '<div class="footer-links">' +
    '<a href="/about.html">About</a>' +
    '<a href="#">Content Labels</a>' +
    '<a href="/accessibility.html">Accessibility</a>' +
    '<a href="/credits.html">Credits</a>' +
    '<a href="#top">Back to Top</a>' +
    "</div></div></footer>";

  function wireRandomButton() {
    var btn = document.getElementById("random-btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      window.STARPAW_RANDOM.goToRandom();
    });
  }

  function wireMobileMenu() {
    var toggle = document.getElementById("mobile-menu-btn");
    var menu = document.getElementById("mobile-menu");
    var randomBtn = document.getElementById("mobile-random-btn");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      var isOpen = !menu.hidden;
      menu.hidden = isOpen;
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
    if (randomBtn) {
      randomBtn.addEventListener("click", function () {
        window.STARPAW_RANDOM.goToRandom();
      });
    }
  }

  // ---- Vitrage v2: ambient per-section accent (body[data-accent]), read by css/style.css ----
  function wireAccent(sectionKey) {
    if (!sectionKey) return;
    document.body.setAttribute("data-accent", sectionKey);
  }

  // ---- Vitrage v2: illuminated drop-cap on hero headlines (progressive enhancement) ----
  function initIlluminatedCaps() {
    var headings = document.querySelectorAll(".hero-title, .hero-title-lg");
    Array.prototype.forEach.call(headings, function (h) {
      if (h.dataset.illuminated) return;
      var walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT, null);
      var node = walker.nextNode();
      while (node && !/\S/.test(node.nodeValue)) node = walker.nextNode();
      if (!node) return;
      var text = node.nodeValue;
      var trimStart = text.length - text.replace(/^\s+/, "").length;
      var letter = text.charAt(trimStart);
      if (!letter) return;
      var span = document.createElement("span");
      span.className = "illuminated-cap";
      span.textContent = letter;
      var before = document.createTextNode(text.slice(0, trimStart));
      var after = document.createTextNode(text.slice(trimStart + 1));
      var frag = document.createDocumentFragment();
      frag.appendChild(before);
      frag.appendChild(span);
      frag.appendChild(after);
      node.parentNode.replaceChild(frag, node);
      h.dataset.illuminated = "true";
    });
  }

  // ---- Vitrage v2: shard-assembly entrance for cards/pills scrolling into view ----
  function initShardAssembly() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var targets = document.querySelectorAll(".card, .card-lg, .card-sm, .stat-box");
    var i = 0;
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.style.setProperty("--shard-i", i % 8);
          i++;
          el.classList.add("shard-enter");
          io.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );
    Array.prototype.forEach.call(targets, function (el) {
      io.observe(el);
    });
  }

  window.STARPAW_LAYOUT = {
    mount: function (activePage, sectionKey) {
      var headerMount = document.getElementById("site-header-mount");
      if (headerMount) headerMount.outerHTML = renderHeader(activePage);
      var footerMount = document.getElementById("site-footer-mount");
      if (footerMount) footerMount.outerHTML = FULL_FOOTER;
      wireRandomButton();
      wireMobileMenu();
      wireAccent(activePage || sectionKey);
      initIlluminatedCaps();
      initShardAssembly();
    },
    // Re-run the visual-layer progressive enhancements. Pages that inject
    // their main content after mount() (character.html, roast.html,
    // herb.html, incident.html — all driven by a *-detail.js that fills a
    // mount point once its data script has loaded) call this once they've
    // written their HTML, so the illuminated cap and shard-entrance still
    // apply to content that didn't exist yet at mount() time.
    refresh: function () {
      initIlluminatedCaps();
      initShardAssembly();
    }
  };
})();
