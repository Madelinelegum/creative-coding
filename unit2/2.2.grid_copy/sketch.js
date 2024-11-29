function setup() {
  // create a canvas
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background("blue");

  //moving grid towards center
  translate(180,180)

  for(let x = 0; x < 8; x += 3) {
    for(let y = 0; y < 8; y += 3){
      push();

      //moving the drawing plan by adding new circle
      translate(x * 120,y * 120);
      
      // thickness to circle
      strokeWeight(3,3); // I made the outline of the circle thinner and having all the circles be the same thickness.

      // outside line color
      // stroke(); // 

      // fill color
      fill(14,208,270); // the fill color 

      //arc
      arc(random(0,10,100,0,0,90));

      // the triangle
      triangle(-25, 0, 26.25, 32.5, 0, -25); // changed from ellipse to triangle

      
      pop();

      push();

      //moving the drawing plan by adding new sqaure
      translate(x * 120,y * 120);
      
      // thickness to sqaure
      strokeWeight((20,20)); // changed the size of square

      // outside line color
      stroke(500,0,200,100); // sqaure color

      // fill color
      fill(244,random(8,130),100);

      //arc
      arc(random(0,10,100,0,0,90));

      // the sqaure
      rect(-2,0,-4,2); // adding a sqaure inside the circle, the -2,0 codes the square in the middle of the triangle

      
      pop();
        }

  }

}

