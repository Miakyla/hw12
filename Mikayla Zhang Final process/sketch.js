var ramLoc =100;
var ramLoc2 =100;

function setup() {
  createCanvas(400, 500);
}
 
function draw() {
  background(230);
}

function draw() {
drawTarget();

  
  
}

function drawTarget(){
  circle(ramLoc, ramLoc2, 40);
  
  fill(255,255,255);
  noStroke();
  circle(ramLoc, ramLoc2, 30);
  
  fill(0,0,0);
  noStroke();
  circle(ramLoc, ramLoc2, 20);
  
  fill(255,0,0);
  noStroke();
  circle(ramLoc, ramLoc2, 10);
}

function mousePressed() {
  if(mouseX>ramLoc-5 && mouseX<ramLoc+5 && mouseY>ramLoc2-5 && mouseY<ramLoc+5){
  background(255);
  fill(0,0,0);
  noStroke();
  ramLoc = random(10,200);
  ramLoc2 = random(10,200);
}
  print(ramLoc);
}

