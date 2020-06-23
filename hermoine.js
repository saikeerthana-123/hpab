class Hermoine {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      //this.body = Bodies.rectangle(x,y,width,height,options);
      this.x = 400;
      this.y = 200;
      this.width = 50;
      this.height = 50;
      this.image = loadImage("sprites/hermoine.jpg");
      //World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
     // rectMode(CENTER);
      //fill("brown");
      //image(pos.x, pos.y, this.width, this.height);
      image(this.image);
    } 
  };
