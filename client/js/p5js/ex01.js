const mainContainer = document.querySelector(".p5container")

let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    rectMode(CENTER);
    
}

function draw(){
    background(0);
    rect(width/2, height/2, 100, 100)
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}