class Baseclass{

constructor(){

}


display(){
			
    var paperpos=this.body.position;		

    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.r, this.r);
    pop()
    
}
}