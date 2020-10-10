var bullet1;
var bullet2;
var bullet3;
var wall1;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet1 = createSprite(50, 120, 60, 20);
  bullet1.shapeColor = "white";
  bullet2 = createSprite(50, 200, 60, 20);
  bullet2.shapeColor = "white";
  bullet3 = createSprite(50, 280, 60, 20);
  bullet3.shapeColor = "white";
  wall1 = createSprite(1200,200,thickness,height/2);
  wall1.shapeColor = (80,80,80);
  speed = random(55,90);
  weight = random(400,1500);
  bullet1.speed = random(223,321);
  bullet1.weight = random(30,52);
  bullet2.speed = random(223,321);
  bullet2.weight = random(30,52);
  bullet3.speed = random(223,321);
  bullet3.weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("pink");  

  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;

  if(wall1.x-bullet1.x < (bullet1.width+wall1.width)/2)
  {
    bullet1.velocityX = 0;
    var deformation= 0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      bullet1.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      bullet1.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      bullet1.shapeColor = "green";
    }
  }

  if(wall1.x-bullet2.x < (bullet2.width+wall1.width)/2)
  {
    bullet2.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      bullet2.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      bullet2.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      bullet2.shapeColor = "green";
    }
  }

  if(wall1.x-bullet3.x < (bullet3.width+wall1.width)/2)
  {
    bullet3.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22500;
    if(deformation>180)
    {
      bullet3.shapeColor = "red";
    }
    if(deformation<180 && deformation>100)
    {
      bullet3.shapeColor = "yellow";
    }
    if(deformation<100)
    {
      bullet3.shapeColor = "green";
    }
  }

  if(hasCollided(bullet1,wall1))
  {
    bullet1.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall1.shapeColor = color(255,0,0)
    }

    if(damage<10)
    {
      wall1.shapeColor = color(0,255,0)
    }
  }

  if(hasCollided(bullet2,wall1))
  {
    bullet2.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall1.shapeColor = color(255,0,0)
    }

    if(damage<10)
    {
      wall1.shapeColor = color(0,255,0)
    }
  }

  if(hasCollided(bullet3,wall1))
  {
    bullet3.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall1.shapeColor = color(255,0,0)
    }

    if(damage<10)
    {
      wall1.shapeColor = color(0,255,0)
    }
  } 
  drawSprites();
}

function hasCollided(bullet1,bullet2,bullet3,wall1)
{
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall1.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}