//all physical quantities are in terms of 'per milisecond'
//all global variable initializations and function calls
//the below variables can be taken as input
var h = window.innerHeight;
var w = window.innerWidth;
var constXVelocity = 1.5;
var constYVelocity = 2;
var yAccelerate = -0.009;
var groundRestit = 0.9;

//everything below here is abstracted from the viewer
var bounces = 0;
var xVelocity = constXVelocity;
var yVelocity = constYVelocity;
initCanvas();
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var radius = canvas.height/20;
var xPos = radius;
var yPos = canvas.height - canvas.height/20;
setInterval(moveBall, 1);

//function to draw a ball on the canvas at the position x, y, and radius 'rad'
function drawBall(x, y, rad){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSun();
  drawGround();
  ctx.translate(0, 0);
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, 2*Math.PI);
  ctx.fillStyle = '#FF0000';
  ctx.fill();
  ctx.closePath();
}

//function to draw the sun in the corner
function drawSun(){
  ctx.translate(0, 0);
  ctx.beginPath();
  ctx.arc(0, 0, canvas.height/9, 0, -Math.PI/2);
  ctx.fillStyle = '#ffff00';
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(0, 0, canvas.height/15, 0, -Math.PI/2);
  ctx.fillStyle = '#ff6600';
  ctx.fill();
  ctx.closePath();
}

//function to draw the ground in green color at the bottom of the canvas
function drawGround(){
  ctx.fillStyle = "#33cc33";
  ctx.fillRect(0,canvas.height - 20, canvas.width, 20);
}

//function to increase (or decrease) the velocity of the ball
function AccelerateBall(){
  yVelocity += yAccelerate;
}

//function to initialize the canvas with width and height
function initCanvas() {
    $('#myCanvas').attr("width", 0.98 * w);
    $('#myCanvas').attr("height", 0.70 * h);
}

//used to update the data of the ball
function changeDisplayData(){
  var ballData = $('#ball-data');
  ballData.empty();
  ballData.append("<div id = 'container'>BALL DATA<br>Vertical Velocity: " + yVelocity
                  + "<br>Horizontal velocity: " + xVelocity + "<br>Height (of the ball's center): "
                  + (canvas.height - yPos) + "<br>Distance: " + xPos + "</div>");
}

//function to move the ball (contains code for bouncing also)
function moveBall(){
  if(xPos <= radius){
    xVelocity = constXVelocity;
  }

  if(xPos >= canvas.width - radius){
    xVelocity = -xVelocity;
  }

  if(yPos <= radius){
    yVelocity = -yVelocity;
  }

  if(yPos - canvas.height + radius >= yVelocity){

    yVelocity = groundRestit * (-yVelocity);
    bounces++;

  }

  drawBall(xPos, yPos, radius);
  xPos += xVelocity;
  yPos -= yVelocity;
  changeDisplayData();
  AccelerateBall();
}
