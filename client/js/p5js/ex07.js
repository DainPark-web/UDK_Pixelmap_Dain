const mainContainer = document.querySelector(".p5container")


let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

let img;
let imgW = 800;
let imgH = 800;
let mod = 1500;

function preload(){
    img = loadImage("../client/js/p5js/assets/test.jpg")
}

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);

  
    background(0);
    let pixelSize = 20
    push()
    translate(imgW/2, 0)
    for(let i =0; i < img.width; i += pixelSize ){
        for(let j = 0; j < img.height; j += pixelSize){
         const pC = img.get(i, j);
        fill(pC)
         rect(i, j, pixelSize);
        }
    }
    pop()


    // image(img, WIDTH/2 - (imgW/2), HEIGHT/2 - (imgH/2), imgW, imgH)

}


function draw(){
    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}