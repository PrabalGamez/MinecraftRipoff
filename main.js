var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_image_height=30;
block_image_width=30;
player_img="";
block_img="";

function player_update(){
    fabric.Image.fromURL("player.png", function(IMG){
     player_img=IMG;
     player_img.scaleToHeight(140);
     player_img.scaleToWidth(150);
     player_img.set({
         top:player_y,
         left:player_x
     });
     canvas.add(player_img);
    });
}

function block_update(getImg){
    fabric.Image.fromURL(getImg, function(IMG){
        block_img=IMG;
        block_img.scaleToHeight(block_image_height);
        block_img.scaleToWidth(block_image_width);
        block_img.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    console.log("Key pressed is"+keypressed);
    if(e.shiftKey == true && keypressed == "80"){
        console.log("Shift and P are pressed together :)");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width + 10;
        document.getElementById("Current_Width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;
    }
    if(e.shiftKey == true && keypressed == "77"){
        console.log("Shift+M");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;
        document.getElementById("Current_Width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;
        if(block_image_height <= 10){
         block_image_height=10;
         block_image_width=10;
         document.getElementById("Current_Width").innerHTML=block_image_width;
        document.getElementById("Current_Height").innerHTML=block_image_height;
        }
    }
    if(keypressed == "38"){
        Up();
        console.log("UP");
    }
    if(keypressed == "40"){
        Down();
        console.log("Down");
    }
    if(keypressed == "37"){
        Left();
        console.log("Left");
    }
    if(keypressed == "39"){
        Right();
        console.log("Right");
    }
    if(keypressed == "66"){
        block_update("Brick.jpg");
        console.log("B");
    }
    if(keypressed == "71"){
        block_update("Glowstone.png");
        console.log("G");
    }
    if(keypressed == "68"){
        block_update("Grass side.png");
        console.log("D");
    }
    if(keypressed == "84"){
        block_update("Grass Top.png");
        console.log("T");
    }
    if(keypressed == "76"){
        block_update("Leaf.png");
        console.log("L");
    }
    if(keypressed == "79"){
        block_update("log.jpg");
        console.log("OOOOO");
    }
    if(keypressed == "78"){
        block_update("Netherrack.jpg");
        console.log("N");
    }
    if(keypressed == "69"){ //Noice
        block_update("Prabal.png");
        console.log("(rush) EEEEEEEEEEEEEEEEEEEEEEE(Nice)");
    }
    if(keypressed == "83"){
        block_update("Stone.jpg");
        console.log("Stone is made of Stone :)");
    }
}

function Up(){
if(player_y >= 0){
player_y = player_y - block_image_height;
console.log("block image height=" + block_image_height);
console.log("when up arrow is clicked, x="+player_x+"y="+player_y);
canvas.remove(player_img);
player_update();
}
}
function Down(){
if(player_y <= 470){
player_y = player_y + block_image_height;
console.log("block image height=" + block_image_height);
console.log("when down arrow is clicked, x="+player_x+"y="+player_y);
canvas.remove(player_img);
player_update();
}
}

function Left(){
    if(player_x >= 0){
     player_x = player_x - block_image_width;
     console.log("block image width=" + block_image_width);
     console.log("when Left arrow is clicked, x="+player_x+"y="+player_y);
     canvas.remove(player_img);
     player_update();
    }
}
function Right(){
    if(player_x <= 870){
     player_x = player_x + block_image_width;
     console.log("block image width=" + block_image_width);
     console.log("when Right arrow is clicked, x="+player_x+"y="+player_y);
     canvas.remove(player_img);
     player_update();
    }
}