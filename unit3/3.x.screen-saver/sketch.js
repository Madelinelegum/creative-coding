// I used these video for reference https://www.youtube.com/watch?v=vmhRlDyPHMQ&list=PLwUlLzAS3RYow0T9ZXB0IomwB-DyBRTfm

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); //set up angle mode to degrees
}

function draw() {
  background(30); //gray background color

  translate(width / 2, height / 2); //move the origin to the center of the canvas
  rotate(60); //rotate the canvas
  noFill();
  stroke(255); //stroke color white

  //loop creating 50 shapes
  for (var i = 0; i < 50; i++) {

    var r = map(sin(frameCount / 2), -1, 1, 100, 200); //map the sine of the frame count 
    var g = map(i, 0, 50, 100, 200); // map the loop index
    var b = map(cos(frameCount), -1, 1, 200, 100); // map the cosine of the frame count

    stroke(r, g, b); // setting the stroke color within RBB values

    push();
    rotate(frameCount / 20); // rotate the shape based on frame count
    beginShape();


    // loop to create the vertices
    for (var j = 0; j < 360; j += 60) {
      var rad = i * 3; // radius of current vertex
      var x = rad * cos (j); // x - coordinate using cosine
      var y = rad * sin (j); // y - coordinate using sine
      vertex(x,y); 

    }
    endShape(CLOSE);
    pop()

  }
}