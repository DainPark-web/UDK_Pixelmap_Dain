const mainContainer = document.querySelector(".testclass")


let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
}


function draw(){
    background(0);
    rect(width/2, height/2, 30, 30)
}

function windowResized(){
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    resizeCanvas(WIDTH, HEIGHT);
}