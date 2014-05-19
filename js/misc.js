/*jshint browser:true, jquery:true */

/* Fixes the category bar in Longdan tab */

$(document).on('scroll', function() {
    var headerHeight = $('#header').height();
    var bodyTop = $('body').scrollTop();
    if (headerHeight < bodyTop) {
        $('#ld-header').addClass("fixed");
    } else {
        $('#ld-header').removeClass("fixed");
    }
});

/* Workaround for LESS local storage cache problem */
function destroyLessCache(pathToCss) { // e.g. '/css/' or '/stylesheets/'
  if (!window.localStorage || !less || less.env !== 'development') {
    return;
  }
  var host = window.location.host;
  var protocol = window.location.protocol;
  var keyPrefix = protocol + '//' + host + pathToCss;

  for (var key in window.localStorage) {
    if (key.indexOf(keyPrefix) === 0) {
      delete window.localStorage[key];
    }
  }
}

$(document).ready(function() {
    destroyLessCache("/styles/");
});