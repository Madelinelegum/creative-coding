//This game is inspired by Geometry Dash. I played it when I was younger and still do to this day. I enjoy playing this type of game because it's easy for people to learn and can be fun!

let player; //The player you contol
let obstacles = []; //Array to store obstacles
let score = 0; //Keep track of score

//Initial game setup
function setup() {
  createCanvas(800, 400);
  frameRate(60);
  player = new Player(); //Creating the player

}

function draw() {
  background(220); //background color

  //Update and Show Player
  player.update();
  player.show();

   //Generate new obstacles every 90 frames 
    if (frameCount % 90 === 0) {
        obstacles.push(new Obstacle());

  }
    //Check each obstacle
      for (let i = obstacles.length - 1; i >= 0; i--) {

        //move and show the obstacle
        obstacles[i].update();
        obstacles[i].show();

    // Remove obstacles that go off the screen
    if (obstacles[i].x + obstacles[i].size < 0) {
      obstacles.splice(i, 1);

    } 
    //Checks if player collides with the obstacle
    if (player.hits(obstacles[i])) {
      noLoop();

      //Asks player if they want to play again
      if (confirm('Game Over! Player Again?')) {
        resetGame();
      }
      return;
    }
  }

  //Increase score every 5 frames
   if (frameCount % 5 ===0) {
    score++;

  }
  //Display score in top left corner
   fill(0);
   text('Score: ' +  score, 10, 30);

  }


class Player {
  constructor() {
    this.x = 50; // position from left
    this.y = height - 50; // position from top
    this.size = 50; //size of player
    this.velocity = 0; //How fast the player moves vertically 
    this.gravity = 0.8; //Bring the player back down
  }
  //red square player
  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.size, this.size);
 }

  update() {
  this.velocity += this.gravity; //add gravity to velocity
   this.y += this.velocity; //update vertical positon
    
   //ground collision check
    if(this.y > height - this.size) {
      this.y = height - this.size; // set position to ground level
      this.velocity = 0; //reset velocity on ground
     }
  }
    //Makes player jump
    jump() {
      if (this.y === height - this.size) {
        this.velocity = -20;
  }
 }
    //Check collison with Obstacles
    hits(obstacle) {
    return this. x < obstacle.x + obstacle.size && 
            this.x + this.size > obstacle.x &&
            this.y < obstacle.y + obstacle.size &&
            this.y + this.size > obstacle.y;
    }
}

 class Obstacle {
      constructor() {
        this.x = width; //setting the initial x position of the obstscle 
        this.y = height - 50; //setting the initial y position of the obstacle
        this.size = 50; //the size of the obstacles
        this.speed = 7; //the speed of the obstacles entering the canvas
        this.color = color(random(255), random(255), 
          random(255)); //setting random color for the obstacles

      }

      //Draw the obstacle
      show() {
      fill(this.color);
      rect(this.x, this.y, this.size, this.size);
  }
      //obstacles moving left
    update() { 
      this.x -= this.speed;

    }
  }

    //controls
    function keyPressed() {
      if(key === ' ') { //control for the spacebar
        player.jump(); //allows player to jump

      }
    }


    // resets the game
    function resetGame(){
      player = new Player();
      obstacles = [];
      score = 0;
      loop();
    }