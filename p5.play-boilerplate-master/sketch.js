var space, EnType1, EnType2, EnType3, EnCaptain, En1, En2, En3, EnCap, playerImage, PlayerShip;
function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);

  EnCap = new Ship("EnCaptain", 500, 300);
  En1 = new Ship("En1", 300,200);
  En2 = new Ship("En2", 300,300);
  En3 = new Ship("En3", 300,400);
  PlayerShip = new Player(925, 300)
}
function preload(){
  space = loadImage("sprite_0 5.png");
  EnType1 = loadImage("sprite_0.png");
  EnType2 = loadImage("sprite_0 4.png");
  EnType3 = loadImage("sprite_0 3.png");
  EnCaptain = loadImage("sprite_0 2.png");
  playerImage = loadImage("PlayerShip.gif")
}

function draw() {
  background(space);
  PlayerShip.control()  
  drawSprites();
}