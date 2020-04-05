//create a canvas object to draw hands 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//create a canvas object for image
var c = document.getElementById('canvas');
var contex = c.getContext('2d');

//global variable for image and the radius of hands 
var radius;
var img;


window.onload = function() {
    
    //once the image is drwan on canvas that can not be removed so that we need to draw the background every time 
    //draw background every second
    setInterval(drawBackground,1000);
    
     //run the drawClock function every second.
    setInterval(drawClock, 1000);
    
}

function drawBackground() {
    //set the x and y axix to the corner of the page once the hands are drawn 
    radius = radius / 0.90;
    contex.translate(-radius, -radius);
    
    //Draw background image
    img = document.getElementById("background");
    contex.drawImage(img,0,0);
}

function drawClock(){
    
    //call the function with parameters
    drawTime(ctx,img);
    
}

function drawTime(ctx,img){
    
    //set the radius of the hands according to the background image
    radius = img.height /2;
    
    //set x and y axis to the center of the image 
    ctx.translate(radius, radius);
    
    //reduce the radius by 90%
    radius = radius * 0.90;
   
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    
    //calculate angle of hour hand
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    
    //make hour hand 50% of canvas's radius
    drawHand(ctx, hour, radius*0.5, radius*0.05);
    
    //minute
    //calculate angle of minute hand
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    
    //make minute hand 80% of canvas's radius
    drawHand(ctx, minute, radius*0.8, radius*0.05);
    
    //second
    //calculate angle of second hand
    second=(second*Math.PI/30);
    
    //make second hand 90% of canvas's radius
    drawHand(ctx, second, radius*0.9, radius*0.01);
    
}

function drawHand(ctx, pos, length, width){
    ctx.beginPath();
    
    //width of the hand
    ctx.lineWidth = width;
    
    //the end of the hand 
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    
    //length of the hand
    ctx.lineTo(0, -length);
    
    //set colour of the hands
    ctx.strokeStyle = "#685b4e";
    ctx.stroke();
    ctx.rotate(-pos);
    
}
