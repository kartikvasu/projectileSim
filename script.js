var w = window.innerWidth;
var h = window.innerHeight;

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

  setInterval(animateBall, 50);
  setInterval(accelerateBall, 50);
});

var verticalVelocity = -20;

var accelerateBall = function(){
  verticalVelocity = verticalVelocity + 0.5;
}

var animateBall = function(){
  $('#ball').css({
    //number of pixels the ball moves horizontally every 50 miliseconds
    "margin-left": '+=10px',
    //number of pixels the ball moves vertically every 50 miliseconds
    "margin-top": '+=' + verticalVelocity + 'px'
  });
};
