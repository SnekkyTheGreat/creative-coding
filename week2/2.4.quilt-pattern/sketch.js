function setup() {
  createCanvas(380, 400);
  noLoop()
}

function draw() {
  // Borders will be half the width of squares, 18 squares wide 19 long,
  // meaning 19 by 20 units, each square will be 20 by 20, border is 10 wide.
  // https://www.internationalquiltmuseum.org/quilt/19970070181 Here's the quilt
  background(47, 63, 95);

for (let x = 0; x < 18; x++){
  for (let y = 0; y < 19; y++){
    push();
    // honestly not sure what I did here
    translate(x * 20, y * 20);
    // self explanatory
    strokeWeight(5)
    // the modulo thingy making it checkerboardy
    if ((x + y) % 2 == 1){
      // Darker bordered square
      stroke(13, 26, 58)
      fill(192, 189, 184)
      rect(10, 10, 15, 15)
    } else {
      // lighter bordered square
      stroke(192, 189, 184)
      fill(13, 26, 58)
      rect(10, 10, 15, 15)
    }
    
    pop();
  }
}
}