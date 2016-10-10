
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("mainNav");
    if (x.className === "mainNav") {
        x.className += " responsive";
    } else {
        x.className = "mainNav";
    }
}



/* Start Auto Focus fallback for all browsers */
$(document).trigger('autofocus_ready');

/* 
Note: The starting script is in my header scripts:
    $(document).bind('autofocus_ready', function() {
      if (!("autofocus" in document.createElement("input"))) {
        $("#firstname").focus();
      }
    });
*/
/* End Auto Focus fallback for all browsers */


/* Javascript getElementById() Examples */
/*
var d = new Date();
document.getElementById("datedemo").value = d;
document.getElementById("formdate").value = Date().format('mm/dd/yy');
*/

/* Javascript toLocalDateString() Method */
/*var d = new Date();
var n = d.toLocaleDateString();
document.getElementById("localedate").value = n;*/

/* Javascript getTimezoneOffset() Method */
/*var g = new Date();
var q = g.getTime();
document.getElementById("localetime").value = g.getTime();*/

/* Javascript getTimezoneOffset() Method */
/*var f = new Date();
var p = f.getTimezoneOffset();
document.getElementById("localetimeoffset").value = p;*/

/*var loctim = new Date();
var newloctim = loctim.getTime();
document.getElementById("thetime").value = newloctim.getTime();*/

