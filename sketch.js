var bc,player,bana,rock,invis;
var bcIMG,playerIMG,banaIMG,rockIMG;
var count=0;
var banaG
var rockG
var gameOVER;
var gameOVERIMG;
var PLAY,END;
var gameState=PLAY;

function preload(){
  bcIMG=loadImage("jungle.jpg");
  playerIMG=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_05.png",
  "Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  rockIMG=loadImage("stone.png");
  banaIMG=loadImage("banana.png");
  gameOVERIMG=loadImage("gameOVER.jpg");
}


function setup() {

  createCanvas(400, 400);

  
  player = createSprite(50,355,10,10);
  player.addAnimation("lel", playerIMG);
  player.scale=0.10;
  
  gameOVER=createSprite(200,200,10,10);
  gameOVER.addAnimation("haha lol",gameOVERIMG);
  gameOVER.scale=2;
  gameOVER.visible=false;
  
  invis = createSprite(200,390,400,10);
  invis.visible=false;
  
  rockG=new Group();
  banaG=new Group();
  
}

function draw() {
  background("green");
   fill("black");
 stroke("red");
 strokeWeight(3);
 textSize(20);
 text("BANANAS : "+ count, 228, 51);
  
  
  
  rock();
  bana();
      if(keyDown(UP_ARROW)&&(player.y>=300))
  {
    player.velocityY=-12;
    
  }
  if(banaG.isTouching(player)){
    count++
    banaG.destroyEach();
  }
      switch (count){
    case 5:player.scale=0.12;
      break;
      case 10:player.scale=0.14;
      break;
      case 15:player.scale=0.16;
      break;
    case 20:player.scale=0.18;
      break;
      case 25:player.scale=0.20;
      break;
      default:break;
  }
  
  
  
  
  



  if(player.isTouching(rockG)){
  
    gameOVER.visible=true;
    rockG.setVelocityXEach=(0);
    rock.visible=false;
    bana.visible=false;
    rockG.destroyEach();
    banaG.destroyEach();
    banaG.setVelocityXEach=(0);
    reset();
    player.x=390;
  }
  

  player.velocityY=player.velocityY+0.8;
  player.collide(invis)
  

  drawSprites();
}


  function rock() {

  if(frameCount % 40 === 0) 
{
  var rock = createSprite(400,368,10,40);
  rock.velocityX = - (6);


//generate random rock
  rock.addAnimation("stone",rockIMG);

//assign scale and lifetime to the rock           
  rock.scale = 0.1;
  rock.lifetime = 70;

//add each rock to the group
  rockG.add(rock);
}

}
 function bana(){
///////////////////////////////////////////////////////////////////
 if (frameCount%60===0)
{
  var rand=Math.round(random(250,380));
  var bana=createSprite(400,rand,10,10);
  bana.addAnimation("banana",banaIMG);
  bana.scale=0.1;
  bana.velocityX=-6;
  banaG.add(bana);
}
////////////////////////////////////////////////////////////////////
}

function reset(){
 text("reload da page",200,200);
}






