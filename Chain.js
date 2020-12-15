class chain{
    constructor(bodyA,bodyB){
    var a={
        bodyA:bodyA,
        bodyB:bodyB,
        length:50,
        stiffness:0.4
    }
    this.chain=Constraint.create(a)
    World.add(world,this.chain)
    }
    display(){
    var pa=this.chain.bodyA.position
    var pb=this.chain.bodyB.position
    line(pa.x,pa.y,pb.x,pb.y)
    }

}