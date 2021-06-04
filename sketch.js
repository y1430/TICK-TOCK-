function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  // Calculating time 
  hr=hour();
  mn=minute();
  sc=second();

  //strokeWeight(8);
  //stroke(255);
  //noFill();
 // ellipse(200,200,300,300);

  strokeWeight(8);
  stroke(255,100,150);
  noFill();

  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  stroke(150,100,255);
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  stroke(150,255,100);
  hrAngle = map(hr%12,0,12,-90,360);
  arc(0,0,260,260,0,hrAngle);


  push();
  rotate(scAngle);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(150,100,255);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(150,255,100);
  line(0,0,50,0);
  pop();

  stroke(255);
  point(0,0);

 // fill(255);
 // noStroke();
  //text(hr + ':' + mn + ':' + sc, 10, 200 );
  //drawSprites();
}