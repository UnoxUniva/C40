var game
var database
var gameState = 0;
var playerCount =0;
var form , player
var allPlayers
var car1,car2,car3,car4
var cars=[]

let car1img,car2img,car3img,car4img,trackimg

function preload() {
    car1img=loadImage("images/car1.png")
    car2img=loadImage("images/car2.png")
    car3img=loadImage("images/car3.png")
    car4img=loadImage("images/car4.png")

    trackimg=loadImage("images/track.jpg")
}

function setup(){
    createCanvas(windowWidth-40,windowHeight-30);
    
    database=firebase.database()
    game = new Game();
    game.getState();
    game.startGame();

    
   
}


function draw(){
    background("white");
    if(playerCount===4)
    {
       game.update(1)
    }
    if(gameState===1)
    {
        game.play()
    }
    if(gameState===2){
        game.end()
    }
    
}

