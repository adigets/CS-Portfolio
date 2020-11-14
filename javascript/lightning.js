var startX = 40;
var startY = 60;
var endX = 0;
var endY = 100;

var startX2 = 200;
var startY2 = 60;
var endX2 = 141;
var endY2 = 100;

var startX3 = 360;
var startY3 = 60;
var endX3 = 281;
var endY3 = 100;

function setup() {
  createCanvas(415, 600);
	strokeWeight(3);
	background(45, 52, 61);
}
function draw() {
	stroke(215, 219, 222);
	fill(215, 219, 222);
	/*cloud one */
	ellipse(35, 45, 50, 50);
	ellipse(25, 55, 50, 50);
	ellipse(60, 40, 50, 50);
	ellipse(45, 60, 50, 50);
	ellipse(70, 55, 50, 50);
	ellipse(85, 40, 50, 50);
	ellipse(60, 50, 50, 50);
	ellipse(70, 70, 50, 50);
	ellipse(100, 60, 50, 50);
	/*cloud two */
	ellipse(140, 60, 70, 70);
	ellipse(170, 80, 70, 70);
	ellipse(200, 90, 70, 70);
	ellipse(185, 55, 70, 70);
	ellipse(220, 70, 70, 70);
	ellipse(240, 50, 70, 70);
	ellipse(260, 80, 70, 70);
	ellipse(280, 60, 70, 70);
	ellipse(300, 85, 70, 70);
	ellipse(330, 50, 70, 70);
	ellipse(360, 75, 70, 70);
	ellipse(380, 60, 70, 70);
	stroke(203, 209, 90);
	
	while (endX < 140 && endY < 650) {
		endX = startX + (Math.random() * 10);
		endY = startY + (Math.random() * 100);
		line(startX, startY, endX, endY);
		startX = endX;
		startY = endY;
	}
	
	while (endX2 < 280 && endY2 < 650) {
		endX2 = startX2 + (Math.random() * 10);
		endY2 = startY2 + (Math.random() * 100);
		line(startX2, startY2, endX2, endY2);
		startX2 = endX2;
		startY2 = endY2;
	}

	while (endX3 < 415 && endY3 < 650) {
		endX3 = startX3 + (Math.random() * 10);
		endY3 = startY3 + (Math.random() * 100);
		line(startX3, startY3, endX3, endY3);
		startX3 = endX3;
		startY3 = endY3;
	}

}
	
function mousePressed() {
	background(45, 52, 61);

	startX = 40;
	startY = 60;
	endX = 0;
	endY = 100;
	
	startX2 = 200;
	startY2 = 60;
	endX2 = 141;
	endY2 = 100;

	startX3 = 360;
	startY3 = 60;
	endX3 = 281;
	endY3 = 100;
}
