let x1 = 0;
let y1 = 0;
let x2 = 50;
let y2 = 50;
let xspeed1 = 4;
let yspeed1 = 4;
let xspeed2 = 3;
let yspeed2 = 3;
let angle1 = 0;
let angle2 = 0;

function setup() {
  createCanvas(400, 300); //canvas size
  fill("pink"); // first star color
}

function draw() {
  background(220);
  noStroke();

  translate(width / 2, height / 2); // move the orgin to the center 

  //first star // reference https://www.youtube.com/watch?v=o9sgjuh-CBM and https://p5js.org/reference/p5/rotate/
  push()
  translate(x1, y1);
  rotate(angle1);
  drawStar(0,0,30,15,5);
  pop()

  //second star
  push()
  translate(x2, y2);
  rotate(angle2);
  drawStar(0,0,30,15,5);
  pop()


//first star
  if (x1 > 175 | x1 < -175){
    xspeed1 = -xspeed1; // reverse the bounce 
    fill(random(225), 178,230); // random fill color
    angle1 += PI / 4; //rotate
}
  // first star
  if (y1 > 125 | y1 < -125){
    yspeed1 = -yspeed1; // reverse the bounce 
    fill(random(225), 178,230); // random fill color
    angle1 += PI / 4; // rotate
}

//second star
  if (x2 > 175 | x2 < -175){
    xspeed2 = -xspeed2; // reverse the bounce 
    fill(random(225), 178,230); // random fill color
     angle2 += PI / 4; // rotate
}
  //second star
if (y2 > 125 | y2 < -125){
    yspeed2 = -yspeed2; // reverse the bounce 
    fill(random(225), 178,230); // random fill color
     angle2 += PI / 4; // rotate
}


  // first circle
  x1 += xspeed1; // star moving horizontally, first star
  y1 += yspeed1; //  star moving vertically, first star
  x2 += xspeed2; // star moving horizontally, second star
  y2 += yspeed2; // star moving vertically, second star
}

 // first circle
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
  endShape(CLOSE);
  }

}
