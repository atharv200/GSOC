var wall, car
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1300,200,60,height/2)
  wall.shapeColor = "black"

  car = createSprite(50,200,50,50)
  car.shapeColor = "black"

  speed = random(55,90)
  weight = random(400,1500)

}

function draw() {
  background("lightGrey"); 
  
  car.velocityX = speed

  console.log(deformation)

  deformation = (0.5*weight*speed*speed)/22500

  if(wall.x - car.x <= wall.width/2 + car.width/2)
  {
      car.velocityX = 0

      if(deformation <= 100  )
      {
        car.shapeColor = "green"
      }
    
      if(deformation > 100 && deformation <=180 )
      {
        car.shapeColor = "yellow"
      }
    
      if(deformation>=180  )
      {
        car.shapeColor = color(255,0,0)
      }
  }
  
  

  drawSprites();
}