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
    for(let i =0; i < img.width ; i++ ){
        for(let j = 0; j < img.height; j++){
            let cCol = img.get(int((mod % (abs(i - img.width/2) - img.width/2)) + 100), int(mod % (abs((j - img.height/2))- img.height/2)));
            
            const getRed = red(cCol);
            let tCol;
            if(getRed > 200){
                tCol = [0, 0, 0, 255];
            }else if(getRed > 100){
                tCol = [255, 200, 0, 255];
            }else if(getRed > 50){
                tCol = [0, 200, 100, 255];
            }else{
                tCol = [255, 255, 255, 255];
            }
            // tCol = cCol;
            img.set(i, j, tCol)
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