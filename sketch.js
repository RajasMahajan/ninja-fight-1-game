var ninja;
var star;
var background1;
var ninja_image;
var level1;
var level2;
var level3;
var level4;
var level5;
var equipments;
var ninja_runnerback;
var WEAPONSCREEN=1;
var ninjastar1;
var ninjastar1image;
var coin1;
var coins=100;
var land1;
var land2;
var land3;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var obs7;
var land4;
var land5;
var land6;
var land7;
var land8;
var land9;
var land10;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
var coin9;
var coin10;
var coinimage;
var coin;
var ninjastar2;
var ninjastar2image;
var ninjastar3;
var ninjastar3image;
var ninjastar4;
var ninjastar4image;
var ninjastar5;
var ninjastar5image;
var gameState=0;
var start1=2;
var weapons=3;
var level1=4;
var start=1;
var over=10;
var level1text;
var ninja_runner;
function preload(){
  ninja_image=loadAnimation("standing.png");
  ninjastar1image=loadImage("ninja star1.png");
  ninjastar2image=loadImage("ninja star2.png");
  ninjastar3image=loadImage("ninja star3.png");
  ninjastar4image=loadImage("ninja star4.png");
  coinimage=loadImage("coin.png");
  ninjastar5image=loadImage("ninja star5.png");
 // background1=loadImage("images.jpg");
  ninja_runner=loadAnimation("runner1.png","runner2.png","runner3.png","runner4.png","runner5.png","runner6.png");
  ninja_runnerback=loadAnimation("runner6.png","runner5.png","runner4.png","runner3.png","runner2.png","runner1.png")
}
function setup() {
  createCanvas(1100,600);
  //createSprite(400, 200, 50, 50);
  gameState=start;
  
  equipments=createSprite(800,350,200,70);
  equipments.visible=false;
  weaponstext=createElement('h2');
  weaponstext.html("weapons");
  weaponstext.position(760,320);
  weaponstext.hide();
  //console.log(text);
  coin=createSprite(500,50,10,10);
  coin.addImage(coinimage);
  coin.scale=0.25;
  // ninjastar
  ninjastar1=createSprite(100,300,5,5);
  ninjastar1.addImage(ninjastar1image);
  ninjastar1.scale=0.5;
  ninjastar2=createSprite(230,300,10,10);
  ninjastar2.addImage(ninjastar2image);
  ninjastar2.scale=0.5;
  ninjastar3=createSprite(350,300,10,10);
  ninjastar3.addImage(ninjastar3image);
  ninjastar3.scale=0.5;
  ninjastar4=createSprite(500,300,10,10);
  ninjastar4.addImage(ninjastar4image);
  ninjastar5=createSprite(740,310,10,10);
  ninjastar5.addImage(ninjastar5image);
  ninjastar5.scale=0.5;
  //obs
  obs1=createSprite(190,120,30,30);
  obs1.visible=false;
  obs2=createSprite(240,0,30,30);
  obs2.visible=false;
  //lands
  land1=createSprite(100,200,500,30);
  land2=createSprite(100,195,500,30);
  //land2.shapeColor("red");
  land3=createSprite(824,250,600,20);
  land4=createSprite(824,250,600,30);
  land5=createSprite(324,400,400,20);
  land6=createSprite(324,400,400,30);
  land1.visible=false;
  land2.visible=false;
  land3.visible=false;
  land4.visible=false;
  land5.visible=false;
  land6.visible=false;
  //ninja star
  ninjastar1.visible=false;
  ninjastar2.visible=false;
  ninjastar3.visible=false;
  ninjastar4.visible=false;
  ninjastar5.visible=false;
  //coins
  coin2=createSprite(949,189,20,20);
  coin2.visible=false;
  //coins
  coin1=createSprite(55,391,20,20);
  coin1.addImage(coinimage);
  coin1.scale=0.2;
  coin1.visible=false;
}

function draw() {
  background("blue");  
  fill("red");
  textSize(30);
  text("="+coins,530,57);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  if(gameState===1){
   homescreen()
    }
  if(keyDown(RIGHT_ARROW)){
    ninja.changeAnimation("ninja",ninja_runner);
    ninja.position.x=ninja.position.x+10;
  }
  if(keyWentUp(RIGHT_ARROW)){
    ninja.changeAnimation("stand",ninja_image);
  }
  if(keyDown(LEFT_ARROW)){
    ninja.changeAnimation("ninjaback",ninja_runnerback);
    ninja.position.x=ninja.position.x-10;
  }
  if(keyWentUp(LEFT_ARROW)){
    ninja.changeAnimation("stand",ninja_image);
  }
  if(keyDown(DOWN_ARROW)){
    ninja.position.y=ninja.position.y+5;
  }
  if(keyIsDown(UP_ARROW)){
    ninja.position.y=ninja.position.y-9;
  }
 if(mousePressedOver(level1)){
   gameState=2;
 }
 if(gameState===2){
  levels();
 }
 console.log(gameState);
 if(gameState===3){
   funweapons();
 }
 if(gameState===4){
   funlevel1();
 }
 if(gameState===over){
   overgame();
 }
 if(keyDown("k")&&gameState===over){
   gameState=1;
 }
  drawSprites();
}
function homescreen(){
  ninja=createSprite(100,200,45,45);
  ninja.addAnimation("stand",ninja_image);
  ninja.addAnimation("ninja",ninja_runner);
  ninja.addAnimation("ninjaback",ninja_runnerback);
  level1=createSprite(200,300,100,50);
  level1text=createElement('h2');
  level1text.html("level1");
  level1text.position(175,270);
}
function levels(){
  ninja.visible=false;
  level1.visible=false;
  equipments.visible=true;
  level1text.hide();
 weaponstext.show();
 
 
  if(mousePressedOver(equipments)){
    console.log("eee");
    gameState=3;
  }
  
}
function funweapons(){
 
    equipments.visible=false;
    weaponstext.hide();
    ninjastar1.visible=true;
    coin1.visible=true;
    text(" 10",70,398);
    ninjastar2.visible=true;
    text(" 30",200,398);
    ninjastar3.visible=true;
    text(" 40",322,398);
    ninjastar4.visible=true;
    text(" 50",442,398);
    ninjastar5.visible=true;
    text(" 100",684,398);
  if(mousePressedOver(ninjastar1)&&coins>10){
    coins=coins-10;
    gameState=4;
  }
}
function funlevel1(){
  ninja.velocityY=7;
  ninjastar1.visible=false;
  ninjastar2.visible=false;
  ninjastar3.visible=false;
  ninjastar4.visible=false;
  ninjastar5.visible=false;
  ninja.visible=true;
  coin1.visible=false;
  land1.visible=true;
  land2.visible=true;
  land3.visible=true;
  land4.visible=true;
  land5.visible=true;
  land6.visible=true;
  ninja.collide(land1);
  ninja.collide(land3);
  ninja.collide(land5);
  obs1.visible=true;
  obs2.visible=true;
  obs2.velocityY=3;
  obs1.velocityY=3;
  if(obs1.isTouching(land1)){
    obs1.y=-5;
  }
  if(obs2.isTouching(land1)){
    obs2.y=-5;
  }
  obs1.collide(land1);
  coin2.visible=true;
  coin2.addImage(coinimage);
  coin2.scale=0.2;
  if(ninja.isTouching(coin2)){
    coins=coins+5;
  //  coin2.removeSprite();
  }
  if(ninja.isTouching(obs1)){
    gameState=over;
  }
}
function overgame(){
  ninja.visible=false;
  coin2.visible=false;
  land1.visible=false;
  land2.visible=false;
  land3.visible=false;
  land4.visible=false;
  land5.visible=false;
  land6.visible=false;
  text("GAME IS OVER",500,335);
}