// I chose to do the night sky because when I think of time passing by, I think of the nights when my brother and I would lay outside in the grass and watch the clouds move in the night sky. I remember we would lie there for hours until we were told to come back inside, but we would watch how far the clouds would move when we observed them. I don't know how much time we spent outside watching during some periods, but it would sometimes be for hours.

//time related x-coordinate variables
let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let x_mil = 50;

//varibales for tracking time changes
let currentSecond;
let milliFreeze = 0;
let mm;

let stars = []; //stores the star positions as vectors inside the list, to randomize their postion on x and y

function setup() {
  createCanvas(600, 400);


  // draw stars in the background , https://editor.p5js.org/jesse_harding/sketches/0szF7gcAx
  for (let i = 0; i < 100; i++) {
    stars.push(createVector(random(width), random(height / 2), random
    (1,6))); // upper half has randomized stars
  }
}

function draw() {
  background(0,0, 128); // blue background
  
// drawing stars
for(let i = 0; i < stars.length; i++) {
  stroke(255, 255, 150);
  point(stars[i].x, stars[i].y);
}

  // Second change and update millsecond counter
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


  //The map time values to x-coordinates
    x_hour = map(hour(), 0, 23, 50, 550); 
    drawCloud(x_hour, 150, 60, 40);

    x_minute = map(minute(), 0, 59, 50, 550);
    drawCloud(x_minute, 200, 50, 30);

    x_second = map(second(), 0, 59, 50, 550);
    drawCloud(x_second, 250, 40, 20);

    x_mil = map(mm, 0, 999, 50, 550);
    drawCloud(x_mil, 300, 30, 15);
  
    pop();

}

// function to draw the cloud like shape , https://p5js.org/reference/p5/ellipse/
function drawCloud(x, y, w, h) {
  
  //main cloud shape with three humps
  ellipse(x, y, w, h); // center hump
  ellipse(x - w * 0.5, y + h * 0.1, w * 0.7, h * 0.7); //left hump
  ellipse(x + w * 0.5, y + h * 0.1, w * 0.7, h * 0.7); //right hump

}





