$(document).ready(function() {
  makeNavbarActive();
});

function makeNavbarActive() {
  // If the title is resume, about, or projects
  // make that part of the navbar "active"
  $("#navigation-bar").children("li").each(function (idx, elem) {
    if ($(".title").first().text().toUpperCase() === $(elem).text().toUpperCase()) {
      elem.className = "active";
    }
  });
}