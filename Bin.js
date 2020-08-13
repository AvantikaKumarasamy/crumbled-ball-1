class Bin{
    constructor(x,y,width,height){
      var options={
         isStatic:true,
        'restitution':0.3,
        'friction':0.8
      }

      this.body=Bodies.rectangle(x,y,width,height,options);
      //this.rightbody=Bodies.rectangle(x,y,width,height,options);
      //this.bottombody=Bodies.rectangle(x,y,width,height,options);

      this.width = width;
      this.height = height;

      World.add(world,this.body);
     // World.add(world,this.rightBody);
      //World.add(world,this.bottomBody);
    }
    display(){
      var pos=this.body.position;
     // var angle=this.body.angle;
      push();
      //translate(pos.x,pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y,this.width,this.height);
      pop();

    }






}