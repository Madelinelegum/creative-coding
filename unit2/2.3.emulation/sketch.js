function setup() 
{
  // create the canvas
  createCanvas(650, 700);

  // Got my artwork from this website https://spalterdigital.com/artworks/100-elements-noirs-lettre-u/

  // disable animation
  noLoop();
  angleMode(DEGREES);  // Keeps The U shape in respective Lines and not scattered

}

function draw() {

  background(250); // background color
  strokeWeight(20);  // Line thickness for the U shape

  let cols = 10;  // Number of columns
  let rows = 10;  // Number of rows
  let gridSize = width / cols;  // Size of each cell in the grid

  // basic grid loops
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize;
      let y = j * gridSize;
       
  // Shift the first 5 columns (left side) down a bit
      if (i < 5) {
        y += 30;  // Adjust for left side shift
      }

 // Randomly rotate each U shape
      let angle = random([0, 90, 180, 270]);  // Choose a random rotation angle

      push();  
      translate(x + gridSize / 2, y + gridSize / 2);  // Move to the center of the grid cell
      rotate(angle);  // Rotate the U shape by a random angle
      strokeRect(-gridSize * 0.4, -gridSize * 0.2, gridSize * 0.8, gridSize * 0.4);  // Adjust U shape to center after rotation, https://gist.github.com/carolineartz/3fd7f94ec37b8a4fb99b64ae419c9aea - I used this website, line 582 for help to rotate the shape.
      pop();  
    }
  }
}
function strokeRect(x, y, width, height) { // used this website to understand the parameters and how to use them - https://test-studio.code.org/docs/ide/applab/expressions/rect
  // Draws a U-like shape within the grid
  // vertex sets the coordinates of vertices drawn between the two functions. for reference - https://p5js.org/reference/p5/vertex/https://p5js.org/reference/p5/vertex/
  beginShape();

  vertex(x + width * 0.2, y);  // Top-left corner
  vertex(x + width * 0.2, y + height);  // Bottom-left corner
  vertex(x + width * 0.8, y + height);  // Bottom-right corner
  vertex(x + width * 0.8, y);  // Top-right corner
  endShape();



}