const mainContainer = document.querySelector(".p5container")

let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;


let img;
function preload() {
    img = loadImage("../client/js/p5js/assets/dain.jpg");
  }

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    background(0);
    rectMode(CENTER);
    image(img, 0, 0, 400, 400)
}

function draw(){
    
   
    // rect(width/2, height/2, 100, 100)
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}