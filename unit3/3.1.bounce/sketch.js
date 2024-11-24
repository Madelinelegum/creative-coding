let x = 0;
let y = 0;
let xspeed = 5;
let yspeed = 5;

function setup() {
  createCanvas(400, 400); //canvas size
  fill("pink");
}

function draw() {
  background(220);
  noStroke();

  translate(width / 2, height / 2); // move the orgin to the center 

  drawStar(x, y, 30, 15, 5); // star is at a position (x,y) radius of 30, inner radius 15, and 5 points


  if (x > 175 | x < -175){
    xspeed = -xspeed; // reverse the bounce 
    fill(random(225), 178,230); // random fill color
}

  if (y > 125 | y < -125){
    yspeed = -yspeed; // reverse the bounce 
    fill(random(225), 178,230); // random fill color
}

  x += xspeed; // star moving horizontally
  y += yspeed; // star moving vertically
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; // angle between the points of the star
  let halfAngle = angle / 2.0; //angle of the inner vertices

  beginShape(); // used this for reference to help me understand how to get the star shape - https://editor.p5js.org/jjordao/sketches/Tn_qxfxH7 
  for (let a = 0; a < TWO_PI; a += angle) { // loop through each point
    let sx = x + cos(a) * radius2; // x position of the outer vertex
    let sy = y + sin(a) * radius2; // y position of the outer vertex
    vertex(sx, sy); // vertex of the outer point
    sx = x + cos(a + halfAngle) * radius1; // x positon of the inner vertex
    sy = y + sin(a + halfAngle) * radius1;  

    // y position of the inner vertex
    vertex(sx, sy); // vertex of the inner point
  }
  endShape(CLOSE);
}