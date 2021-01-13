class Sling
{
    constructor(bodyA,pointB)
    {
        var options={
            'bodyA': bodyA,
            'pointB':pointB,
            'stiffness': 1,
            'angularStiffness':1,
            'length': 220
          }
          this.chain=Matter.Constraint.create(options);
          World.add(world,this.chain);
          
    }
    
    display()
    {
        var a=this.chain.bodyA.position;
        var b=this.chain.pointB;
        push();
        stroke("white");
        strokeWeight(3.5);
        line(a.x,a.y,b.x,b.y);
        pop();
    }
}