var car,wall;
var speed,weight;
var restartButton;


function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  restartButton = createSprite(800,60,100,20);

}

function draw() {
  background("black");  



  car.velocityX=speed;
  car.shapeColor="white";

  if(wall.x - car.x < (car.width + wall.width)/2){

    car.velocityX=0;
    var deformation=0.5 * weight*speed*speed/22509;
    if(deformation<180){
     
      car.shapeColor = "green";
   
    }

    if(deformation<180 && deformation>100){
     
      car.shapeColor = "yellow";
    
    }

    if(deformation<100){
     
     car.shapeColor = "red";
   
    }
  }

  drawSprites();
}

