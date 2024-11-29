// The text I chose to use is from the book "The Great Gatsby." It is my favorite book about love, so it was a perfect fit for the assessment.

let rm;

// function preload() {
//   result = loadStrings('');
// }

function setup() {
rm = RiTa.markov(2);

let data = document.getElementById("source").innerText;

rm.addText(data);

let lines = rm.generate(6);

// find the element to add to
let letter = select("#letter"); 

// add a salutation
letter.child(createP('My Dearest Friend,'));

// loop through the array of lines, adding each as a new p element
for (let l = 0; l < lines.length; l++){
	let paragraph = createP(lines[l]);
	letter.child(paragraph);
}

// add a closing
letter.child(createP('Sincerely,<br>Madeline'));
	
}
function mousePressed(){
	letter.remove();
	letter = createDiv();
	letter.id("letter");
	setup();
}
