var b = [];

function setup() {
  createCanvas(500, 500);
	for (var i = 0; i < 250; i++) {
		b[i] = new Bacteria(width/2, height/2, (int)(Math.random() * 500));
	}
}

function draw() {
	background(214, 201, 212);
	for (var j = 0; j < b.length; j++) {
		b[j].move();
		b[j].show();
	}
}

class Bacteria {
	
	constructor(xpos, ypos, c) {
		this.x = xpos;
		this.y = ypos;
		this.co = c;
	}
	
	move() {
		if ((Math.abs(this.x - mouseX) >= 0 && this.x + mouseX > 0) && (this.x <= mouseX)) {
			this.x = this.x + ((int)(Math.random() * 24) - 2);
		}
		if (this.x > mouseX) {
			this.x = this.x - ((int)(Math.random() * 24));
		}
		if ((Math.abs(this.y - mouseY) >= 0 && this.y + mouseY > 0) && (this.y <= mouseY)) {
			this.y = this.y + ((int)(Math.random() * 24) - 2);
		}
		if (this.y > mouseY) {
			this.y = this.y - ((int)(Math.random() * 24));
		}
	  else {
			this.x = this.x + (int)(Math.random());
			this.y = this.y - (int)(Math.random());
		}
	}
	
	show () {
		fill(this.co);
		ellipse(this.x, this.y, 10, 10);
	}
}