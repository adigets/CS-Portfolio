var p = [];

function setup() {
  createCanvas(500, 500);
	for (var a = 0; a < 1; a++) {
		p[a] = new JumboParticle(250.0, 250.0, 0.7, (Math.random() * 10), 225);
	}
	for (var b = 1; b < 2; b++) {
		p[b] = new OddballParticle(250.0, 250.0, 1.4, (Math.random() * 10), 250);
	}
	for (var i = 2; i < 300; i++) {
		p[i] = new NormalParticle(250.0, 250.0, (Math.random() * 3), (Math.random() * 10), 175);
	}
}

function draw() {
  stars()
	fill(0, 15);
	rect(0, 0, width, height);
	for (var i = 0; i < 300; i++) {
		p[i].show();
		p[i].move();
	}
}

function stars() {
	fill(250);
	ellipse(30, 30, 5, 5);
	ellipse(420, 60, 8, 8);
	ellipse(200, 360, 5, 5);
	ellipse(200, 120, 5, 5);
	ellipse(360, 400, 5, 5);
	ellipse(80, 260, 8, 8);
	ellipse(340, 280, 8, 8);
	ellipse(20, 480, 5, 5);
	ellipse(260, 260, 5, 5);
	ellipse(480, 140, 5, 5);
	ellipse(120, 420, 5, 5);
	ellipse(300, 20, 5, 5);
	ellipse(100, 50, 8, 8);
	ellipse(390, 180, 5, 5);
	ellipse(270, 460, 8, 8);
	ellipse(10, 130, 5, 5);
	ellipse(30, 350, 5, 5);
	ellipse(470, 290, 5, 5);
	ellipse(380, 100, 5, 5);
}

class NormalParticle {
	
	constructor(ex, why, s, a, col) {
		this.x = ex;
		this.y = why;
		this.speed = s;
		this.angle = a;
		this.c = col;
	}
	
	move() {
		this.x += cos(this.angle) * this.speed;
		this.y += sin(this.angle) * this.speed;
		this.angle += .02;
	}
	
	show() {
		fill(80, 33, 133);
		ellipse(this.x, this.y, 11, 11);
	}
	
}

class OddballParticle extends NormalParticle {
	
	move() {
		this.x += cos(this.angle) * this.speed;
		this.y += sin(this.angle) * this.speed;
		this.angle += .03;
	}
	
	show() {
		fill(234, 217, 252);
		rect(this.x, this.y, 16, 16);
	}
	
}

class JumboParticle extends NormalParticle {
	
	show() {
		fill(164, 109, 222);
		ellipse(this.x, this.y, 30, 30);
	}
	
}