function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  noStroke(); // set the stroke (line) color 
  fill(204, 214, 221); // set the fill color

  // draw an ellipse with 250 pixel diameter
  // with its center at x position 200
  // and at y position 200
  rectMode(CENTER);
  // skull
  rect(200, 170, 250, 235, 155, 155, 80, 80)
  // teeth
  rect(200, 316, 48, 64, 0, 0, 28, 28)
  rect(256, 300, 48, 96, 0, 0, 28, 28)
  rect(144, 300, 48, 96, 0, 0, 28, 28)

  ellipseMode(CENTER);
  fill(41, 47, 51);
  // eyes
  ellipse(144, 160, 84, 84);
  ellipse(256, 160, 84, 84);
  // nose holes
  ellipse(200, 240, 24, 24);
  ellipse(190, 248, 20, 20);
  ellipse(210, 248, 20, 20);
  // nose framing
  fill(204, 214, 221);
  ellipse(177, 227, 30, 30)
  ellipse(223, 227, 30, 30)

}