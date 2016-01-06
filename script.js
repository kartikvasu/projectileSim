var w = window.innerWidth;
var h = window.innerHeight;
var updateInterval = 50;
var verticalVelocity = -20;
var horizontalVelocity = 5;

$(document).ready(function(){
  var canvas = $('#canvas');
  var ballData = $('#ball-data');
  //Creation of the ball element
  canvas.append("<div id = 'ball'></div>");

  var ball = $('#ball');
  ball.css({"background-color":"red",
    "border-radius":"50%",
    "width":"50px",
    "height":"50px",
    "margin-top": 0.75 * h + "px",
    "z-index": "1"});

  setInterval(animateBall, updateInterval);
  setInterval(accelerateBall, updateInterval);
  setInterval(changeData, updateInterval);
});

//used to update the data of the ball
var changeData = function(){
  var ballData = $('#ball-data');
  ballData.empty();
  ballData.append("<div id = 'container'>BALL DATA<br>Vertical Velocity: " + verticalVelocity
                  + "<br>Horizontal velocity: " + horizontalVelocity + "</div>");
}

//used to update the velocity of the ball
var accelerateBall = function(){
  verticalVelocity = verticalVelocity + 0.5;
}

//function that changes the css position of the ball every "updateInterval" milliseconds
var animateBall = function(){

  //bounce the ball if it reaches the bottom of the screen
  if(h - findCurHeight() <= 0.25 * h){
    verticalVelocity = -20;
  }

  $('#ball').css({
    //number of pixels the ball moves horizontally every 50 miliseconds
    "margin-left": '+=' + horizontalVelocity + 'px',
    //number of pixels the ball moves vertically every 50 miliseconds
    "margin-top": '+=' + verticalVelocity + 'px'
  });
}

//function used to find the current height of the ball
var findCurHeight = function(){
  var height = $('#ball').css("margin-top");
  length = height.length;
  height = height.slice(0, length - 2);
  return height;
}
