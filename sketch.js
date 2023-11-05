let noiseOff = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(30);
  rotateX(70);//The perspective
  translate(0, 0, -40);
  canal();
  sky();
}

//Window resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//The sky
function sky() {
  translate(0, 0, 300);
  rotateX(7);

  for (var i = 0; i < 100; i++) {
    beginShape();
    for (var j = 0; j < 360; j += 10) {
      var rad = i * 8;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var d = dist(0, 0, x, y);
      var interpColor;
      //The color of sky
      if (d <= 200) {
        interpColor = lerpColor(
          color(196, 99, 85),
          color(189, 120, 51),
          map(d, 0, 200, 0, 1)
        );
      } else {
        interpColor = lerpColor(
          color(209, 134, 61),
          color(88, 142, 189),
          map(d, 200, 500, 0, 1)
        );
      }
      stroke(interpColor);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}

//The Grand Canal
function canal() {
  for (var i = 0; i < 100; i += 1) {
    beginShape();
    for (var j = 0; j < 360; j += 3) {
      var rad = i * 8;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var d = dist(0, 0, x, y);
      var interpColor;
      var interpColor;
      if (d <= 200) {
        interpColor = lerpColor(
          color(196, 99, 85),
          color(189, 120, 51),
          map(d, 0, 200, 0, 1)
        );
      } else {
        interpColor = lerpColor(
          color(209, 134, 61),
          color(88, 142, 189),
          map(d, 200, 500, 0, 1)
        );
      }
      stroke(interpColor);
      if (d > 100) {
        let z = map(noise(x * 0.01, y * 0.01, noiseOff), 0, 1, -10, 100);
        vertex(x, y, z);
      }
    }
    endShape(CLOSE);
  }
  noiseOff += 0.045;
}


