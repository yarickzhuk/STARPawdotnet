// Shared spoiler reveal control for CLASSIFIED/SPOILERS content.
// Preference persists in localStorage under "starpaw-spoilers" (firstversioncontent.md section 17).
//
// Vitrage v2: the block no longer expands/collapses — it reads as a lead
// frame closing over glass (sealed) and glazing open (revealed), via the
// .sealing/.opening classes + glaze-shut/glaze-open keyframes in
// css/style.css. Both animations are ~420ms and disabled entirely under
// prefers-reduced-motion (handled by the site-wide `* { animation: none }`
// rule), at which point the state just changes instantly.
window.STARPAW_SPOILERS = (function () {
  var KEY = "starpaw-spoilers";

  var LOCK_GLYPH =
    '<svg width="40" height="40" viewBox="0 0 40 40" class="lock-glyph" aria-hidden="true">' +
    '<rect x="9" y="18" width="22" height="17" rx="3" fill="none" stroke="currentColor" stroke-width="2.5"/>' +
    '<path d="M14 18 v-5 a6 6 0 0 1 12 0 v5" fill="none" stroke="currentColor" stroke-width="2.5"/>' +
    '<circle cx="20" cy="26" r="2.2" fill="currentColor"/>' +
    "</svg>";

  function isRevealed() {
    try {
      return window.localStorage.getItem(KEY) === "revealed";
    } catch (e) {
      return false;
    }
  }

  function reveal() {
    try {
      window.localStorage.setItem(KEY, "revealed");
    } catch (e) {
      // localStorage unavailable — reveal still works for this page view.
    }
  }

  function sealedHtml() {
    return (
      '<div class="spoiler-card sealing">' +
      LOCK_GLYPH +
      '<p>This file contains Warrior Cats spoilers.</p>' +
      '<button type="button" id="reveal-file-btn" class="btn btn-lilac" aria-label="Reveal classified text">[REVEAL FILE]</button>' +
      '<div class="spoiler-note">SEALED — click to unglaze</div>' +
      "</div>"
    );
  }

  function guard(mount, buildContentHtml) {
    if (isRevealed()) {
      mount.innerHTML = buildContentHtml();
      return;
    }
    mount.innerHTML = sealedHtml();
    var card = mount.querySelector(".spoiler-card");
    var btn = mount.querySelector("#reveal-file-btn");
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    btn.addEventListener("click", function () {
      reveal();
      if (card && !reduceMotion) {
        card.classList.remove("sealing");
        card.classList.add("opening");
        window.setTimeout(function () {
          mount.innerHTML = buildContentHtml();
        }, 420);
      } else {
        mount.innerHTML = buildContentHtml();
      }
    });
  }

  return { isRevealed: isRevealed, reveal: reveal, guard: guard };
})();
