function setup() {


  // create the canvas
  createCanvas(800, 800);

}

function draw() {
  background(133, 194, 230); // Background color // used the link for the light blue color (line 9)- https://editor.p5js.org/Prabashi/sketches/pOiiM-FJC 
  noStroke();
  fill (34,139,34); // dark green color for first hill

// move left to right across the canvas
beginShape();
  for (let x = 0;x <= width; x+=1){

    let y = noise(x * 0.005) * height/ 2 + height/2;
    vertex(x,y);
    
  }
    vertex(width,height);
    vertex(0,height);
    endShape(CLOSE); // completes shape and fills in the hill with green
}



