
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyimage,treeimage,stoneimage,mangoimage

function preload()
{
	boyimage=loadImage("images/boy.png")
	treeimage=loadImage("images/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(540,220,20);
	mango2=new Mango(610,250,20);
	mango3=new Mango(640,300,20);
	mango4=new Mango(680,260,20);
	mango5=new Mango(440,280,20);

	stone1=new Stone(235,430,30)

	launcherOBJ=new Laucnher(stone1.body,{x:235,y:430})

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  image(boyimage,210,400,200,200)
  image(treeimage,400,200,400,300)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  stone1.display()
  launcherOBJ.display()
  

  detectcollision(stone1,mango1)
  detectcollision(stone1,mango2)
  detectcollision(stone1,mango3)
  detectcollision(stone1,mango4)
  detectcollision(stone1,mango5)

  drawSprites();
  
 
}

function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

	launcherOBJ.fly()
}

function detectcollision(lstone,lmango)
{
	 mangoBodyPosition=lmango.body.position
	 stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	 if(distance<=lmango.r+lstone.r) { Matter.Body.setStatic(lmango.body,false); } }


