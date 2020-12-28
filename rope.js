class Rope {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:85,
            stiffness:0.3
    
        }
      this.chain = Matter.Constraint.create(options);
      World.add(world,this.chain);

    }
    display(){
   var  pointA = this.chain.bodyA.position;
   var pointB = this.chain.bodyB.position;
   push();
strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
    }
}