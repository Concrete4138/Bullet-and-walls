var wall,thickness
var bullet,speed,weight
var damage

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,30);
  speed=random(223,321);
  weight=random(30,50);
  weight=random(400,1500);
  damage=((0.5*weight*speed*speed)/(thickness*thickness*thickness))
}

function draw() {
  background(0,0,0);
  bullet.velocityX=speed;
  
  if (damage<=10 && bullet.isTouching(wall)) {
    bullet.shapecolour("green");
  }
  else {
    bullet.shapecolour("red");
  }

  if (bullet.isTouching(wall)) {
    bullet.velocityX=0;
  }
  
  bullet.velocityX=speed;

  drawSprites();
}