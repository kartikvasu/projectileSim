var w = window.innerWidth;
var h = window.innerHeight;
var updateInterval = 50;
var verticalVelocity = -20;

$(document).ready(function(){
  var canvas = $('#canvas');

  //Creation of the ball element
  canvas.append("<div id = 'ball'></div>");

  var ball = $('#ball');
  ball.css({"background-color":"red",
    "border-radius":"50%",
    "width":"50px",
    "height":"50px",
    "margin-top": 0.90 * h + "px"});

  setInterval(animateBall, updateInterval);
  setInterval(accelerateBall, updateInterval);
});

var accelerateBall = function(){
  verticalVelocity = verticalVelocity + 0.5;
}

//function that changes the css position of the ball every "updateInterval" milliseconds
var animateBall = function(){

  //bounce the ball if it reaches the bottom of the screen
  if(h - findCurHeight() <= 0.1 * h){
    verticalVelocity = -20;
  }

  $('#ball').css({
    //number of pixels the ball moves horizontally every 50 miliseconds
    "margin-left": '+=10px',
    //number of pixels the ball moves vertically every 50 miliseconds
    "margin-top": '+=' + verticalVelocity + 'px'
  });
}

var findCurHeight = function(){
  var height = $('#ball').css("margin-top");
  length = height.length;
  height = height.slice(0, length - 2);
  return height;
}
