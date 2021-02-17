class form{
    constructor(){

    }
    display(){
     var title = createElement("h2")  
     title.html("car racing game!")
     title.position(130,0)
     var input=createInput("name")
     var button=createButton("play")
     var greeting=createElement("h3")
     input.position(130,60)
     button.position(250,200)
     button.mousePressed(function(){
      input.hype
      button.hype
      var name=input.value()
      playerCount=playerCount+1
      player1.update(name)
      player1.updateCount(playerCount)
      greeting.html("hello"+name)
      greeting.position(30,160)
     })
    }
    
}