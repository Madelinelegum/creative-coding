function setup() {
  // create a canvas
  createCanvas(1200, 1200);
  noLoop();
}

function draw() {
  background(220);

  //moving grid towards center
  translate(180,180)

  for(let x = 0; x < 8; x += 1) {
    for(let y = 0; y < 8; y += 1){
      push();

      //moving the drawing plan by adding new circle
      translate(x * 120,y * 120);
      
      // thickness to circle
      strokeWeight(10,10); // I made the outline of the circle thinner and having all the circles be the same thickness.

      // outside line color
      stroke(random(0,100),103,150); // I changed the outside color of the triangles to make it look retro.

      // fill color
      fill(14,208,200); // the fill color is now a seafoam green

      //arc
      arc(random(0,10,100,0,0,90));

      // the triangle
      triangle(-50, 0, 52.5, 65, 0, -50); // changed from ellipse to triangle

      //pop
      pop(random(8,10));

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

      //pop
      pop(random(8,10));

        }

  }

}

