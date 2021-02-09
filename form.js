class Form{

constructor()
{
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h3");

}
 hide(){

this.input.hide();
this.button.hide();
this.greeting.hide();

 }

display(){
var title = createElement("h2");
title.html("multiplayer_car_racing_game")
title.position(displayWidth/2-100,0)
this.input.position(displayWidth/2-100,160);
this.button.position(displayWidth/2-50,200);
this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name = this.input.value();
    playerCount = playerCount+1;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.greeting.html("hello " + player.name + " waiting for others players to join")
    this.greeting.position(displayWidth/2-100,160)
})

}
}