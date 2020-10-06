var speed,wall,thickness;
var bullet,weight;



function setup() {
  createCanvas(800,400);
  
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,hieght/2)
  speed=random(223,331);
  weight=random(30,52);
  thickness=random(22,83);

}

function draw() {
  background(255,255,255);  
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed *thickness* thickness * thickness/22509;
  
  if(damage > 10){
     wall.shapeColor=color(255,0,0);

  }

  if(damage < 10 ){
    wall.shapeColor=color(0,255,0);
  }

  


  }
  //hasCollided;
  drawSprites();
}

function hasCollided(bullet,wall){
   bulletRightEdge=bullet.x + bullet.width;
   wallLeftEdge=wall.x;
   
   if(bulletRightEdge>=wallLeftEdge){
     return true;
     
   }
    return false;
}

