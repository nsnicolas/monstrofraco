const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 2000, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 1000, y: 50 });
  monster = new Monster(1450,550,300);

  box1= new Box(1200,300,50,50);
    box2= new Box(1200,0,50,50);
    box3 = new Box(1260,200,50,50)
    box4 = new Box(1260,300,50,50)
    box5 = new Box(1260,400,50,50)
    box6 = new Box(1200,200,50,50)
    box7 = new Box(1200,100,50,50) 
    box8 = new Box(1260,500,50,50) 
    box9 = new Box(1200,500,50,50) 
    box10 = new Box(1200,400,50,50)
    box11 = new Box(1140,500,50,50)  
    box12 = new Box(1140,400,50,50)
    box13 = new Box(1140,300,50,50) 
    box14 = new Box(1140,200,50,50) 
    box15 = new Box(1140,100,50,50) 
    box16 = new Box(1080,500,50,50) 
    box17 = new Box(1080,400,50,50) 
    box18 = new Box(1080,300,50,50) 
    box19 = new Box(1080,200,50,50) 
    box20 = new Box(1140,0,50,50)

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();  
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display(); 
  box20.display(); 

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged() 
{ Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY }); }