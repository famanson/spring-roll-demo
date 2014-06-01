/*jshint browser:true, devel:true, jquery:true */

// angular is defined in angular.js
/*global angular */

// these are in global.js
/*global app */

app.animation('.overlay', function() {
    return {
        enter: function(el, done) {
            $(el)
                .css('opacity', 0)
                .animate({'opacity': 1}, 200)
            ;
            $(el).find('.overlay_content_full_bleed')
                .css('top', '-=12px')
                .animate({'top': '+=12px'}, 200, done)
            ;
        },
        leave: function(el, done) {
            $(el).css('opacity', 1).animate({'opacity': 0}, 200, done);
        }
    };
});
