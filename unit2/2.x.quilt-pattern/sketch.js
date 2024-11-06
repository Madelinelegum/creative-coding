function setup() {
  createCanvas (800, 800);
  angleMode(DEGREES);
  noLoop(); 
}

function drawSawtoothStar() {

  //drawing the central square
  fill(180, 100, 150);
  rectMode(CENTER);
  rect(0, 0, 50, 50); //central square

  // draw the triangles 
  fill(200, 150, 200);
  let triangleSize = 50;


  // top of the triangle
  push();
  translate(0, -triangleSize / 2);
  triangle(-triangleSize / 2, triangleSize / 2, triangleSize / 2, 0, -triangleSize / 2);
  pop();

  //bottom of the triangle
  push();
  translate(0, triangleSize / 2);
  rotate(180);
  triangle(-triangleSize / 2, triangleSize / 2, triangleSize / 2, 0, -triangleSize / 2);
  pop();

  //left triangle 
  push();
  translate(-triangleSize / 2, 0);
  rotate(-90);
  triangle(-triangleSize / 2, triangleSize / 2, triangleSize / 2, 0, -triangleSize / 2);
  pop();

  //right triangle
  push();
  translate(triangleSize / 2,0);
  rotate(90);
  triangle(-triangleSize / 2, triangleSize / 2, triangleSize / 2, 0, -triangleSize / 2);
  pop();
}
 function draw() {
  background(255);

  let tileSize = 100; //each tile size

  //loop to create the grid

  for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {

   push();
   translate(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2); // offset the tile
   drawSawtoothStar();
   pop();
   }
  }
 }