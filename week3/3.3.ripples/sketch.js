let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 50;

let ripplers = [];

class Rippler {
  constructor(x,y){
    this.x = x,
    this.y = y,
    this.d = 0
    this.o = 255;
    this.s = 3;
  }

  draw(){
    this.d += this.s;
    this.o -= 1;
    if (this.s > 0){
      this.s -= 0.005;
    }

    strokeWeight(2);

    stroke(255, 0, 0, this.o + 6);
    ellipse(this.x, this.y, this.d + 6);

    stroke(160, 0, 0, this.o + 3);
    ellipse(this.x, this.y, this.d + 3);

    stroke(255, 150, 0, this.o);
    ellipse(this.x, this.y, this.d);

    // circle 2
    if (this.d > 6){
      stroke(160, 100, 0, this.o + 3);
      ellipse(this.x, this.y, this.d - 3);

      stroke(255, 255, 0, this.o + 6);
      ellipse(this.x, this.y, this.d - 6);

      stroke(160, 160, 0, this.o + 9);
      ellipse(this.x, this.y, this.d - 9);
    }
    // circle 3
    if (this.d > 12){
      stroke(0, 255, 0, this.o + 12);
      ellipse(this.x, this.y, this.d - 12);

      stroke(0, 160, 0, this.o + 15);
      ellipse(this.x, this.y, this.d - 15);

      stroke(0, 0, 255, this.o + 18);
      ellipse(this.x, this.y, this.d - 18);
    }
    // circle 4
    if (this.d > 40){
      stroke(0, 0, 160, this.o + 21)
      ellipse(this.x, this.y, this.d - 21);

      stroke(255, 0, 255, this.o + 24)
      ellipse(this.x, this.y, this.d - 24);

      stroke(160, 0, 160, this.o + 27)
      ellipse(this.x, this.y, this.d - 27);
    }
  }
}

function setup() {
  createCanvas(1904, 910);
}

function draw() {
  background(110, 127, 142);
  strokeWeight(2);
  noFill();

  for (let i = 0; i < ripplers.length; i ++){
    ripplers[i].draw();
  }

  
}

function mousePressed(){
  ripple_x = mouseX;
  ripple_y = mouseY;
  ripple_d = 0;

  ripplers.push(new Rippler(mouseX, mouseY));
}