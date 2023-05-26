function setup() {
  createCanvas(450, 450);
  noLoop()
}

function draw() {
  background(211, 212, 203);
  // So this won't look exactly the same but it's supposed to be the same concept.
for (let x = 0; x < 6; x++){
  for (let y = 0; y < 6; y++){
    push();
    translate(x * 60, y * 60)
    noFill()
    // Layer 1 quads settings
    strokeWeight(12)
    stroke(133, 141, 131)
    // Layer 1 quads
    quad(random(27, 79), random(27, 79), 
    random(81, 113), random(27, 79), 
    random(81, 113), random(81, 113), 
    random(27, 79), random(81, 113))
    pop();
  }
}
// In a different loop so that the thin ones aren't overlapped by thick ones if they're 
// drawn afterwards
for (let x = 0; x < 6; x++){
  for (let y = 0; y < 6; y++){
    push();
    translate(x * 60, y * 60)
    noFill()
    //Layer 2 quads settings
    strokeWeight(4)
    stroke(0, 0, 0, 140)
    // Layer 2 quads
    quad(random(47, 99), random(27, 79),
    random(101, 133), random(27, 79), 
    random(101, 133), random(81, 113),
    random(47, 99), random(81, 113))
    pop();
  }
}
}