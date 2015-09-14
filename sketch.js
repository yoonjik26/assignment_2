function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	var magicShow = random(1);
	// draw background
	// clear the background
	background(62, 37, 145);

	// set a fill color
	fill(140, 142, 185);

	// draw the ellipse
	ellipse(320, 390, 700, 200);
	// draw curtain
	fill(88, 30, 45);
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
	translate(144.5, 300);
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

	fill(random(255), random(255), random(255));
	ellipse(400, 233, 80, 20);
	// noLoop


	if (magicShow < 0.5) {
		// rabbit
	fill(251, 196, 221);
	ellipse(400, 210, 60, 60);
	ellipse(370, 235, 23, 23);
	ellipse(430, 235, 23, 23);
	var x = random(0, 10);
	ellipse(380, 170 + x, 20, 60);
	ellipse(420, 170 + x, 20, 60);
	fill(251, 119, 221);
	ellipse(380, 170 + x, 10, 30);
	ellipse(420, 170 + x, 10, 30);
	fill(255, 255, 255);
	ellipse(400, 220, 37, 25);
	fill(251, 119, 221);
	ellipse(400, 210, 10, 10);
	fill(0, 0, 0);
	ellipse(390, 200, 8, 8);
	ellipse(410, 200, 8, 8);

	fill(0, 0, 0);
	ellipse(195, 140, 40, 40);
	ellipse(245, 140, 40, 40);
	fill(255, 255, 255);
	ellipse(195, 140, 30, 30);
	ellipse(245, 140, 30, 30);
	fill(0, 0, 0);
	ellipse(200, 145, 10, 10);
	ellipse(250, 145, 10, 10);
	rect(210, 135, 17, 5);
	fill(209, 95, 111);
	ellipse(220, 172, 20, 20);


} else {
		// balloon
		var y = random(-5, 5);
	fill(87, 185, 181);
	ellipse(365 + y, 175, 60, 60);
	triangle(367, 205, 372, 215, 362, 215);
	fill(236, 111, 197);
	ellipse(450 + y, 155, 50, 50);
	triangle(450, 180, 445, 190, 455, 190);
	fill(253, 197, 30);
	ellipse(410 + y, 90, 55, 55);
	triangle(410, 113, 407, 123, 413, 123);

	fill(209, 95, 111);
	ellipse(220, 165, 30, 30);
	fill(251, 225, 198);
	rect(200, 145, 40, 20);
	fill(0, 0, 0);
	ellipse(195, 140, 40, 40);
	ellipse(245, 140, 40, 40);
	fill(255, 255, 255);
	ellipse(195, 140, 30, 30);
	ellipse(245, 140, 30, 30);
	fill(0, 0, 0);
	ellipse(200, 135, 10, 10);
	ellipse(250, 135, 10, 10);
	rect(210, 135, 17, 5);

	// dove
	var doveX = random(400, 640);
	fill(255, 255, 255);
	ellipse(doveX, 100, 30, 30);
	fill(0, 0, 0);
	ellipse(doveX - 8, 96, 7, 7);
	fill(255, 255, 255);
	triangle(doveX, 100, doveX + 30, 120, doveX + 65, 60);
	triangle(doveX + 37, 100, doveX + 50, 130, doveX + 70, 60);
	triangle(doveX + 35, 120, doveX + 55, 150, doveX + 65, 130);
	pop();
	translate(doveX + 30, 110);
	rotate(radians(45));
	ellipse(0, 0, 50, 30);
	push();

}



}
