// Site-wide random-page navigation — spans roasts, characters, incidents, atlas, and herbs.
// Fixed route list from firstversioncontent.md section 17.
window.STARPAW_RANDOM = (function () {
  var ROUTES = [
    "/roast.html?slug=please-stop-drawing-me-dating-my-stick",
    "/roast.html?slug=berrynose-and-the-100000-page-shipping-chart",
    "/roast.html?slug=oakheart-is-definitely-winning",
    "/roast.html?slug=group-project",
    "/roast.html?slug=legendary-lost-media",
    "/roast.html?slug=the-dark-forest-vs-freight-train",
    "/character.html?slug=starpaw",
    "/character.html?slug=jayfeather",
    "/incident.html?slug=controlled-demonstration",
    "/incident.html?slug=dovewing-software-update",
    "/incident.html?slug=gathering-chaos-edition",
    "/medvednica.html",
    "/atlas.html#candidate-queue",
    "/herb.html?slug=catmint",
    "/herb.html?slug=marigold",
    "/herb.html?slug=juniper-berries",
    "/herb.html?slug=cobwebs",
    "/herb.html?slug=icelandic-moss"
  ];

  function goToRandom() {
    var route = ROUTES[Math.floor(Math.random() * ROUTES.length)];
    window.location.href = route;
  }

  return { ROUTES: ROUTES, goToRandom: goToRandom };
})();
