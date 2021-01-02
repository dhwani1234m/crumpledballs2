const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 var dustbin1, paperObject,groundObject;
 var world;
 
 function preload()
 {
	 
 }
 
 function setup() {
	 createCanvas(1500, 800);
	 rectMode(CENTER);
 
 
	 engine = Engine.create();
	 world = engine.world;
	 
	 paperObject=new Paper(100,700,20);
	 groundObject=new Ground(750,800,1500,20);
	 dustbin1=new Dustbin(1200,700,200,200);
	 //Create a Ground
 
 
	 Engine.run(engine);
   
 }
 
 
 function draw() {
   rectMode(CENTER);
   background(230);
  
   
   paperObject.display();
   groundObject.display();
   dustbin1.display();
   
 }
 
 function keyPressed() {
	 if (keyCode === UP_ARROW) {
 
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
 
   
	 }
 }
 
 




