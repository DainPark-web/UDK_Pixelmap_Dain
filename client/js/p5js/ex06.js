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
    img.loadPixels() ;
    for(let i =0; i < img.width; i++ ){
        for(let j = 0; j < img.height; j++){
            let cCol = img.get(i, j);
            let nCol = img.get(i, j + 1);
            let rCol;

            if(lightness(cCol) > lightness(nCol)){
                rCol = [255,0,0, 255]
            }else{
                rCol = [0,0,0, 255]
            }
           
            img.set(i, j, rCol)
        }
    }

    img.updatePixels();
    image(img, WIDTH/2 - (imgW/2), HEIGHT/2 - (imgH/2), imgW, imgH)

}


function draw(){
    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}