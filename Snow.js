class Snow{
    constructor(x,y){
      var options={
        restitution :0.4
      }
this.body=Bodies.circle(x,y,50)
this.image=loadImage("snow4.webp")
World.add(world,this.body)



    }
    display(){
      var pos=this.body.position
    push()  ;
translate(pos.x,pos.y);
rotate(this.body.angle);
imageMode(CENTER)
image(this.image,0,0,50,50)
    pop();
    
   
    }
}