function setup() {
  createCanvas(1200, 900);
  noLoop()
}

function draw() {
  // background(Math.floor(Math.random() *255), Math.floor(Math.random() *255), Math.floor(Math.random() *255));
  background(68);
  translate(0,0);
  for (let x = 0; x < 12; x++){
    for (let y = 0; y < 10; y++){
      push();
      translate(x * 100, y *100);
      stroke(Math.floor(Math.random() *255), Math.floor(Math.random() *255), Math.floor(Math.random() *255) ,98);
      strokeWeight(5);
      fill(Math.floor(Math.random() *255), Math.floor(Math.random() *255), Math.floor(Math.random() *255), 90);
      triangle(50,10,10,90,90,90)
      pop();
    }
  }

  for (let x = 0; x < 11; x++){
    for (let y = 0; y < 8; y++){
      push();
      translate(x * 100, y *100);
      stroke(Math.floor(Math.random() *255), Math.floor(Math.random() *255), Math.floor(Math.random() *255) ,98);
      strokeWeight(5);
      fill(Math.floor(Math.random() *255), Math.floor(Math.random() *255), Math.floor(Math.random() *255), 90);
      ellipse(100,100,80,80);
      pop();
    }
  }

  for (let x = 0; x < 12; x++){
    for (let y = 0; y < 10; y++){
      push();
      translate(x * 100, y *100);
      stroke(Math.floor(Math.random() *255), Math.floor(Math.random() *255), Math.floor(Math.random() *255) ,98);
      strokeWeight(6);
      fill(Math.floor(Math.random() *255), Math.floor(Math.random() *255), Math.floor(Math.random() *255), 90);
      rect(10,10,80,80);
      pop();
    }
  }
}