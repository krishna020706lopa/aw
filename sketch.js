var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var ground,amongUsMap;

var redL,redR,blueL,blueR,greenL,greenR,pinkL,pinkR;

var playersSus,red,blue,green,pink;

function preload(){
  //cars Images
  redL = loadImage("Image/Red left.png");
  redR = loadImage("Image/Red right.png");
  blueL = loadImage("Image/Blue left.png");
  blueR = loadImage("Image/Blue right.png");
  redL = loadImage("Image/Dark green left.png");
  redR = loadImage("Image/Dark green right.png");
  blueL = loadImage("Image/Pink left.png");
  blueR = loadImage("Image/Pink right.png");

   //track Image
   amongUsMap = loadImage("Image/Haunted house.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
