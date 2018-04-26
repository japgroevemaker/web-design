
var peace = document.getElementById('peace');


function addMargin() {
  var three = document.getElementById('three');
  three.classList.toggle('marginToggle');
}

peace.addEventListener('click', addMargin);

var slider = document.getElementById('slider');
var output = document.getElementById('demo');


output.innerHTML = "Normal"

slider.oninput = function() {
  var myP = document.getElementById('enlarge');
  // var value = myP.getPropertyValue('font-size');
  if (slider.value < 2) {
    myP.style.fontSize = '1.2em'
    output.innerHTML = 'Normal'
  } else if (slider.value > 1 && slider.value < 3) {
  myP.style.fontSize = '2em'
  output.innerHTML = 'Large'
} else if (slider.value > 2){
  myP.style.fontSize = '3em';
  output.innerHTML = 'Very large'
}
}

var y = document.getElementById("myInput");
y.oninput = function() {
    var x = document.getElementById("myInput").value;
    document.getElementById("text").innerHTML = "You wrote: " + x;
}

// create canvas element and append it to document body
var container = document.getElementById('canvas');
var canvas = document.createElement('canvas');
container.appendChild(canvas);

// some hotfixes... ( ≖_≖)
// document.body.style.margin = 0;
// canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
}

// resize canvas
function resize() {
  ctx.canvas.width = window.outerWidth
  ctx.canvas.height = window.outerHeight
}

function draw(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}
