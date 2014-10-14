var c, ctx, bollX = 100, bollY = 100, bollVX =-1, bollVY = 2;
var leftPLY = 100, rightPLY = 200, leftPLVY = 0, rightPLVY = 0;
var hastighet = 4;

function init () {
    c = document.getElementById("duk");
    ctx = c.getContext("2d");
    
    //Kör update var 20e ms
    window.setInterval(update, 20);
}

function update(){
    //Sudda canvas
    ctx.clearRect(0, 0, c.width, c.height);
    //Måla boll
    ctx.beginPath();
    ctx.arc(bollX, bollY, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    //Måla paddlar
    ctx.fillRect(10, leftPLY, 20, 50);
    ctx.fillRect(370, rightPLY, 20, 50);
    
    // Flytta boll
    bollX = bollX + bollVX;
    bollY = bollY + bollVY;
    
    //Flytta spelare
    leftPLY = leftPLY + leftPLVY;
    rightPLY = rightPLY + rightPLVY;
    
    // Studs i nederkant
    if (bollY > 300) {
    bollVY = -bollVY;
    bollY = 300;
    }
    
    // Studs i överkant
    if (bollY < 0) {
    bollVY = -bollVY;
    bollY = 0;
    }
    //Studs mot spelare
    if(bollX>10 && bollX < 30 && bollY > leftPLY && bollY < leftPLY + 50){
        bollVX = - bollVX;
    }
    if(bollX>370 && bollX<390 &&bollY > rightPLY && bollY < rightPLY + 50){
        bollVX = bollVX * (-1);
    }
    
    //hindra rutorna från att fly
    if(leftPLY < 0){
    leftPLVY = 0;
    leftPLY = 0;
    }
    if(leftPLY > 250){
    leftPLVY = 0;
    leftPLY = 250;
    }
    if(rightPLY < 0){
    rightPLVY = 0;
    rightPLY = 0;
    }
    if(rightPLY > 250){
    rightPLVY = 0;
    rightPLY = 250;
    }
    
    if(bollX > 400){
        rb();
    }
    if(bollX < 0){
        rb();
    }
    

}
  function rb(){
        bollX = 200;
        bollY = 150;
        bollVX = 0;
        bollVY= 0;
  }  

//Kontroller
function keyDown(e){
    //Knapp tryck uppåt
    if(e.keyCode == 87){
        leftPLVY = -hastighet;
    }
    
    else if(e.keyCode == 83){
        leftPLVY = hastighet;
    }
    
    else if(e.keyCode == 38){
        rightPLVY = -hastighet;
    }
    else if(e.keyCode == 40){
        rightPLVY = hastighet
    }
    else if(e.keyCode == 32){
        bollVX =-1;
        bollVY = 2;
    }
}