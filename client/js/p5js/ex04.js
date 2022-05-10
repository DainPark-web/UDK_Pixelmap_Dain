const mainContainer = document.querySelector(".p5container")


let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

let img;
let imgW = 500;
let imgH = 500;

let ball;

function preload(){
    img = loadImage("../client/js/p5js/assets/test.jpg")
}

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);

    ball = new Ball(WIDTH/2, HEIGHT/2, WIDTH/2 - (imgW/2), imgW, HEIGHT/2 - (imgH/2), imgH)

    background(0);
    // img.loadPixels();
    // for(let i =0; i < img.width; i++ ){
    //     for(let j = 0; j < img.height; j++){
    //         const cCol = img.get(i, j);
    //         const getRed = red(cCol);
    //         let tCol;
    //         if(getRed > 150){
    //             tCol = [0, 100, 255, 255];
    //         }else{
    //             tCol = [255, 0, 0, 255];
    //         }

    //         img.set(i, j, tCol)
    //     }
    // }

    // img.updatePixels();
    // image(img, WIDTH/2 - (imgW/2), HEIGHT/2 - (imgH/2), imgW, imgH)

}


function draw(){
    background(0);
    ball.draw()
    ball.move()

    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}