var points = [];
var mult = 0.005;
var allimages=[];
var pic;
var pos = 0;
var bg;
var imgur;


function preload(){
  allimages=['assets/Claude_Monet,_Saint-Georges_majeur_au_crépuscule(1).jpg'];
  pic = loadImage(allimages[pos]);
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

function inti(){

  var rowPoints = 120;  //Amout
  var distPoints = width/rowPoints;
  for(var x=0; x<width;x+=distPoints){
    for(var y=0; y<height;y+=distPoints){
        var p = createVector(x+random(10,30),y+random(5,30));
        points.push(p);
        }
    
  }

}

function draw() {

   //background(255,10); //Background or
   for(var i=0; i<points.length;i++){
     
     var angle = map(noise(points[i].x*mult,points[i].y*mult), 0,1,0,20); //Angle
     points[i].add(createVector(cos(angle),sin(angle)));

     circle(points[i].x,points[i].y,2);
     let color = pic.get(points[i].x,points[i].y);
     fill(color);
     noStroke();
   }

  console.log(pos);

}

