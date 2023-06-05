let x = 0;
let y = 0;
let xspeed = 0.5;
let yspeed = 0.5;
let colorindx = 0;
let colors = [
  [0, 150, 210],
  [80, 40, 240],
  [190, 0, 170],
  [240, 60, 60],
  [200, 170, 0],
  [90, 240, 40],
  [10, 210, 150]
  ]

function preload(){
  // img = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.1bounce/BluRay.png');
}

function setup() {
  createCanvas(400, 300);
  fill(0, 150, 210);
}

function draw() {
  background(0);
  noStroke();
  translate(width / 2, height / 2);

  ellipse(x, y, 50);
  for (let i = 0; i < colors.length; i += 1){
    if (x > 175 | x < -175){
      xspeed = -xspeed;
      fill(colors[i], colors[i + 1], colors[i + 2]);
  }

    if (y > 125 | y < -125){
      yspeed = -yspeed;
      fill(colors[i], colors[i + 1], colors[i + 2]);
  }

  x += xspeed;
  y += yspeed;
  }
  
}

