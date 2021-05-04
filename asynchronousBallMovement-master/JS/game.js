class Game{
    constructor(){}


getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();        
    })

}



update(willprovidestatelater){
 database.ref('/').update({
     gameState: willprovidestatelater
 });
}


async start(){
    if(gameState === 0){
        player = new Player();

        var playerCountref = await database.ref('playerCount').once("value");
        if(playerCountref.exists()){
        
        playerCount = playerCountref.val();
        player.getCount();
        
        }
        form = new Form();
        form.display();
    }

    
    car1 = createSprite(100,600,60,50);
    car1.addImage("car1.png",car1Image);
    car2 = createSprite(900,600,60,50);
    car2.addImage("car2.png",car2Image);
    allCars = [car1,car2]; 
}

play(){
    form.hide();
    textSize(30);
    fill("teal");
    text("Game Start", displayWidth/2+100,160);
    Player.playerInfo();
    player.readRank();
    if(allPlayers !== undefined){
    var playerY = 130;
     background("lightBlue");
      image(bgImage,0,-displayHeight*4,displayWidth-100,displayHeight*5);
      
      var index=0;
      var carxpos = 0;
      var y;
      for(var plr in allPlayers){

        index+=1;
        carxpos= carxpos+470;
        y= displayHeight - allPlayers[plr].distance;
       // console.log("Car"+x);
       
       
       console.log(allCars[0].x);
        console.log(allCars[1].x);

        console.log(index);
        console.log("ghfhj"+allCars[0]);





        allCars[index-1].x = carxpos;
        allCars[index-1].y = y;
        

        if(index === player.index){
          allCars[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y =  allCars[index-1].y;
        }
        
      }
    }
   
   
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50;
      player.update();
    }
    if(player.distance > 4500){
      gameState = 2;
      player.rank +=1;
      player.updateRank(player.rank);
    }
    console.log(player.distance);

    drawSprites();
  }

  
  end(){
  //confirm("Game Over" + player.rank);
  alert("game Ends");
      
}
}


