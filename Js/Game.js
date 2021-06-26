class Game{
    constructor(){

    }

    getState(){
        var dbref = database.ref("gameState")
        dbref.on("value",function(data){
           gameState = data.val();
        })
    }
    update(state)
    {
        database.ref("/").update({gameState: state})
    }
    startGame(){
        if(gameState===0)
        {
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();

            car1=createSprite(450,height)
            car2=createSprite(650,height)
            car3=createSprite(850,height)
            car4=createSprite(1050,height)

            cars=[car1,car2,car3,car4]

            car1.addImage("1",car1img)
            car2.addImage("2",car2img)
            car3.addImage("3",car3img)
            car4.addImage("4",car4img)

            

        }
    }
    play(){
        form.hideForm()
        
        Player.getAllPlyrsInfo()
        console.log("allp", allPlayers)
        if(allPlayers!==undefined)
        {
            image(trackimg,0,-height*4,width,height*5)
           
            
           var index = 0;
           var y = height;
            for(var plr in allPlayers)  //for each loop
            {
                y = height - allPlayers[plr].distance
               cars[index].y = y // 50 100 150 200

                if (plr === "player" + player.index)
                {
                    fill("cyan")
                ellipse(cars[index].x,cars[index].y,100,100)
                camera.position.y = cars[index].y
               
                }
                else
                cars[index].shapeColor=("black")  

                index = index+1


            }
            drawSprites();
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance+=50
            player.update()
            console.log(player.distance)
          if(player.distance>=3300){
              gameState=2
          }  
        }
    

        
        
    }
    end(){
        textSize(30)
        text("Wait for all players to finish",width/2,camera.position.y)
    }
}