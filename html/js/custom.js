'use strict';

$(function() {
    function SetResizeContent() {
        var minheight = $(window).height();
             $(".page-header.bg .row").css('height', minheight-'153');
         }
         
         SetResizeContent();
         $(window).resize(function () {
             SetResizeContent();
         });
 
       
    
});

	

