window.onload = function() {

//References canvas element & creates ctx variable to store rendering context.
var canvas = document.getElementById("my-canvas");
var ctx = canvas.getContext("2d");

//variables that set x and y to define the position of the ball, as well as the change in position every time it is created.
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

var ballRadius = 10;

//Creates the ball every ten milliseconds.
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
      dy = -dy;
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
}

setInterval(draw, 10);

}
