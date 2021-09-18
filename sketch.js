var issimg;
var astronaut,moveImg,bathImg,eatImg,drinkImg,gym1Img,gym2Img,brushImg,sleep;

function preload(){
    issimg = loadImage("iss.png");
    moveImg = loadAnimation("move.png","move1.png")
    eatImg = loadAnimation("eat1.png","eat2.png")
    drinkImg = loadAnimation("drink1.png","drink2.png")
    gym1Img = loadAnimation("gym1.png","gym2.png")
    bathImg = loadAnimation("bath1.png","bath2.png")
    brushImg = loadAnimation("brush.png","brush1.png")
    gym2Img = loadAnimation("gym11.png","gym12.png")
    sleep = loadImage("sleep.png")
   }

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(issimg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym1Img);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eatImg);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

 if(keyDown("m")){
   astronaut.addAnimation("moving",moveImg);
   astronaut.changeAnimation("moving")
   astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
 }
}


