
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, imge, over;
var FoodGroup, obstacleGroup; 
var score;
var ground;
var  score=0;
var PLAY=1;
var END=0;
var gameState=1;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  imge=loadImage("sprite_1.png");
  over=loadImage("game over.jfif")
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(70,335,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(200,370,600,10);
  ground.velocityX=-3;
 
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
background(220);
 
  if(gameState===PLAY){
 
    
    if (frameCount%150===0){
   obstacle=createSprite(300,350,100,350);
  obstacle.addImage("msg",obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-4;
    obstacle.lifetime=150;
    obstacleGroup.add(obstacle); 
    }
  
  if (frameCount%80===0){
     banana=createSprite(600,Math.round(random(120,270)),10,10);
  banana.addImage("sjd",bananaImage);
  banana.scale=0.1;
  banana.velocityX=-4
    banana.lifetime=150;
    bananaGroup.add(banana);
    
  }
    
    if(ground.x<100){
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12;
     }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    score = score+1;
    
   }
  
  }
  
 
   if (monkey.isTouching(obstacleGroup)){
    gameState=END;  
      obstacleGroup.destroyEach();
     bananaGroup.destroyEach();
      bananaGroup.setVelocityXEach(0);
      obstacleGroup.setVelocityXEach(0);
     ground.visible=true;
     monkey.visible=true;
     monkey.addImage("jhfh",imge);
     monkey.velocityY=0;
       ground.velocityX=0;
     
   var gameOver=createSprite(200,200,10,10);
     gameOver.addImage("game over.jfif",over)
     gameOver.scale=0.1;
   
   }
  
  
  
  text("SCORE:"+score,330,30); 
  
  drawSprites();  
  
  
}








