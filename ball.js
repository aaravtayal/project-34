class ball{
    constructor(x, y,radius) {
        var options = {
             isStatic:false,
            restitution:0.9,
            friction:1.0,
            density:1.0
        }
        this.radius = radius;
        this.body = Matter.Bodies.circle(x, y,radius, options);
        World.add(world, this.body);
      }
      display()
      {

      //  Engine.update(engine);
        push();
         ellipseMode(RADIUS)
         fill("black");
         strokeWeight(4);
         stroke("white");
         ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
        }
}






