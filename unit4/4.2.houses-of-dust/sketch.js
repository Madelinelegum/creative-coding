//My Poem was inspired by Alison Knowles's "House of Dust." It is about urban dynamics, highlighting the diversity and complexity of city life. Each term I have chosen represents a new aspect of these city environments.

let poem = '';

// Adding the different elements
let grammar = tracery.createGrammar({
"origin": ["A CITY OF #material#\n#place#\nUSING #light_source#\nINHABITED BY #inhabitants#"], 
"material": ["GLASS", "ASPHALT", "BRICK", "STEEL", "PLASTIC", "STONE", "COPPER", "PORCELAIN", "FIBERGLASS", "ALUMINUM", "CERAMIC"],
"place": ["IN A HOUSE", " IN A CONDO", "IN AN APARTMENT", "IN A FIRE STATION", "IN A HOSPITAL", "IN A SCHOOL", "IN A STORE", "IN A SUPERMARKET", "IN A RESTAURANT", "IN A TRAIN STATION", "IN A PARK"],
"light_source": ["STREET LIGHTS", "SPOTLIGHTS", "CAR LIGHTS", "NEON SIGNS", "TRAFFIC LIGHTS", "FLOODLIGHTS", "STREET LIGHTS", "PARK LIGHTS", "FESTIVE LIGHTS", "EMERGENCY LIGHTS", "BILLBOARDS"],
"inhabitants": ["STUDENTS", "BIRDS", "FAMILIES", "TOURISTS", "CHILDREN", "ARTISTS", "ANIMALS"],
});

function setup() {
  createCanvas(800, 800); // canvas size
  noLoop(); // disabling draw loop
  frameRate(0.5); // frame rate
}

function draw() {
  background(220); // background color 
  textFont("Courier New"); // font style
  textSize(35); //size of text
  let x = 10; // initial x positon for the text 
  let y = 50; // initial y positon for the text 

  for (let i = 0; i < 5; i++) { // loop for multiple quatrains 
    let lines = grammar.flatten("#origin#").split("\n"); // splitting the grammar - refernce for split https://www.w3schools.com/jsref/jsref_split.asp
    lines.forEach((line, index) => {
      text(line, x + index * 70, y + index * 60, width - 40, height - 40); // creating the straggered line position inspired by the orginial poem
    });
    y += 260; // the y position for the next quatrain

  }
}