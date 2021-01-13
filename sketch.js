const {Engine,Bodies,World,Constraint}=Matter;
var engine,world,bob=[],sling=[];

function setup() {
  createCanvas(windowWidth/1.5,windowHeight/1.5);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  for(var i=0; i<5;i++)
  {
    var j=270+i*80;
    bob.push(new Pendulum(j,200,"black"));
    sling.push(new Sling(bob[i].body,{x: j,y:80}))
  }
  
  
}

function draw() {
  background("coral");  
  text(mouseX+","+mouseY,mouseX,mouseY);
  for (var b in bob)
  {
    bob[b].display();
  }
  for (var s in sling)
  {
    sling[s].display();
  }
  
}

function mouseDragged()
{
   Matter.Body.setPosition(bob[4].body,{x:mouseX,y:mouseY})
}