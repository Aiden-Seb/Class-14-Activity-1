var ball={
  x:20,
  y:30,
  radius:30,
  xSpeed:0,
  ySpeed:0,
  color:["red","blue","cyan","purple","green"]
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.radius)
  fill(ball.color[3])
  ball.xSpeed=1
  ball.x=ball.x+ball.xSpeed
}