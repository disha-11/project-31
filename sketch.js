const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var corn,corn2,corn3,corn4;

var r1,r2,r3,r4,r5;

function setup() {
  createCanvas(480,700);
   engine = Engine.create();
    world = engine.world;

   corn=new Ground(240,10,500,10);
   corn2=new Ground(0,400,10,800);
   corn3=new Ground(475,400,10,800);

   r1=new Division(80,580,5,300)
   r2=new Division(160,580,5,300)
   r3=new Division(240,580,5,300)
   r4=new Division(320,580,5,300)
   r5=new Division(400,580,5,300)




  

}
var particles=[]
var divisions=[]
var plinkos=[]

width=480;

for(var j=40;j<=width;j=j+50){
  plinkos.push(new Plinko(j,75))
}
for(var j=15;j<=width-10;j=j+50){
  plinkos.push(new Plinko(j,175))
}



function draw() {
  background(0); 
  
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10,width/2+10,10,10)))
  }
 
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  
 
  corn.display();
  corn2.display()
  corn3.display()
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();
}

