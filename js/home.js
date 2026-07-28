// Home page: the "CLASSIFIED" catmint-reserves reveal toggle.
(function () {
  var btn = document.getElementById("reveal-btn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    var cell = document.getElementById("catmint-cell");
    cell.innerHTML = "<strong>DANGEROUSLY LOW</strong>";
  });
})();
