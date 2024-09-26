function setup() {
  // create a canvas
  createCanvas(400, 400);

}

function draw() {
  background(150);

//I chose this emoji because one of my favorite colors is purple. I also wanted to challenge myself to add horns.


  // basic components for the face
  fill (105,95,190);
  stroke ("#800080");
  strokeWeight(20);
  circle(200,200,250);
 


  // basic components for the mouth
  // Linked I used to curve the mouth https://www.w3schools.com/tags/canvas_arc.asp
  stroke("#800080"); //purple color
  fill(100,30,110)
  strokeWeight(2) // mouth outline
  arc(199, 250, 110, 30, 0, PI); //curved mouth
  

  // basic components for the eyes
  fill(100,30,110);
  stroke("#800080"); //purple color
  ellipse (160,192,30,50)
  ellipse (230,192,30,50)

  //eyebrows
  //line, x1,y1,x2,y2
  stroke("#800080"); //purple color'
  fill(100,30,110);
  strokeWeight(5);
  line(170,168,130,150); //used this website to help me get the lines for the left eyebrow https://p5js.org/reference/p5/line/#:~:text=The%20version%20of%20line(),t%20affect%20the%20line's%20color.
  line(220,168,260,150); ////used this website to help me get the lines for the right eyebrow https://p5js.org/reference/p5/line/#:~:text=The%20version%20of%20line(),t%20affect%20the%20line's%20color.

  //horns
  stroke("#800080"); //same purple color as eyebrows and face
  strokeWeight(1); //horn outline
  fill(105,95,190); //same color as face
   
  push(); //start translates; adding the horn element used this website to help me understand the importance and what push() does https://p5js.org/reference/p5/push/#:~:text=The%20push()%20and%20pop,%2F%2F%20Begin%20the%20drawing%20group.
  translate(170, 127); //shifts the origin to a position. used this website to help. https://p5js.org/reference/p5/translate/
  rotate(-PI / 4); // changes the orientation. http://btk.tillnagel.com/tutorials/rotation-translation-matrix.html used this link for help to rotate
  triangle(-30, -60, 0, -150, 30, -50); // the triange shape to the horns. used this website https://p5js.org/reference/p5/triangle/#:~:text=triangle(),-Draws%20a%20triangle&text=A%20triangle%20is%20a%20three,point%20(x3%2C%20y3)%20.
  pop(); //stops translate; used this website to understand https://p5js.org/reference/p5/push/#:~:text=The%20push()%20and%20pop,%2F%2F%20Begin%20the%20drawing%20group.

 push(); // start translate; used this website to help me understand the importance and what push() does https://p5js.org/reference/p5/push/#:~:text=The%20push()%20and%20pop,%2F%2F%20Begin%20the%20drawing%20group.
  translate(230, 120); //shifts the origin to a position. used this website to help. https://p5js.org/reference/p5/translate/
  rotate(PI / 4); // changes the orientation. used this website http://btk.tillnagel.com/tutorials/rotation-translation-matrix.html used this link for help to rotate
  triangle(-30, -40, 0, -150, 30, -50); // the triange shape to the horns. used this website https://p5js.org/reference/p5/triangle/#:~:text=triangle(),-Draws%20a%20triangle&text=A%20triangle%20is%20a%20three,point%20(x3%2C%20y3)%20.
  pop(); //stops translate; used this website to understand//https://p5js.org/reference/p5/push/#:~:text=The%20push()%20and%20pop,%2F%2F%20Begin%20the%20drawing%20group. 

  //https://www.youtube.com/watch?v=maTfm84mLbo ; also used this youtube video for reference. the push() and pop() were tricky to fully understand but worth it as I can use them in future products.
}