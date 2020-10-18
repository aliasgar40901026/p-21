var bullet1,bullet2,bullet3,bullet4,wall1,wall2,wall3,wal4,line1,line2,lin3;
function setup() {
  createCanvas(800,400);
  bullet1 =  createSprite(75, 50, 50, 50);
  bullet2 =  createSprite(75, 150, 50, 50);
  bullet3 =  createSprite(75, 250, 50, 50);
  bullet4 =  createSprite(75, 350, 50, 50);
  line1 = createSprite(200, 100, 1500, 10);
  line2 = createSprite(200, 200, 1500, 10);
  line3 = createSprite(200, 300, 1500, 10);
  wall1 = createSprite(750, 50, 50, 80); 
  wall2 = createSprite(750, 150, 50, 80); 
  wall3 = createSprite(750, 250, 50, 80); 
  wall4 = createSprite(750, 350, 50, 80); 
  
  

}

function draw() {
  background(150,250,200);  
 
  if("leftclick"){
    bullet1.velocityX = 40;
   bullet2.velocityX = 50;
   bullet3.velocityX = 30;
   bullet4.velocityX = 43;
  }
  if(bullet1.isTouching(wall1)){
   bullet1.velocityX = -30;
  }
  if(bullet2.isTouching(wall2)){
    bullet2.velocityX = -35;
   }
   if(bullet3.isTouching(wall3)){
    car3.velocityX = -40;
   }
  
   if(bullet4.isTouching(wall4)){
    bullet4.velocityX = -25;
   }
  

  
  drawSprites();
  

}