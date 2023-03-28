
var trex ,trex_running;
function preload(){
  trex_running=loadanimation("trex1.png","trex2.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex=createsprite(50,160,20,50);
  trex.addanimation("running",trex_running);
  ground=createsprite(200,180,400,20);


}

function draw(){
  background("white")
  

}
