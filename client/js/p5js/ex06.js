const mainContainer = document.querySelector(".p5container")


let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

let img;
let imgW = 800;
let imgH = 800;

function preload(){
    img = loadImage("../client/js/p5js/assets/test.jpg")
}

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    // 
    fill(255)
    background(0);
    textSize(12);
    // img.loadPixels();
    for(let i =0; i < img.width; i++ ){
        for(let j = 0; j < img.height; j++){
            const cCol = img.get(i, j);
            const getRed = red(cCol);
            let tCol;
            if(getRed > 150){
                tCol = [0, 100, 255, 255];
                // fill(tCol)
               
                text("Cola", i, j)
            }else{
                tCol = [255, 0, 0, 255];
                // fill(tCol)
                // textSize(32);
                text("Coca", i, j)
            }

            // img.set(i, j, tCol)
        }
    }

    // img.updatePixels();
    // image(img, WIDTH/2 - (imgW/2), HEIGHT/2 - (imgH/2), imgW, imgH)

}


function draw(){
    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}