var ground, fairy, star;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
   //preload the images here

   groundImg = loadImage("images/starnight.png");
   fairyImg = loadImage("images/fairy1.png");
   starImg = loadImage("images/star.png");

}

function setup() {
  createCanvas(800, 750);

  ground = createSprite(400,375,800,750);
  ground.addImage(groundImg);

  star = createSprite(600,200);
  star.addImage(starImg);
  star.scale = 0.3;
  
  fairy = createSprite(250,350);
  fairy.addImage(fairyImg);
  fairy.scale = 0.2;

  engine = Engine.create();
  world = engine.world;
  
  star = Bodies.rect(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, star);

  Engine.run(engine);

}


function draw() {
  background("black");

  star.x= star.position.x; 
  star.y= star.position.y;

  drawSprites();

  
}

function keyPressed(){
	if(keyCode===LEFT_ARROW){
		fairy.x = fairy.x - 20;
	}
else if(keyCode===RIGHT_ARROW){
	fairy.x = fairy.x + 20;
}

else if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(star,false);
}

}


