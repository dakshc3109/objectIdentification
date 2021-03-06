var img = "";
var status = ""; 
object = [];

function setup(){
    canvas = createCanvas(380, 380);
    //canvas.center();
    canvas.position(330, 120);;
    objetDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting object";
    video = createCapture(VIDEO);
    video.size(380, 380)
    video.hide();
}

function preload(){
    //img = loadImage("dog_cat.jpg");
}

function draw(){
    image(video, 0, 0, 380, 380);
    /*stroke("#ff0000");
    fill("#ff0000");
    text("Dog", 130, 75);
    noFill();
    rect(120, 60, 250, 300);

    stroke("#ff0000");
    fill("#ff0000");
    text("Cat", 320, 120);
    noFill();
    rect(310, 110, 250, 300);*/
    if(status != ""){
        objetDetector.detect(video, gotResult);
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: object detected";
            fill("#ff0000");
            percent = floor(object[i].confidence*100);
            console.log(percent);
            text(object[i].label+" "+percent+"%", object[i].x+5, object[i].y+15);
            console.log(object[i].label+" "+percent+"%");
            noFill();
            stroke("#ff0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            console.log(object[i].x+" "+object[i].y);
            document.getElementById("number-of-objects").innerHTML = "Nuber of objects detected: "+object.length;
        }
    }
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
    objetDetector.detect(video, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error();
    }
    else{
        object = results;
        console.log(object);
    }
}