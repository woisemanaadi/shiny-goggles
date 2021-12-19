class Stone{

    constructor(x,y,radius){

        var options={

            isStatic:false,
            density:1,
            friction:1



        }
        this.x=x;
        this.y=y;
        this.r=radius;
        this.image=loadImage("images/stone.png")

        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }

    display(){

        var stonepos=this.body.position

        image(this.image,stonepos.x,stonepos.y,this.r,this.r)
        
    }

}