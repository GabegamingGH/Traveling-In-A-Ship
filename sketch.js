var sea, seaImg;
var ship, shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
 
  sea = createSprite(200,200,400,400)
  sea.addImage(seaImg)
  sea.scale = 0.5
  sea.velocityX = -4

  ship = createSprite(50,230)
  ship.addAnimation("moving",shipImg1)
  ship.scale = 0.15
}

function draw() {
  background("blue");

  if(sea.x < 0){
    sea.x = 200;
  }

 drawSprites()
}