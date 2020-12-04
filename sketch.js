
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1,ball2,ball3,ball4;  
var rope1,rope2,rope3,rope4;
var obj,obj2,obj3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  roof = new wall(300,200,300,20);
  obj = new wall(350,200,10,10);
  obj2 = new wall(250,200,10,10);
  obj3 = new wall(200,200,10,10);




  ball1 = new ball(310,290,25);
  ball2 = new ball(260,290,25);
  ball3 = new ball(370,290,25);
  ball4 = new ball(210,290,25);



  rope1 = new Chain(ball1.body,roof.body);
  rope2 = new Chain(ball2.body,obj2.body);
  rope3 = new Chain(ball3.body,obj.body);
  rope4 = new Chain(ball4.body,obj3.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  
  


 //roof.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();

  drawSprites();
 
}

function mouseDragged ()
  {
    Matter.Body.setPosition(ball3.body, {x: mouseX , y: mouseY});
  }











