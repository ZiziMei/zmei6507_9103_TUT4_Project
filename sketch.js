let noiseOff = 0;//Horizontal fluctuations of the Grand Canal
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(30);
  rotateX(75); //The perspective
  translate(0, 0, -40);
  church();
  canal();
  sky();
}

//Window Resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function sky() {
  translate(0, 0, 300);
  rotateX(7);

  for (var i = 0; i < 100; i++) {
    beginShape();
    for (var j = 0; j < 360; j += 10) {
      var rad = i * 8;//Calculate the radius according to the value of i
      var x = rad * cos(j);
      var y = rad * sin(j);
      var d = dist(0, 0, x, y);
      var interpColor;
      if (d <= 200) {
        //The gradient of color, dark red to orange
        interpColor = lerpColor(
          color(196, 99, 85),
          color(189, 120, 51),
          map(d, 0, 200, 0, 1)
        );
      } else {
        //The gradient of color, orange to blue
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
        //The gradient of color, dark red to orange
        interpColor = lerpColor(
          color(196, 99, 85),
          color(189, 120, 51),
          map(d, 0, 200, 0, 1)
        );
      } else {
        //The gradient of color, orange to blue
        interpColor = lerpColor(
          color(209, 134, 61),
          color(88, 142, 189),
          map(d, 200, 500, 0, 1)
        );
      }
      stroke(interpColor);
      if (d > 100) {
        //Save some space for the church
        let z = map(noise(x * 0.01, y * 0.01, noiseOff), 0, 1, -10, 100);//Use noise to deal with the horizontal undulations of the Grand Canal
        vertex(x, y, z);
      }
    }
    endShape(CLOSE);
  }
  noiseOff += 0.045;//The frequency of the fluctuation of the Grand Canal
}

function church() {
  //Circle 1 of the church
  for (var i = 0; i < 10; i += 0.5) {
    beginShape();
    for (var j = 0; j < 360; j += 3) {
      var rad = i * 8;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var d = dist(0, 0, x, y);
      var interpColor;
      //The gradient of color, dark red to orange
      interpColor = lerpColor(
        color(108, 48, 83),
        color(214, 141, 19),
        map(d, 0, 80, 0, 0.5)
      );
      stroke(interpColor);
      let z = map(i, 0, 10, 300, 0);
      vertex(x, y, z);
    }
    endShape(CLOSE);
    
    //Circle 2 of the church
    beginShape();
    for (var j = 0; j < 360; j += 3) {
      var rad = i * 7;
      var x = rad * cos(j);
      var y = rad * sin(j);
      var d = dist(0, 0, x, y);
      var interpColor;
      //The gradient of color, dark red to orange
      interpColor = lerpColor(
        color(108, 48, 83),
        color(214, 141, 19),
        map(d, 0, 80, 0, 0.5)
      );
      stroke(interpColor);
      let z = map(i, 0, 10, 300, 0);//The value change of i and the height change of the church
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}


