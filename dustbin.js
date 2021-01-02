class Dustbin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
this.image=loadImage("dustbingreen.png")
	}
	display()
	{
			
			var dustbinPos=this.body.position;		

			push()
			translate(dustbinPos.x, dustbinPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w,this.h);
	
			pop()
			
	}


}