class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Name");
        this.button = createButton("Play")
        this.greeting = createElement('h3')
        this.reset = createButton("Reset")
    }
    display(){
      
        this.title.html('Racing Cars');
        this.title.position(width/2-10,0);
        
        this.input.position(width/2-10,100)

        
        this.button.position(width/2+130,100)

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide()

            var name = this.input.value();

            
            this.greeting.html('Hello'+ name)
            this.greeting.position(width/2-10,100);

            playerCount +=1;
            player.updateCount(playerCount)
            player.name = name;
            player.index = playerCount
            player.update()
            
            
        })

        this.reset.position(width-100,100)

        this.reset.mousePressed(()=>{
            game.update(0)
            player.updateCount(0)
            database.ref("Players").remove()
        })
    }
    hideForm(){
        this.input.hide();
        this.greeting.hide()
        this.button.hide();
        
        
    }

}