// Redirect to https
var host = "csclub.org.au";
if ((host == window.location.host) && (window.location.protocol != "https:")) {
  window.location.protocol = "https:";
}
$( document ).ready(function() {
  // Initiate mobile nav
  $(".button-collapse").sideNav();
});


/*
 * Determines if the element is within the viewport or not
 * @return {boolean} True if the element is within the viewport.
 */
function isElementInViewport(el) {
  // Special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}

/*
 * Converts form data to JSON object
 * @return {Object} An object containing data from form inputs.
 */
function formToJson(form) {
  var array = $(form).serializeArray();
  var json = {};

  $.each(array, function () {
    if (this.value !== 'other') {
      if (json[this.name] !== undefined) {
        if (!json[this.name].push) {
          json[this.name] = [json[this.name]];
        }
        json[this.name].push(this.value || '');
      } else {
        json[this.name] = this.value || '';
      }
    }
  });

  $.each(json, function (index, value) {
    if (value.constructor === Array) {
      json[index] = value.join();
    }
  });

  return json;
}