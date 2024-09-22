function setup() {
  // create a canvas
  createCanvas(400, 400);

}

function draw() {
  background(150);

//I chose this emoji because it is my most used one. It is my reaction to every text I receive. It is a natural expression that can mean multiple things.


  // basic components for the face
  fill (255,220,100);
  stroke ("#ddbb77");
  strokeWeight(20);
  circle(200,200,250);


 

  // used this link to find the color "mocha" https://htmlcolorcodes.com/colors/shades-of-brown/
  // basic components for the mouth
  fill("#967969");
  stroke("#967969");
  strokeWeight(10)
  ellipse(200,255,130,3);


  // basic components for the eyes

  ellipse (160,150,40,60)
  ellipse (240,150,40,60)
}