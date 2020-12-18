class Bob{
    //r = radius
    constructor(x, y, r){
        var options = {
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r);
        fill("cyan");
        strokeWeight(2);
    }
}

console.log("The first bob on the left doesn't match the color with the rest of the bobs.");