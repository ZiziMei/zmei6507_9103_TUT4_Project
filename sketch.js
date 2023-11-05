var angleOff = 10
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  angleOff -= 0.2
  if (angleOff < 10) angleOff = 10
  background(30);
  rotateX(55);
  
  //The Grand Canal
  translate(0, 0, -40);
  for (var i = 0; i < 100; i += 1) {
    beginShape();
    for (var j = 0; j < 360; j += 3) {
      var rad = i * 8;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var d = dist(0, 0, x, y);
      var interpColor;
      if (d <= 98) {
        interpColor = lerpColor(color(196, 99, 85), color(189, 120, 51), map(d, 0, 98, 0, 1));
      } else {
        interpColor = lerpColor(color(209, 134, 61), color(88, 142, 189), map(d, 98.1, 200, 0, 1));
      }
      stroke(interpColor);
      strokeWeight(2)
      vertex(x, y, map(noise(x * 0.01, y * 0.01), 0, 1, -10, 100));
      noFill();
    }
    endShape(CLOSE);
  }
  
  //The sky
  translate(0, 0, 100);
  rotateX(7);
  for (var i = 0; i < 100; i++) {
    beginShape();
    for (var j = 0; j < 360; j += angleOff) {
      var rad = i * 8;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var d = dist(0, 0, x, y);
      var interpColor;
      if (d <= 66.66) {
        interpColor = lerpColor(color(196, 99, 85), color(220, 147, 47), map(d, 0, 66.66, 0, 1));
      } else {
        interpColor = lerpColor(color(220, 147, 47), color(69, 106, 162), map(d, 66.67, 200, 0, 1));
      }
      stroke(interpColor);
      strokeWeight(2)
      vertex(x, y);
      noFill();
    }
    endShape(CLOSE);
  }
}

//Window resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}