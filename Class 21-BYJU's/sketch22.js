//class 22: Physics Engine
//Developer: 

//Declare variables for game objects and behaviour indicators(FLAGS)
//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mjEngine, mjWorld;

var ball, ground;

var rectangle1;
var rectangle2;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {

}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(800, 400);

  mjEngine = Matter.Engine.create();
  mjWorld = mjEngine.world;

  //construction of ball using matter.js
  var ball_options = {
    restitution: 0.7,
  };
  ball = Bodies.circle(100, 100, 50, ball_options);
  World.add(mjWorld, ball);
  console.log(ball);

  //construction of ground using matter.js
  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(400, 380, 800, 20, { isStatic: true });
  World.add(mjWorld, ground);
  console.log(ground);

  //construction of rectangle1 using matter.js
  var rect_option = {
    restitution: 1,
    }
  rectangle1 = Bodies.rectangle(200, 45, 50, 35, rect_option);
  World.add(mjWorld, rectangle1);
  console.log(rectangle1);
}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(0);

  Engine.update(mjEngine);

  //display of ball using matter.js
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 100, 100);

  //display of ground using matter.js
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);

  //display of rectangle1 using matter.js
  rectMode(CENTER);
  rect(rectangle1.position.x, rectangle1.position.y, 50, 35);

  // rectMode(CENTER);
  // fill(255);
  // rect(400, 200, 50, 50);
}
