let eyeX, eyeY, eyeRadius, pupilRadius; // watched this video https://www.youtube.com/watch?v=p0F8nBC1LdE

  function setup() { // https://codeclubworld.org/projects/make-a-face/steps/3 refernce
  createCanvas(400,400);
  eyeX = width / 2; //center of canvas
  eyeY = height / 2;
  eyeRadius = 50; // radius of the eye
  pupilRadius = 15; // radius of the pupil
}

  function draw() { 
  background(0,150,0); // green background color

  //distance formula
  let d = sqrt((eyeX - mouseX)**2 + (eyeY - mouseY)**2);

  let ang;
  if (mouseX > eyeX){
  ang = asin((mouseY - eyeY) / d) ;
  }else{
  ang = PI - asin((mouseY - eyeY) / d)
}


// draw the green blob 

  fill(0, 100, 0);
  noStroke();
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let r = eyeRadius + 50 + noise(a * 5, frameCount * 0.02) * 30; //read more about how to use noise, https://compform.net/noise/, frameCount https://processing.org/reference/frameCount.html
    let x = eyeX + r * cos(a);
    let y = eyeY + r * sin(a);
    vertex(x, y);

}

  endShape(CLOSE);


  // Draw the eyeball
  fill(255); // white background
  stroke(0); //black outline
  ellipse(eyeX, eyeY, eyeRadius * 2, eyeRadius * 2)

  
  //pupil position using angle and eye radius, sin and cos reference https://p5js.org/reference/p5/cos/
  let pupilX = eyeX + cos(ang) * (eyeRadius - pupilRadius);
  let pupilY = eyeY + sin(ang) * (eyeRadius - pupilRadius);


  //draw the pupil so it rotates towards mouse
  fill(0); //black pupil
  noStroke();
  ellipse(pupilX, pupilY, pupilRadius * 2, pupilRadius * 2);

}