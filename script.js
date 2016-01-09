var w = window.innerWidth;
var h = window.innerHeight;

var constHorizVelocity = 1.75;
var constVertVelocity = -1.75;
var updateInterval = 5;
var verticalAcceleration = 0.005;
var cRestitution = 1;
var bounces = 0;

var verticalVelocity = constVertVelocity;
var horizontalVelocity = constHorizVelocity;

$(document).ready(function(){

  var canvas = $('#canvas');
  var ballData = $('#ball-data');
  //Creation of the ball element
  canvas.append("<div id = 'ball'></div>");
  canvas.css({
    "height" : 0.75 * h + "px"
  });

  var ball = $('#ball');
  ball.css({"background-color":"red",
    "border-radius":"50%",
    "width":"50px",
    "height":"50px",
    "z-index": "5"});

    ball.offset(
      {top: 1.15 * $('#canvas').height(),
      left: 0});

  ball.click(function(){
    setInterval(animateBall, updateInterval);
    //setInterval(accelerateBall, updateInterval);
    setInterval(changeDisplayData, updateInterval);
  });
});

//used to update the data of the ball
var changeDisplayData = function(){
  var ballData = $('#ball-data');
  ballData.empty();
  ballData.append("<div id = 'container'>BALL DATA<br>Vertical Velocity: " + verticalVelocity
                  + "<br>Horizontal velocity: " + horizontalVelocity + "</div>");
}

//used to update the velocity of the ball
var accelerateBall = function(){
  verticalVelocity = verticalVelocity + verticalAcceleration;
}

//function that changes the css position of the ball every "updateInterval" milliseconds
var animateBall = function(){
  //bounce the ball if it reaches the bottom of the screen
  accelerateBall();
  var h = $('#canvas').height();

  if(findCurHeight() >= 1.15 * h){
    verticalVelocity = cRestitution * constVertVelocity;
  }

  var w = $('#canvas').width();
  //bouncing off the wall if it reaches the right end
  if(findCurDist() >= w){
    horizontalVelocity = 0 - constHorizVelocity;
  }

  if(findCurDist() < 0.0005 * w){
    horizontalVelocity = constHorizVelocity;
  }

  var x = $('#ball').offset();

  $('#ball').offset(
    {top: x.top + verticalVelocity,
    left: x.left + horizontalVelocity});

}

//function used to find the current height of the ball
var findCurHeight = function(){
  var x = $('#ball').offset();
  return x.top;
}

//function used to find the distance of the ball from the left wall
var findCurDist = function(){
  var x = $('#ball').offset();
  return x.left;
}
