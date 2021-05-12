class iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 40, 90, options);
      this.width = 40;
      this.height = 90;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('pink')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
};
