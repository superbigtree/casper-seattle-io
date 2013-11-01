/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $('#about-seattle-io.index').on('click', 'h1 a', function(e){
          $('.about-description').toggle(0);
          e.preventDefault();
        });

    });

}(jQuery));