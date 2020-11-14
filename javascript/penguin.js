
function setup() {
	var penguin = createCanvas(500, 460);
  penguin.parent("penguincontainer");
	background(235,235,235);
}

function draw() {
	fill(254, 255, 235);
	ellipse(250,250,125,225);
	stroke(0);
	fill(0,0,0);
	arc(225, 350,30,30, PI / 4.25, 5 * PI / 4.1);
	arc(275, 350,30,30, 7 * PI / 3.9, 11 * PI / 3.95);
	fill(0,0,0);
	rotate(PI / 8);
	ellipse(265, 130, 25, 120);
	rotate(-PI / 4);
	ellipse(197, 323, 25, 120);
	ellipse(180, 220, 70, 70);
	fill(255,255,255);
	ellipse(170, 210, 15, 15);
	ellipse(195, 220, 15, 15);
	fill(0,0,0);
	ellipse(170,210,8,8);
	ellipse(195,220,8,8);
	fill(255,255,255);
	ellipse(172,208,5,5);
	ellipse(197,218,5,5);
	fill(209, 155, 61);
	triangle(178, 223, 172, 238, 195, 238);
}
