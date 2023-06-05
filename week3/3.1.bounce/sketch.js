// x and y
let x = 0;
let y = 0;
// x and y rate of change
let xspeed = 0.5;
let yspeed = 0.5;
// how many times the corner has been hit
let cornerhits = 0;
// list of color combos
let colors = [
  [0, 150, 210],
  [80, 40, 240],
  [190, 0, 170],
  [240, 60, 60],
  [200, 170, 0],
  [90, 240, 40],
  [10, 210, 150]
  ]

function setup() {
  createCanvas(400, 300);
  // starting color
  fill(0, 150, 210);
}

function draw() {
  background(0);
  noStroke();
  translate(width / 2, height / 2);
  
  // Displays number of times the corner has been hit. This is quite precise so some
  // things which look like corner hits actually aren't, even if they're only
  // one pixel off.
  textSize(20);
  text("Corner Hits: " + cornerhits, -70, 0)

  // Our bouncy ball
  ellipse(x, y, 50);

  // The looper. I thought it would stop after all the color combos in the list had been
  // used but it's not for some reason. It also sometimes does the same color twice in a row.
  // I'm not sure why but it's not too big a deal from my point of view
  for (let i = 0; i < colors.length; i += 1){
    if (x > 175 | x < -175){
      xspeed = -xspeed;
      fill(colors[i], colors[i + 1], colors[i + 2]);
  }

    if (y > 125 | y < -125){
      yspeed = -yspeed;
      fill(colors[i], colors[i + 1], colors[i + 2]);
  }
    // This detects if the ball is in the corner. I tried making it less precise but then
    // the counter went up by three or more and I couldn't figure out how to make it not
    // do that.
    if ((x > 175 & y > 125) | (x > 175 & y < -125) | (x < -175 & y > 125) | (x < -175 & y < -125)){
    cornerhits += 1;

    }
  // The actual moving bit.
  x += xspeed;
  y += yspeed;
  }
  
}

