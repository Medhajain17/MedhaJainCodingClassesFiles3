class Cube {
  constructor(xInput, yInput, widthInput, heightInput) {
    var options = {
      restitution: 2,
    };
    this.width = widthInput;
    this.height = heightInput;
    this.body = Bodies.rectangle(xInput, yInput, widthInput, heightInput, options);
    World.add(userWorld, this.body);
  }
  display() {
   push(); 
   fill("orange");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
  }
};
