function setup() {

// The key concepts behind this landscape is that I saw mutlipe mountains in the distance in front of me as I stood on top of a mountain

  // create the canvas
  createCanvas(800, 800); // size of canvas

}

function draw() {
  background(133, 194, 230); // Background color // used the link for the light blue color (line 9)- https://editor.p5js.org/Prabashi/sketches/pOiiM-FJC 
  
  drawSun(80,70,100); //adding the sun

  noStroke();
  fill (34,139,34); // dark green color for first hill {


 
// move left to right across the canvas

beginShape();
  for (let x = 0;x <= width; x+=1){

    let y = noise(x * 0.005) * height/ 2 + height/2;
    vertex(x,y);
    
  }
    vertex(width,height);
    vertex(0,height);
    endShape(CLOSE); // completes shape and fills in the hill with green

    fill(20,100,89); // forrest green middle hill color

// move left to right across the canvas

beginShape();
  for (let x = 0;x <= width; x+=1){
    let y = noise(x * 0.008) * height/2 + height/2 + 15;
    vertex(x,y);
}
    vertex(width,height);
    vertex(0,height);
    endShape(CLOSE); // completes shape and fills in the hill with green

fill(10,100,9); // green color for hill front hill

// move left to right across the canvas

beginShape();
  for (let x = 0;x <= width; x+=1){
    let y = noise(x * 0.009) * height/2 + height/2 + 20;
    vertex(x,y);
}
    vertex(width,height);
    vertex(0,height);
    endShape(CLOSE); // completes shape and fills in the hill with green

    drawcloud(150,150);
    drawcloud(350,100);
    drawcloud(600,200);
}

function drawcloud(x,y){

fill(255);
noStroke();
ellipse(x, y, 100, 60);
ellipse(x, - 40, y, 70, 50);
ellipse(x + 40, y, 70, 50);

}

function drawSun(x, y, diameter) {
  fill(255, 223, 0);
  noStroke();
  ellipse(x, y, diameter, diameter);
}
