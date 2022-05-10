const mainContainer = document.querySelector(".p5container")


let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

let img;
let imgW = 900;
let imgH = 800;

let ball;
let balls = []

let ballCount = 1000;

function preload(){
    img = loadImage("../client/js/p5js/assets/test.jpg")
}

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);

    for(let i = 0; i < ballCount; i++){
        const randomW = random(imgW);
        const h = HEIGHT/2 - (imgH/2);
        balls.push(new Ball(randomW, h, WIDTH/2 - (imgW/2), imgW, HEIGHT/2 - (imgH/2), imgH, img))
    }

    background(0);
}


function draw(){
    background(0,0,0,10);
    translate(800 / 2, 0)
    for(let i = 0; i < balls.length; i++){
        
        balls[i].draw();
        balls[i].move();

    }

    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}