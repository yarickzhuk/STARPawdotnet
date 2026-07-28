// Shared spoiler reveal control for CLASSIFIED/SPOILERS content.
// Preference persists in localStorage under "starpaw-spoilers" (firstversioncontent.md section 17).
window.STARPAW_SPOILERS = (function () {
  var KEY = "starpaw-spoilers";

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

  function guard(mount, buildContentHtml) {
    if (isRevealed()) {
      mount.innerHTML = buildContentHtml();
      return;
    }
    mount.innerHTML =
      '<div class="card card-lg" style="max-width:520px;">' +
      '<p class="lead" style="margin:0 0 16px;">This file contains Warrior Cats spoilers.</p>' +
      '<button type="button" id="reveal-file-btn" class="btn btn-ember" aria-label="Reveal classified text">[REVEAL FILE]</button>' +
      "</div>";
    var btn = mount.querySelector("#reveal-file-btn");
    btn.addEventListener("click", function () {
      reveal();
      mount.innerHTML = buildContentHtml();
    });
  }

  return { isRevealed: isRevealed, reveal: reveal, guard: guard };
})();
