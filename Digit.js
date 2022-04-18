class Digit{
	constructor(l,r,pos,angles){
		this.l1=l;
		this.l2=0.8*l;
		this.l3=0.6*l;
		this.r=r;
		this.pos=pos;
		this.angles=angles;
		this.a1 = -100;
		this.a2 = -150;
	}
	flexback(){
		this.a1*=0.9;
		this.a2*=0.9;
	}
	show(){
		push();
		this.orient();
		this.base();
		this.middle();
		this.tip();
		pop();
	}
	
	orient(){
		translate(this.pos.x, this.pos.y, this.pos.z);
		rotateZ(90);
		rotateX(this.angles.x);
		rotateY(this.angles.y);
		rotateZ(this.angles.z);
	}
	
	base(){
		rotateY(this.a1);
		translate(0,-this.r/6,0);		
		box(this.r/4,this.r/8, this.r/1.7);
		translate(0,0,this.l1/2);
		rotateX(90);
		cylinder(this.r/3.5,this.l1*0.6);
		rotateX(-90);
		translate(0,0,this.l1*0.15);
		box(this.r/2, this.r/9,this.l1*0.7);
		translate(0,0,this.l1*0.35);
		cylinder(this.r/4, this.r/9);
		cylinder(this.r/12, this.r/2);
	}
	
	middle(){
		rotateY(-10+this.a2);
		translate(0,-this.r/8,0);
		cylinder(this.r/4, this.r/8);
		translate(0,this.r/4,0);
		cylinder(this.r/4, this.r/8);
		translate(0,-this.r/8,0);		
		translate(0,0,this.l2/2);
		rotateX(90);
		cylinder(this.r/3.5,this.l2*0.6);
		rotateX(-90);
		translate(0,0,this.l2*0.15);
		box(this.r/2, this.r/9,this.l2*0.7);
		translate(0,0,this.l2*0.35);
		cylinder(this.r/4, this.r/9);
		cylinder(this.r/12, this.r/2);
	}
	tip(){
		rotateY(-15+this.a2);
		translate(0,-this.r/8,0);
		cylinder(this.r/4, this.r/8);
		translate(0,this.r/4,0);
		cylinder(this.r/4, this.r/8);
		translate(0,-this.r/8,0);		
		translate(0,0,this.l3/2);
		rotateX(90);
		cylinder(this.r/3.5,this.l3*0.5);
		rotateX(-90);
		translate(0,0,this.l3/3.5);
		sphere(this.r/3.5);
	}
}