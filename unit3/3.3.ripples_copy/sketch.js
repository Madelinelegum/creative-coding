let ripple_x = 0;
let ripple_y = 0;
let ripple_d = 50;

let ripplers = []; // Array to hold all ripple objects 

 class Rippler {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.d = 0; //diamter of ripple
      this.opacity = 255; //opacity // even though this is css it helped me understand more about opacity https://www.w3schools.com/cssref/css3_pr_opacity.php
  
}

draw(){
  //increase diameter and reduce opacity gradually
  this.d += 2; //controls the speed of expansion
  this.opacity -= 3; // Gradually reduce opacity
  // draw the ripple with opacity
  stroke(255, this. opacity); // white stroke fading opacity
  strokeWeight(2);
  noFill();
  circle(this.x, this.y, this.d);

  }
isFaded() {
  return this.opacity <= 0;
  }
}

function setup() {
  createCanvas(800, 800);
  background(220); //light background

function draw() {
    background(220, 220, 255, 125); // blue ish background
    stroke("white")
    strokeWeight(5);
    noFill();

    for (let i = ripplers.length - 1; i >= 0; i --) { 
      ripplers[i].draw();

      if (ripplers[i]. isFaded()) {
        ripplers.splice (i, 1);
    }
   }

 if(mouseIsPressed){
      for(let x = 0; x < width; x+= 15) {
      strokeWeight(0);
      fill(5,5,135,3);
      ellipse(mouseX, mouseY, x / 15, x / 15);
    }
  }

    ripple_d += 1;
    circle(ripple_x, ripple_y, ripple_d);

    push();
    fill("white");
    strokeWeight(1);
    textSize(50);
    text("ripple_x: " + ripple_x, 50, 50);
    text("ripple_y: " + ripple_y, 50, 100);
    pop();
  


//create a new ripple at the mouse location on click
  function mousePressed(){

    ripple_x = mouseX;
    ripple_y = mouseY;
    ripple_d = 0;

    ripplers.push(new Rippler(mouseX, mouseY));
  }
