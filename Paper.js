class Paper{
    constructor(x,y){
var options= {
    isStatic:false,
    restituion : 0.3,
    friction : 0,
    density:1.2
}
this.body = Bodies.rectangle(x,y,60,50,options)
   World.add(world,this.body)
    this.image = loadImage("paper.png")
    this.width = 60
    this.height = 60
}
display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.width, this.height);
			pop()
			
	}
}


