var img = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
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
}