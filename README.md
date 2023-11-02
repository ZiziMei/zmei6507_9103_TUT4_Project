# zmei6507_9103_TUT4_Project
# 9103 MajorProject

**26/10/2023 Group Meeting**
**The coding proposed by Zizi Mei was not adopted**

**sketch.js**
let img;

function preload() {
  img = loadImage('assets/Claude_Monet,_Saint-Georges_majeur_au_crépuscule.jpg');
}
function setup() {
  createCanvas(600, 600);

  // Resize the image so it fits on the screen
  img.resize(width, height);

  noStroke();
}

function draw() {

  // Get the color of a random pixel.
  img.loadPixels();
  
  const pixelX = random(width);
  const pixelY = random(height);
  const pixelColor = img.get(pixelX, pixelY);

  // Paint that pixel with a circle.
  fill(pixelColor);
  ellipse(pixelX, pixelY, 20, 20);
}

**ZiziMei Perlin Noise**
**sketch.js**
var points = [];
var mult = 0.005;
var allimages=[];
var pic;
var pos = 0;
var bg;
var imgur;


function preload(){
  allimages=['images/1.jpg'];
  // var pos = floor(random(allimages.length));

  pic = loadImage(allimages[pos]);
 // bg = loadImage('images/bgg.png');

}

function setup() {
  var ww= windowWidth;
  createCanvas(windowWidth,windowHeight);
  background(255,100);
  imageMode(CORNER);
  angleMode(DEGREES);
  noiseDetail(10);
  inti();
  push();
}




