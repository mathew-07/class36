var canvas,backgroundImage;
var gameState = 0;
var playerCount;
var database;
var form1,player1,game1;


function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(500,500);
  game1=new game()
  game1.getState()
  game1.start()
}

function draw(){
 
  
}
