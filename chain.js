class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 200
        }
        this.chain = Constraint.create(options);
       World.add(world, this.chain);
    }
   display(){
        strokeWeight(4);
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}