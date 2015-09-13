function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(62, 37, 145);

	// set a fill color
	fill(140, 142, 185);

	// draw the ellipse
	ellipse(320, 390, 700, 200);
	// draw curtain
	fill(171, 26, 31);
	ellipse(0, 0, 180, 400);
	ellipse(640, 0, 180, 400);
	rect(-50, 210, 100, 140, 80, 80, 5, 5);
	rect(590, 210, 100, 140, 80, 80, 5, 5);
	fill(120, 30, 45);
	ellipse(80, 0, 180, 130);
	ellipse(320, 0, 320, 130);
	ellipse(560, 0, 180, 130);
	rect(-70, 195, 100, 20, 20, 20, 20, 20);
	rect(610, 195, 80, 20, 20, 20, 20, 20);
	// draw drape
	fill(0, 0, 0);
	triangle(185, 260, 165, 310, 225, 260);
	triangle(215, 260, 275, 310, 255, 260);
	// draw lower body
	fill(0, 0, 0);
	rect(190, 270, 20, 80);
	rect(229, 270, 20, 80);
	// draw shoes
	fill(255, 255, 255);
	rect(180, 320, 35, 30, 80, 80, 5, 5);
	rect(222, 320, 35, 30, 80, 80, 5, 5);
	fill(0, 0, 0);
	rect(180, 340, 35, 13);
	rect(222, 340, 35, 13);
	// draw stick
	fill(0, 0, 0);
	push();
	translate(115, 190);
	rotate(radians(-15));
	rect(0, 0, 10, 130);
	pop();
	fill(255, 255, 255);
	push();
	translate(115, 190);
	rotate(radians(-15));
	rect(0, 0, 10, 20, 5, 5, 0, 0);
	pop();
	push();
	translate(144, 300);
	rotate(radians(-15));
	rect(0, 0, 10, 20, 0, 0, 5, 5);
	pop();

	// draw upper body
	fill(251, 225, 198);
	ellipse(315, 240, 20, 20);
	ellipse(143, 265, 20, 20);
	fill(255, 255, 255);
	rect(185, 175, 70, 100, 80, 80, 5, 5);
	push();
	translate(190, 180);
	rotate(radians(35));
	rect(0, 0, 20, 95, 80, 80, 5, 5);
	pop();
	push();
	translate(235, 190);
	rotate(radians(-35));
	rect(0, 0, 20, 75, 80, 80, 5, 5);
	pop();
	rect(275, 230, 40, 20, 80, 5, 5, 5);
	// draw shirt
	fill(0, 0, 0);
	quad(185, 185, 220, 230, 215, 250, 185, 270);
	quad(255, 185, 220, 230, 225, 250, 255, 270);
	fill(171, 26, 31);
	triangle(200, 180, 200, 200, 220, 190);
	triangle(220, 190, 240, 200, 240, 180);
	// draw face
	fill(251, 225, 198);
	ellipse(220, 140, 95, 95);
	ellipse(170, 140, 20, 30);
	ellipse(270, 140, 20, 30);
	// draw hair
	fill(169, 124, 80);
	arc(220, 120, 90, 90, PI, TWO_PI);
	fill(251, 225, 198);
	triangle(220, 100, 210, 150, 230, 150);
	// draw hat
	fill(0, 0, 0);
	quad(359, 240, 439, 240, 459, 330, 339, 330);
	fill(171, 26, 31);
	ellipse(399, 270, 94, 20);
	quad(356, 240, 442, 240, 446, 270, 352, 270);
	fill(0, 0, 0);
	ellipse(400, 240, 150, 50);
	ellipse(399, 330, 120, 30);
	// innwe ellipse
	fill(random(255), random(255), random(255));
	ellipse(400, 233, 80, 20);
	// noLoop();





}
