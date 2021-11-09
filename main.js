var img = "";
var status = ""; 

function setup(){
    canvas = createCanvas(640, 420);
    //canvas.center();
    canvas.position(330, 120);;
    objetDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting object";
}

function preload(){
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
    stroke("#ff0000");
    fill("#ff0000");
    text("Dog", 130, 75);
    noFill();
    rect(120, 60, 250, 300);

    stroke("#ff0000");
    fill("#ff0000");
    text("Cat", 320, 120);
    noFill();
    rect(310, 110, 250, 300);
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
    objetDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error();
    }
    else{
        console.log(results);
    }
}