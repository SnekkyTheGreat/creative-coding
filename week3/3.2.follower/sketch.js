let bdimg;
let pgimg;
let chimg;
let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let cassx = 400;
let cassy = 500;
let debug = false;
let health = 400;
let d = sqrt((cassx - mouseX)**2 + (cassy - mouseY)**2);

function preload() {
  bdimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/BackdropSprite2.png');
  chimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/Child2.gif');
  pgimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/PurpleGuy2.gif');
  goimg = loadImage('https://snekkythegreat.github.io/creative-coding/week3/3.2.follower/GameOver.png')
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  // backdrop
  image(bdimg, 0, 0);

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
  image(pgimg, mouseX - 85, mouseY - 60,);

  
  // motion
  if (mouseX > cassx){
   xspeed = speedfactor;
 }else{
   xspeed = -speedfactor;
 }

 if (mouseY > cassy){
   yspeed = speedfactor;
 }else{
   yspeed = -speedfactor;
 }

  cassx += xspeed;
  cassy += yspeed;

  // damage
  if (d > 80){
    health -= 50;
  }

  if (debug){
    noStroke();
    fill(255)
    text("x " + mouseX, 400, 300);
    text("y " + mouseY, 400, 330);
    text("d " + d, 400, 360);
  }
}