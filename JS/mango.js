class Mango{

    constructor(x,y,radius){

        var options={

            isStatic:true


        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.image=loadImage("images/mango.png")

        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }

    display(){

        var mangopos=this.body.position

        image(this.image,mangopos.x,mangopos.y,this.r,this.r)

    }

}