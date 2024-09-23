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
      strokeWeight(random(5,28) );

      // outside line color
      stroke(random(0,245),103,293);

      // fill color
      fill(244,random(8,130),200);

      //arc
      arc(random(0,10,100,0,0,90));

      // the circle
      ellipse(0,0,random(75,130));

      //pop
      pop(random(8,10));

        }

  }

}
