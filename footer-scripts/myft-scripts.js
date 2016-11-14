
/* Start Auto Focus fallback for all browsers */
$(document).trigger('autofocus_ready');
/* End Auto Focus fallback for all browsers */


/* Start Canvas Stripts */
// Start Rounded Corners
var c = document.getElementById("myCanvasRoundCorns");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,200,200,0);
grd.addColorStop(0, "#6a7563");
grd.addColorStop(0.7, "#a8aea1");
grd.addColorStop(1, "#ccd0c5");
ctx.beginPath();     
ctx.moveTo(60, 20);  // Create a starting point
ctx.lineTo(60, 20);              // Create a horizontal line
ctx.arcTo(350, 20, 350, 70, 50);  // Create an arc - rt top corner
ctx.lineTo(350, 200);             // Continue with vertical line - down 
ctx.arcTo(350, 250, 350, 300, 50);  // Create an arc
ctx.lineTo(60, 250);              // Create a horizontal line
ctx.arcTo(10, 250, 10, 70, 50);  // Create an arc
ctx.lineTo(10, 70);              // Create a with vertical line
ctx.arcTo(10, 20, 10, 20, 50);  // Create an arc
ctx.closePath();
ctx.stroke();                     // Draw it
ctx.fillStyle= grd;
ctx.fill();
// End Rounded Corners

// Start Image click
function myCanvasImg01() {
	var cimg = document.getElementById("myCanvasImg01");
	var ctx = cimg.getContext("2d");
	ctx.canvas.width = 450;
	ctx.canvas.height = 350;
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	var img = document.getElementById("apple");
	ctx.drawImage(img,10,10);	
}
// End  Image click

// Start Circle Translate
var ctrans = document.getElementById("myCanvasTrans01");
var ctx = ctrans.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.fillStyle = "#6a7563";
ctx.strokeStyle = "#000000";
ctx.lineWidth=1;
ctx.fill();
// move (translate) to where you want your circle’s center to be
ctx.scale(1.2,1.2);
ctx.translate(60,0);
ctx.arc(95,50,40,0,2*Math.PI);
ctx.strokeStyle = "#FF0000";
ctx.lineWidth=3;
ctx.fill();
// move (translate) to where you want your circle’s center to be
ctx.scale(1.3,1.3);
ctx.translate(50,0);
ctx.arc(95,50,40,0,2*Math.PI);
ctx.strokeStyle = "#000000";
ctx.lineWidth=5;
ctx.fill();

// End Circle Translate
	  
	  
/* End Canvas Stripts */



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*
function myFunction() {
    var x = document.getElementById("mainNav");
    if (x.className === "mainNav") {
        x.className += " responsive";
    } else {
        x.className = "mainNav";
    }
}
*/

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
