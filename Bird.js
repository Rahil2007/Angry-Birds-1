class Bird{
    constructor(x,y){
        this.width = 100;
        this.height = 100 ;
        var options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
    }    

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        pos.x=mouseX
        pos.y=mouseY
        rectMode(CENTER);
        angleMode(RADIANS);
        push();
        fill("red");
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }

}