let poem = '';

let grammar = tracery.createGrammar({
"origin": ["A HOUSE OF #material#"],
"material": ["SAND", "DUST", "LEAVES", "PAPER", "TIN", "ROOTS", "BRICK", "BROKEN DISHES", "WOOD", "STRAW", "WEEDS"],

});

function setup() {
  createCanvas(800, 800);
  frameRate(1);
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("Impact");
  textSize(50);
  text(poem,70,200);

}