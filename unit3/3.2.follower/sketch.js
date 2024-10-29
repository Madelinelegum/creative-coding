let debug = false;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;
let goalSize = 30;
let followerImg;

function preload() {
  followerImg = loadImage('OIP.jpg');
}

function setup() {
  createCanvas(800, 800);

  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);
}

function draw() {
  background("Thistle");

  rect(goalx, goaly,goalSize,goalSize);

  // display score 
  textSize(30);
  fill(0);
  text("Score: " + score, 10, 30) // Display score at the top left corner

// the distance formula 
let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

// add the movement 
x += speedx;
y += speedy;


// Kayne image 
image(followerImg, x, y, 50, 50);
if (mouseX > x){
  //move to the right
  speedx = speedfactor;
}else{
// move to the left
  speedx = -speedfactor;

}
if (mouseY > y){
  //move to the right
  speedy = speedfactor;
}else{
//  