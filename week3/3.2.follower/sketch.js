let bdimg;
let pgimg;
let chimg;
let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let cassx = 400;
let cassy = 500;
let health = 400;
let cutscene = 1;
let purpleX;
let purpleY;
let dead = false;
let stop = false;
let debug = false;

function preload() {
  bdimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/BackdropSprite2.png');
  sbimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/SpringBonnie.png')
  chimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/Child2.gif');
  pgimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/PurpleGuy2.gif');
  goimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/GameOver.png');
  cutimg1 = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/Cutscene1.png')
  cutimg2 = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/Cutscene.png')
  cutimg3 = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/Cutscene3.png')
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  // collision
  if (mouseX > 120 & mouseX < 680){
    purpleX = mouseX
  }
  if (mouseY > 102 & mouseY < 428){
    purpleY = mouseY
  }

  // distance
  let d = sqrt((cassx - purpleX)**2 + (cassy - purpleY)**2);

  // backdrop
  image(bdimg, 0, 0);

  // spring bonnie suit
  image(sbimg, 589, 243, 117, 118);

  // health text
  fill(255)
  noStroke();
  textSize(20);
  text("Health", 15, 20,);

  // under health bar
  fill(0);
  strokeWeight(3);
  stroke(255);
  rect(15, 30, 400, 20);

  // health bar
  fill(123, 23, 173);
  strokeWeight(3);
  stroke(255);
  rect(15, 30, health, 20);

  // this will follow the mouse
  image(chimg, cassx, cassy, 54, 70);

  // this will be directly on the mouse
  image(pgimg, purpleX - 85, purpleY - 60,);
  // this happens if you die specially
  if (dead == true & stop == false){
    image(cutimg1, 0, 0);
    setTimeout(() => {
      cutscene = 2;
    }, 2000)
  }

  // detects if dead normally
  if (cutscene == 2){
    image(cutimg2, 0, 0);
    setTimeout(() => {
      cutscene = 3
    }, 2000)
  }

  if (cutscene == 3){
    image(cutimg3, 0, 0);
    setTimeout(() => {
      health = 0;
    }, 2000)
  }

  if (health == 0){
    image(goimg, 0, 0);
    stop = true;
  }

  // motion
  if (purpleX > cassx){
   xspeed = speedfactor;
 }else{
   xspeed = -speedfactor;
 }

 if (purpleY > cassy){
   yspeed = speedfactor;
 }else{
   yspeed = -speedfactor;
 }

  cassx += xspeed;
  cassy += yspeed;

  // main damage
  if (d < 80 & health > 0){
    health -= 1;
  }

  // special damage
  if (purpleX > 595 & purpleX < 705 & purpleY > 240 & purpleY < 360){
      dead = true;
    }

  if (debug){
    noStroke();
    fill(255)
    text("x " + purpleX, 400, 300);
    text("y " + purpleY, 400, 330);
    text("d " + d, 400, 360);
    text("health " + health, 400, 390)
  }
}