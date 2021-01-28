var movingRect,fixedRect;

function setup() {
  
  createCanvas(1200,800);

  movingRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor="green";
  fixedRect = createSprite(400,200,80,30);
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  // r,g,b  0-255
  // moving the object using mouse.
    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;
    console.log(movingRect.x - fixedRect.x)  // fixedRect.width/2 + movingRect.width/2 => 25+40 = 65

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
     && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    )
    { 
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    }
    else
    {
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    }
  drawSprites();
}

