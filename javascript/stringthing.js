function setup() {
  createCanvas(480, 300);
	background(201, 240, 235);
  
}

function draw() {	
	var cs = "Have fun with Comp Sci!";
  textSize(36);
	fill(0, 0, 0);
	text("Have fun with Comp Sci!", 10, 40);
	fill(54, 57, 59);
/*to show that text can be writting differnt ways, either with strings or just the text function */
	text(cs, 10, 70);
	fill(89, 95, 99);
	text(cs, 10, 100);
	fill(125, 133, 138);
	text(cs, 10, 130);
	fill(134, 139, 143);
	text(cs, 10, 160);
	fill(191, 197, 201);
	text(cs, 10, 190);
	fill(206, 211, 214);
	text(cs, 10, 220);
	fill(255, 255, 255);
	text(cs, 10, 250);
	var name = "Tanvi Adige";
	text(name, 285, 290);
}