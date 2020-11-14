class Die {

	x;
	y;
	random;
	s = 0;

	 constructor (x, y) {
		this.x = x;
		this.y = y;
	}
	
	roll() {
		random = (int)((Math.random() * 6) + 1);
		this.s += random;
	}
	
	show (x, y) {
		this.x = x;
		this.y = y;
		fill(94, 99, 105);
		rect(x, y, 50, 50);
		fill(0);
		this.roll();
		if (random == 1) {
			fill(236, 228, 237);
			ellipse(x + 25, y + 25, 10, 10);
		}
		else if (random == 2) {
			fill(236, 228, 237);
			ellipse(x + 7, y + 7, 10, 10);
			ellipse(x + 43, y + 43, 10, 10);
		}
		else if (random == 3) {
			fill(236, 228, 237);
			ellipse(x + 7, y + 7, 10, 10);
			ellipse(x + 25, y + 25, 10, 10);
			ellipse(x + 43, y + 43, 10, 10);
		}
		else if (random == 4) {
			fill(236, 228, 237);
			ellipse(x + 7, y + 7, 10, 10);
			ellipse(x + 43, y + 7, 10, 10);
			ellipse(x + 7, y + 43, 10, 10);
			ellipse(x + 43, y + 43, 10, 10);
		}
		else if (random == 5) {
			fill(236, 228, 237);
			ellipse(x + 7, y + 7, 10, 10);
			ellipse(x + 43, y + 7, 10, 10);
			ellipse(x + 7, y + 43, 10, 10);
			ellipse(x + 43, y + 43, 10, 10);
			ellipse(x + 25, y + 25, 10, 10);
		}
		else if (random == 6) {
			fill(236, 228, 237);
			ellipse(x + 7, y + 7, 10, 10);
			ellipse(x + 7, y + 25, 10, 10);
			ellipse(x + 7, y + 43, 10, 10);
			ellipse(x + 43, y + 7, 10, 10);
			ellipse(x + 43, y + 25, 10, 10);
			ellipse(x + 43, y + 43, 10, 10);
		}
	}
	
	getScore() {
		return this.s;
	}
		
}
const die = new Die(50, 50);
var score;

function setup() {
  createCanvas(500, 430);
	background(215, 245, 244);
	noLoop();
	//die = new Die(50,50);
}

function draw() {
	background(215, 245, 244);
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 5; j++) {
			die.show(j * 100 + 20, i * 100 + 50);
		}
		this.score = die.getScore();
	}
	textSize(32);
	fill(94, 99, 105);
	text("Your score: ", 125, 385);
	text("", 300, 385);
	text(this.score, 300, 385);
}

function mousePressed() {
	redraw();
}