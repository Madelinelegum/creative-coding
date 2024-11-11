let points = [];

// let ripple_x = 0;
// let ripple_y = 0;
// let ripple_d = 50;

let ripplers = []; // Array to hold all ripple objects 

 class Rippler {
    constructor(x, y, size = 3, opacity = 255, lifespan = 255) {
      this.x = x;
      this.y = y;
      this. d = size; //diamter of ripple
      this.opacity = opacity; //opacity // even though this is css it helped me understand more about opacity https://www.w3schools.com/cssref/css3_pr_opacity.php
      this.lifespan = lifespan; // how long the ripple stays
}

draw(){
  //increase diameter and reduce opacity gradually
  this. d += 3; //controls the speed of expansion
  this.opacity -= 2; // Gradually reduce opacity
  this.lifespan -= 2; // Gradually reduce life of ripple

  // second ripples
  if (this.d > 50 && this.opacity > 100) {
    ripplers.push(new Rippler(this.x, this.y, this.d / 2, this.opacity / 2));
      this.opacity = 100; // setting the ripples at a certain amount
  }
  // draw the ripple with opacity
  stroke(255, this.opacity); // white stroke fading opacity
  strokeWeight(2);
  noFill();
  circle(this.x, this.y, this.d);

  }
isFaded() {
  return this.opacity <= 0 || this.lifespan <= 0;
  }
}

function setup() {
  createCanvas(800, 800);
  frameRate(60); //Increase the framerate
  angleMode(DEGREES)
  stroke(255);
  strokeWeight(2);

  for(let i = 0; i < 12; i++){
    points[i] = createVector(random(width), random(height));

  }
  pixelDensity(1);
}

function draw() { // I used this youtube video for refernce to create the water surface background! https://www.youtube.com/watch?v=kUexPZMIwuA&t=91s
  
    background(0); // blue ish background

    // move points with noise
    for(let i = 0; i < points.length; i++) {
      points[i].x += map(noise(frameCount * 0.01, i), 0, 1, -1, 1);
      points[i].y += map(noise(frameCount * 0.01, i + 1000), 0, 1, -1, 1);
    }
   
   // water surface effect
   loadPixels();
    let halfWidth = width / 2;
    let halfHeigh = height / 2;
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          let minDist = Infinity;
        for (let i = 0; i < points.length; i++) {
          let dx = x - points[i].x;
          let dy = y - points[i].y;
          let d = dx * dx + dy * dy;
          if (d < minDist) {
            minDist = d;
          }
        }

        let noiseValue = Math.sqrt(minDist);
        let index = (x + y * width) * 4;
        let colorValue = waveColor(noiseValue, 40, 32, 2.2);
        pixels[index] = colorValue; // red
        pixels[index + 1] = waveColor(noiseValue, 30, 55, 3.34); //green
        pixels[index + 2] = waveColor(noiseValue, 30, 68, 3.55); //blue
        pixels[index + 3] = 255;

      }
    }
updatePixels();

  // draw the points
  beginShape(POINTS);
  for(let i = 0; i < points.length; i++){
  vertex(points[i]. x, points[i].y);
}
  endShape();


  //draw the ripples
  for (let i = ripplers.length - 1; i >= 0; i--) {
    ripplers[i].draw();
    if (ripplers[i].isFaded()) {
   ripplers.splice(i, 1);

  }
 }
}

function waveColor(x, a, b, e){
  if(x < 0) return b;
  else return Math.pow(x/a, e)+b ;
}

//create ripple at the mouse location on click
  function mousePressed(){
    ripplers.push(new Rippler(mouseX, mouseY));
  }
