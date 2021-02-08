var canvas;
var music;
var block1, block2, block3, block4;
var ball; 

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    block1 =  createSprite(50, 100, 100, 20);
    block1.shapeColor = "lime";
    
    block2 =  createSprite(170, 200, 100, 20);
    block2.shapeColor = "cyan";

    block3 =  createSprite(300, 400, 120, 20);
    block3.shapeColor = "yellow";
    
    block4 =  createSprite(500, 500, 200, 20);
    block4.shapeColor = "purple";

    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = "blue";
    ball.velocityX = 7
    ball.velocityY = -8
}

function draw() {
    background("black");
    edges = createEdgeSprites(); 
    ball.bounceOff(edges); 

    if(block1.isTouching(ball)&&ball.bounceOff(block1)){
      ball.shapeColor = "lime";
      music.stop(); 
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
      ball.shapeColor = "cyan";
    }
    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
      ball.shapeColor = "yellow";
      music.play(); 
    }
    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
      ball.shapeColor = "purple";
    }
    drawSprites();  
}

