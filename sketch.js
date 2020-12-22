const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var engine,world;

var ground;
var box ;
var box1 ;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;



 box = new Box(200,300,50,50);

 box1 = new Box(240,0,50,100);

 ground = new Ground(400,350,800,10);


}

function draw() {
  background("black");  
  Engine.update(engine);

 box.display();

 box1.display();

 ground.display();

}

// https://github.com/whitehatjr/p5.play-boilerplate
//17:55
//Guest
//https://youtu.be/UZDykka-SpY
//Would you like to open this document inside the room for everyone?
//Yes, open for everyone
//No thanks