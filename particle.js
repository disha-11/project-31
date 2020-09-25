class Particle {
    constructor(x,y) {
    var options = {
    isStatic: false
    }
   this.body = Bodies.circle(x,y,20,options);
    this.color=color(random(0,255),random(0,255),random(0,255));
     World.add(world, this.body);
   }
  display(){
  var pos =this.body.position;
  push ();
  translate(pos.x,pos.y);
  rotate (this.body.angle);
  ellipseMode(RADIUS);
  fill(this.color);
  ellipse(pos.x, pos.y,10,10);
  pop ();
  }
  }