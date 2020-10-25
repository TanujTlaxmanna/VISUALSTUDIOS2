var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);

speed  = random(223,321);
weight = random(30,152);
thickness=random(22,83);

car=createSprite(50,200,50,50);
car.velocityX = speed;
car.shapeColor="white";

wall=createSprite(1200,200,thickness,height/2);

}

function draw() {
  background("black");  
 

if(wall.x-car.x<(car.width+wall.width)/2){

car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation<80){
car.shapeColor="green"
}
if(deformation>80 && deformation<180){
car.shapeColor="yellow";
}
if(deformation<100)
{
car.shapeColor="red";
}

}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
var damage=0.5 * width * speed * speed/(thickness*thickness*thickness)

if(damage>10){
 wall.shapeColor="red";
}
if(damage<10){
wall.shapeColor="green";
}

}


hasCollided();




drawSprites();
}

function hasCollided(bullet,wall){

bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x
if (bulletRightEdge>=wallLeftEdge){
  return true
}
  return false;
}









