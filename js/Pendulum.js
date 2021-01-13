class Pendulum
{
    constructor(x,y,color)
    {
        this.body=Bodies.circle(x,y,40,{'restitution':1, 'friction':0, 'frictionAir': 0.0, 'slop':1, 'inertia':Infinity });
        this.color=color;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        stroke("white");
        strokeWeight(2);
        ellipse(0,0,80,80);
        pop();
    }
}