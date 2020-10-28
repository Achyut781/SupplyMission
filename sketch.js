const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground, helicopter, package;

function preload(){
packageIMG = loadImage("package.png");
helicopterIMG = loadImage("helicopter.png");
}

function setup() {
  createCanvas(600,600);

  package = createSprite(300, 100, 30, 30);
  package.addImage(packageIMG);
  package.scale = 0.2;

  helicopter = createSprite(300, 100, 70, 30);
  helicopter.addImage(helicopterIMG);
  helicopter.scale = 0.6;

 
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
isStatic:true
}
var package_options = {
restitution:0.5
}
var drop_options = {
restitution:1
}
  ground = Bodies.rectangle(300, 550, 600, 10, ground_options);
  package = Bodies.rectangle(200, 100, 20, package_options);
  drop = Bodies.rectangle(300, 500, 25, 40, drop_options);
  World.add(world, ground);
  World.add(world, package);
}

function draw() {
  background(0, 0, 0);  
Engine.update(engine);







  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 600, 20);
keyPressed();
 drawSprites();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
Matter.Body.applyForce(packageObject.body, packageObject.body.position, {x:300, y:550});
     
   }
 }