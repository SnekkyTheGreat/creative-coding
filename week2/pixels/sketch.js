let img;
let sampleX = 36;
let sampleY = 36;

function preload(){
  img = loadImage('https://snekkythegreat.github.io/creative-coding/week2/pixels/PixelSquiggles.jpg');
}

function setup() {
  createCanvas(500, 500);
  img.loadPixels();
}

function draw() {
  background(0);

  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){
      var index = (x + y * img.height) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];
      // main circle things
      fill(r, g, b);
      noStroke();
      ellipse(x, y, sampleX, sampleY);
      // little rect in the center that's inverted
      rectMode(CENTER);
      fill((255 - r), (255 - g), (255 - b));
      rect(x, y, (sampleY - 30), (sampleX - 30));
    }
  }
}