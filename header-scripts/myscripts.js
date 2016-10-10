// JavaScript Document

/* Start Auto Focus fallback for all browsers */

    $(document).bind('autofocus_ready', function() {
      if (!("autofocus" in document.createElement("input"))) {
        $("#firstname").focus();
      }
    });
/* 
Note: The rest of the script to trigger it if needed is in my footer scripts
($(document).trigger('autofocus_ready');)  
*/

/* End Auto Focus fallback for all browsers */

/* Star add animation to logo */

    $(document).ready(function() {
	    $("#logo").addClass("logoAnimated");
    });

/* End add animation to logo */
	

/*
if (Modernizr.boxshadow) {
  // supported
} else {
  // not-supported
}	
*/
  if (Modernizr.inputtypes.date) {
    alert("This browser supports HTML5 date!");
  } else {
    alert("no date :(");
  }

/*
Modernizr.load({
  test: Modernizr.inputtypes.date,
  nope: ['http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.7/jquery-ui.min.js', 'jquery-ui.css'],
  complete: function () {
    $('input[type=date]').datepicker({
      dateFormat: 'yy-mm-dd'
    }); 
  }
});
*/

