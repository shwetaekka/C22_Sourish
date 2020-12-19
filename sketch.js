//creating namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup() {
  createCanvas(800,400);

  //create engine

  engine = Engine.create();
  world = engine.world;

  var options = { 
    isStatic : true
  };

  object = Bodies.rectangle(400, 200, 50, 50, options);
  World.add(world, object);

  console.log(object);
  console.log(object.type);
  console.log(object.position);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background('black');  
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);

  //drawSprites();
}