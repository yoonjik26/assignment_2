function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
	noLoop();
}

function draw() {
	var magicShow = random(1);
	// clear the background
	background(random(62), random(37), random(145));
	// draw the stage
	fill(random(140), random(142), random(185));
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
	// draw the magician
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

if (magicShow < 0.2 && magicShow > 0) {
	// draw hat
	fill(0, 0, 0);
	quad(359, 240, 439, 240, 459, 330, 339, 330);
	fill(171, 26, 31);
	ellipse(399, 270, 94, 20);
	quad(356, 240, 442, 240, 446, 270, 352, 270);
	fill(0, 0, 0);
	ellipse(400, 240, 150, 50);
	ellipse(399, 330, 120, 30);
	// inside of the hat
	fill(random(255), random(255), random(255));
	ellipse(400, 233, 80, 20);
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
	// draw face
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
	// card
	fill(random(255), random(255), random(255));
	var cardX = random(400, 500);
	rect(cardX + 40, 100, 40, 50);
	pop();
	fill(random(255), random(255), random(255));
	translate(cardX + 60, 200);
	rotate(radians(45));
	rect(0, 0, 40, 50);
	push();
	}
if (magicShow > 0.2 && magicShow < 0.4) {
	// draw hat
	fill(0, 0, 0);
	quad(359, 240, 439, 240, 459, 330, 339, 330);
	fill(171, 26, 31);
	ellipse(399, 270, 94, 20);
	quad(356, 240, 442, 240, 446, 270, 352, 270);
	fill(0, 0, 0);
	ellipse(400, 240, 150, 50);
	ellipse(399, 330, 120, 30);
	// inside of the hat
	fill(random(255), random(255), random(255));
	ellipse(400, 233, 80, 20);
		// balloon
		var y = random(-5, 5);
	fill(random(255), random(255), random(255));
	ellipse(365 + y, 175, 60, 60);
	triangle(367, 205, 372, 215, 362, 215);
	fill(random(255), random(255), random(255));
	ellipse(450 + y, 155, 50, 50);
	triangle(450, 180, 445, 190, 455, 190);
	fill(random(255), random(255), random(255));
	ellipse(410 + y, 90, 55, 55);
	triangle(410, 113, 407, 123, 413, 123);
	// draw face
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
if (magicShow > 0.4 && magicShow < 0.6) {
	// draw magician face
	fill(0, 0, 0);
	ellipse(195, 140, 40, 40);
	ellipse(245, 140, 40, 40);
	fill(255, 255, 255);
	ellipse(195, 140, 30, 30);
	ellipse(245, 140, 30, 30);
	fill(236, 86,164);
	push();
	translate(200, 140);
	rotate(radians(35));
	ellipse(0, 0, 10, 20);
	pop();
	push();
	translate(190, 140);
	rotate(radians(-35));
	ellipse(0, 0, 10, 20);
	pop();
	push();
	translate(240, 140);
	rotate(radians(-35));
	ellipse(0, 0, 10, 20);
	pop();
	push();
	translate(250, 140);
	rotate(radians(35));
	ellipse(0, 0, 10, 20);
	pop();
	fill(0, 0, 0);
	rect(210, 135, 17, 5);
	fill(209, 95, 111);
	ellipse(220, 172, 20, 20);
	// draw the lady
	// draw upper body
	fill(251, 225, 198);
	ellipse(485, 255, 20, 20);
	ellipse(342, 202, 20, 20);
	push();
	translate(351, 201);
	rotate(radians(65));
	rect(0, 0, 47, 15, 80, 5, 5, 5);
	pop();
	push();
	translate(395, 180);
	rotate(radians(35));
	rect(0, 0, 15, 75, 80, 80, 5, 5);
	pop();
	push();
	translate(430, 190);
	rotate(radians(-35));
	rect(0, 0, 15, 80, 80, 80, 5, 5);
	pop();
	// draw lower body
	fill(251, 225, 198);
	rect(392, 270, 15, 80);
	rect(430, 270, 15, 80);
	// draw dress
	fill(171, 26, 31);
	ellipse(420, 220, 60, 100);
	triangle(370, 280, 420, 200, 470, 280);
	// draw shoes
	fill(171, 26, 31);
	rect(380, 320, 35, 30, 80, 80, 5, 5);
	rect(422, 320, 35, 30, 80, 80, 5, 5);
	fill(88, 30, 45);
	rect(380, 340, 35, 13);
	rect(422, 340, 35, 13);
	// draw hair
	fill(251, 202, 64);
	rect(375, 120, 20, 100);
	rect(445, 120, 20, 100);
	// draw face
	fill(251, 225, 198);
	ellipse(420, 140, 85, 85);
	ellipse(375, 140, 15, 20);
	ellipse(465, 140, 15, 20);
	fill(209, 95, 111);
	ellipse(420, 165, 30, 30);
	fill(251, 225, 198);
	rect(400, 150, 40, 15);
	fill(255, 255, 255);
	ellipse(400, 140, 30, 30);
	ellipse(440, 140, 30, 30);
	fill(0, 0, 0);
	ellipse(400, 140, 10, 10);
	ellipse(440, 140, 10, 10);
	fill(251, 202, 64);
	arc(420, 120, 90, 90, PI, TWO_PI);
	fill(251, 225, 198);
	triangle(435, 100, 430, 120, 440, 120);
	}
if (magicShow > 0.6 && magicShow < 0.8) {
	// draw flower
	stroke(0, 166, 81);
	strokeWeight(4);
	line(430, 180, 430, 100);
	strokeWeight(20);
	line(410, 180, 390, 150);
	line(450, 180, 470, 150);
	stroke(215, 63, 64);
	strokeWeight(12);
	line(410, 115, 450, 75);
	line(450, 115, 410, 75);
	line(430, 125, 430, 65);
	line(400, 95, 460, 95);
	noStroke();
	fill(255, 255, 255);
	ellipse(430, 95, 20, 20);
	// draw vase
	noStroke();
	fill(185, 139, 22);
	ellipse(430, 250, 150, 50);
	rect(380, 240, 10, 100, 5, 5);
	rect(470, 240, 10, 100, 5, 5);
	fill(139, 76, 41);
	quad(399, 250, 459, 250, 479, 170, 379, 170);
	ellipse(429, 250, 60, 30);
	// draw face
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
	}
if (magicShow > 0.8 && magicShow < 1) {
	// draw puff
	fill(102, 45, 145);
	rect(387, 240, 95, 85);
	fill(102, 90, 145);
	quad(386, 240, 482, 240, 496, 280, 372, 280)
	fill(255, 255, 255);
	ellipse(410, 150, 50, 50);
	ellipse(470, 150, 50, 50);
	ellipse(390, 130, 50, 50);
	ellipse(440, 120, 100, 100);
	ellipse(490, 130, 50, 50);
	triangle(425, 150, 440, 220, 455, 150);
	// draw face
	fill(0, 0, 0);
	ellipse(195, 140, 40, 40);
	ellipse(245, 140, 40, 40);
	fill(255, 255, 255);
	ellipse(195, 140, 30, 30);
	ellipse(245, 140, 30, 30);
	fill(0, 0, 0);
	rect(210, 135, 17, 5);
	stroke(0, 0, 0);
	strokeWeight(5);
	line(185, 145, 205, 135);
	line(205, 145, 185, 135);
	line(255, 145, 235, 135);
	line(235, 145, 255, 135);
	stroke(209, 95, 111);
	line(200, 172, 240, 172);
	}
}
