class Log{
    constructor(x,y,height,angle){
        this.height=height
        this.width= 40
        var options = {
            restitution: 0.5,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)

        Matter.Body.setAngle(this.body,angle)
    }

    display(){
        var pos = this.body.position
        
        var angle = this.body.angle
        rectMode(CENTER)
        angleMode(RADIANS)
        push();
        fill("brown")
        translate(pos.x,pos.y)
        rotate(angle)
        rect(0,0,this.width,this.height)
        pop();
    }

}