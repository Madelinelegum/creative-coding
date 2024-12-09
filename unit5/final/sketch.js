const blockHeight = 30;
const blockWidth = 300;

let currentBlock;
let blockD = 1;
let blockSpeed = 5;

function setup() {
  createCanvas(1200, 1200);

  startnewGame();
}

function draw() {
  background(220);
  drawBlocks();
}

function startnewGame() {
  currentBlock = createVector(0, height-blockHeight, blockWidth)

  blockD = 1;
  blockSpeed = 5;
}

function updateBlock() {
  currentBlock.x += blockD * blockSpeed;

  if(currentBlock.x < 0) {
    blockD = 1;
  }

  if(cuurentBlock.x + block)


}


function drawBlocks(){
  rect(currentBlock.x, currentBlock.y, currentBlock.z, blockHeight);
}