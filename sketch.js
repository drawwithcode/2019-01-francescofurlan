function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   background(0,0,255);
   angleMode(DEGREES);

frameRate(42);

}

function draw() {
  translate(width/2,height/2);
  strokeWeight(3.5);


  stroke(lerpColor(color("#0000FF"),color("white"),frameCount/120));
  noFill();
  line(cos(frameCount*30)*250,sin(frameCount*30)*250,cos(frameCount*30)*1000,sin(frameCount*30)*1000);

  stroke(lerpColor(color("#0000FF"),color("white"),frameCount/160));
  noFill();
  line(cos(frameCount*15)*250,sin(frameCount*15)*250,cos(frameCount*15)*1000,sin(frameCount*15)*1000);

  stroke(lerpColor(color("#0000FF"),color("white"),frameCount/200));
  noFill();
  line(cos(frameCount*7.5)*250,sin(frameCount*7.5)*250,cos(frameCount*7.5)*1000,sin(frameCount*7.5)*1000);

  stroke(lerpColor(color("#0000FF"),color("white"),frameCount/240));
  noFill();
  line(cos(frameCount*3.75)*250,sin(frameCount*3.75)*250,cos(frameCount*3.75)*1000,sin(frameCount*3.75)*1000);



  stroke(lerpColor(color("yellow"),color("tomato"),frameCount/240));
  noFill();
  line(0,200,sin(frameCount*3)*200,cos(frameCount*3)*200);

  stroke(lerpColor(color("#7957FF"),color("#00FFFF"),frameCount/240));
  noFill();
  line(0,-200,sin(frameCount*3)*200,cos(frameCount*3)*200);

if (frameCount == 240) {
  noLoop()
}


}
