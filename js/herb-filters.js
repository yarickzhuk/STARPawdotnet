// Herb inventory filters — sets `hidden` on cards that don't match the selected category.
(function () {
  var pillsMount = document.getElementById("herb-filter-pills");
  var grid = document.getElementById("herb-grid");
  if (!pillsMount || !grid) return;

  var pills = pillsMount.querySelectorAll("[data-filter]");
  var cards = grid.querySelectorAll("[data-category]");

  function applyFilter(filter) {
    Array.prototype.forEach.call(cards, function (card) {
      if (filter === "all items") {
        card.hidden = false;
        return;
      }
      var categories = card.getAttribute("data-category").split(" ");
      card.hidden = categories.indexOf(filter) === -1;
    });
  }

  Array.prototype.forEach.call(pills, function (pill) {
    pill.addEventListener("click", function () {
      Array.prototype.forEach.call(pills, function (p) {
        p.classList.remove("active");
      });
      pill.classList.add("active");
      applyFilter(pill.getAttribute("data-filter"));
    });
  });
})();
