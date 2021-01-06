const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint =Matter.Constraint;

var engine, world;

var ground1,ground2;

var score=0;

var bg1,bg2,bg3,bg4,bg5,bg6,bg7;

var polygon,pimage;
var bg='images.jpg';
var bimage;

var slingshot1;
function preload(){
    pimage=loadImage("polygon.png");
    getbimage();
}


function setup(){
    createCanvas(1500,800);
    engine=Engine.create();
    world=engine.world;

    ground1=new Ground(550,600,300,20);
    ground2=new Ground(900,300,300,20);

    bg1=new Box(430,555,40,60);
    bg2=new Box(470,555,40,60);
    bg3=new Box(510,555,40,60);
    bg4=new Box(550,555,40,60);
    bg5=new Box(590,555,40,60);
    bg6=new Box(630,555,40,60);
    bg7=new Box(670,555,40,60);
    bg8=new Box(470,495,40,60)
    bg9=new Box(510,495,40,60);
    bg10=new Box(550,495,40,60)
    bg11=new Box(590,495,40,60);
    bg12=new Box(630,495,40,60);
    bg13=new Box(510,435,40,60);
    bg14=new Box(550,435,40,60);
    bg15=new Box(590,435,40,60);
    bg16=new Box(550,375,40,60);

    
    bs1=new Box(820,255,40,60);
    bs2=new Box(860,255,40,60);
    bs3=new Box(900,255,40,60);
    bs4=new Box(940,255,40,60);
    bs5=new Box(980,255,40,60);
    bs6=new Box(860,195,40,60);
    bs7=new Box(900,195,40,60);
    bs8=new Box(940,195,40,60);
    bs9=new Box(900,135,40,60);

    var opt={
        isStatic:true
    }
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot1=new SlingShot(this.ball,{x:100,y:480});
}
function draw(){
    background("brown");
    if(bimage)
    background(bimage);
    Engine.update(engine);
    textSize(30);

    text("score="+score,950,40);


    textSize(20);
  fill("white");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    ground1.display();
    ground2.display();
    bg1.display();
    bg1.scores();
    bg2.display();
    bg2.scores();
    bg3.display();
    bg3.scores();
    bg4.display();
    bg4.scores();
    bg5.display();
    bg5.scores();
    bg6.display();
    bg6.scores();
    bg7.display();
    bg7.scores();
    bg8.display();
    bg8.scores();
    bg9.display();
    bg9.scores();
    bg10.display();
    bg10.scores();
    bg11.display();
    bg11.scores();
    bg12.display();
    bg12.scores();
    bg13.display();
    bg13.scores();
    bg14.display();
    bg14.scores();
    bg15.display();
    bg15.scores();
    bg16.display();
    bg16.scores();

    bs1.display();
    bs1.scores();
    bs2.display();
    bs2.scores();
    bs3.display();
    bs3.scores();
    bs4.display();
    bs4.scores();
    bs5.display();
    bs5.scores();
    bs6.display();
    bs6.scores();
    bs7.display();
    bs7.scores();
    bs8.display();
    bs8.scores();
    bs9.display();
    bs9.scores();
   
    imageMode(CENTER);
    image(pimage,ball.position.x,ball.position.y,50,50);
    slingshot1.display();
    getbimage();

}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot1.fly();
  }
  function keyPressed(){
      if(keyCode===32){
          slingshot1.attach(this.ball);
          Matter.Body.setPosition(this.ball,{x:100,y:480});
      }
  }
  async function getbimage(){

    var r=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
    var rj=await r.json();
    var datetime=rj.datetime;
    var h=datetime.slice(11,13);
    console.log(h);
    if(h>06&&h<19){
        bg='images.jpg';
    }
    else{
        bg='night.jpg';
    }
    bimage=loadImage(bg);

  }