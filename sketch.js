
function preload() {
    //load the images here
    garden=loadImage("images/garden.png")
    cat1=loadImage("images/cat1.png")
    cat2=loadImage("images/cat4.png")
    m=loadImage("images/mouse1.png")
    m2=loadImage("images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    tom=createSprite(900,700,100,100)
    tom.addImage(cat1)
    tom.scale=0.10
    tom.velocityX=5

    jerry.createSprite(90,20,10,10)
    jerry.addImage(m)

if(isTouching(tom)(jerry)){
tom.changeImage(cat2)
jerry.changeImage(m2)
tom.velocityX=0
}






    drawSprites();





}


function keyPressed(){

  //For moving and changing animation write code here


}
