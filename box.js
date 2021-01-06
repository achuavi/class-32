class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
          'friction':0.0,
          
          //isStatic:true
      }
      this.visibility=255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
  if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      stroke("pink");
      fill("blue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  
  else{
    World.remove(world,this.body);
    push();
    this.visibility=this.visibility-5;
    pop();
  }
}

scores(){
  if(this.visibility<0&&this.visibility>-50){
    score++;
  }
}
  };
  