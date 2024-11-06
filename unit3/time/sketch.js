let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let x_mil = 50;

let currentSecond;
let milliFreeze = 0;
let mm;

let stars = []; // star position

function setup() {
  createCanvas(600, 400);


  // draw stars in the background , https://editor.p5js.org/jesse_harding/sketches/0szF7gcAx
  for (let i = 0; i < 100; i++) {
    stars.push(createVector(random(width), random(height / 2))); // upper half has randomized stars
  }
}

function draw() {

  background(0,0, 128); // blue background
  


// drawing stars
for(let i = 0; i < stars.length; i++) {
  stroke(255, 255, 150);
  point(stars[i].x, stars[i].y);
}
  // textSize(25);
  // text("hour: " + hour(), 50, 50);
  // text("minute: " + minute(), 50, 75);
  // text("second: " + second(), 50, 100);
  // text("millisecond: " + mm, 50, 125); 


  // text("Day: " + day(), 50, 110);
  // text("Month: " + month(), 50, 125);
  // text("Year: " + year(),50, 140);

  // Check if we have a new second
  if (currentSecond != second()){
    currentSecond = second();
    milliFreeze = millis();
  }

    mm = millis() - milliFreeze;


  // drawing moon
    push();
    noStroke();
    fill(245, 245, 220); // color of moon
    circle(500, 80, 100); //moon in right corner
    pop();

  // drawing clouds using minute, second, and millisecond values

    push();
    noStroke();
    fill(255,255,255); // cloud color


  //assign value to x_hour using map()
    x_hour = map(hour(), 0, 23, 50, 550);
    drawCloud(x_hour, 150, 60, 40);


  // assign value to x_minute using map()
    x_minute = map(minute(), 0, 59, 50, 550);
    drawCloud(x_minute, 200, 50, 30);

  // assign value to x_second using map()
  x_second = map(second(), 0, 59, 50, 550);
    drawCloud(x_second, 250, 40, 20);

  //assign value to x_mil using map()
  x_mil = map(mm, 0, 999, 50, 550);
    drawCloud(x_mil, 300, 30, 15);
  
    pop();

}

// function to draw the cloud like shape , https://p5js.org/reference/p5/ellipse/
function drawCloud(x, y, w, h) {
  
  //main cloud shape with three humps
  ellipse(x, y, w, h); // center hump
  ellipse(x - w * 0, y, w * 0, h); //left hump
  ellipse(x + w * 0, y, w * 0, h); //right hump

  //adding smaller ellipses to make cloud more fluffy

  ellipse(x - w * 0.5, y + h * 0.1, w * 0.7, h * 0.7);
  ellipse(x + w * 0.5, y + h * 0.1, w * 0.7, h * 0.7);
  ellipse(x, y + h * 0.2, w * 0.6, h * 0.6);
}

  //cloud shape using ellipse


  // ellipse(x, y, w, h); //main cloud body
  // ellipse(x + 20, y - 0, w * 0.7, h * 0.7);
  // ellipse(x - 20, y - 0, w * 0.7, h * 0.7);
  // ellipse(x + 45, y - 0, w * 0.5, h * 0.5);
  // ellipse(x - 45, y - 0, w * 0.5, h * 0.5);
  // ellipse(x + 40, y + 0, w * 0.9, h * 0.9);
  // ellipse(x - 40, y + 0, w * 0.9, h * 0.9);
  



