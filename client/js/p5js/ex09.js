const mainContainer = document.querySelector(".p5container")


let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

let img;
let imgW = 800;
let imgH = 800;
let mod = 1500;
let pixelSize = 30

function preload(){
    img = loadImage("../client/js/p5js/assets/test.jpg")
}

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    strokeWeight(8)

  
    

    background(0);
    
    // push()
    //     translate(WIDTH/4, 0)
    //     noFill();
    //     for(let i =0; i < img.width; i += pixelSize ){
    //         for(let j = 0; j < img.height; j += pixelSize){
    //             const pC = img.get(i, j);
    //             push()
    //             let a = atan2(mouseY - j, mouseX - i);
    //             rotate(a)
    //             if(lightness(pC) > 50 ){
    //                 stroke(200, 0,0)
    //                 line(i - pixelSize,j - pixelSize,i, j)
    //             }else{
    //                 stroke(0, 200, 0)
    //                 line(i - pixelSize,j - pixelSize,i, j)
    //             }
    //             pop();
    //         }
    //     }
    // pop()
    // image(img, WIDTH/2 - (imgW/2), HEIGHT/2 - (imgH/2), imgW, imgH)

}


function draw(){
    background(0);
    push()
        translate(WIDTH/4, 0)
        noFill();
        for(let i =0; i < img.width; i += pixelSize ){
            for(let j = 0; j < img.height; j += pixelSize){
                const pC = img.get(i, j);
                push()
                    
                   
                        if(lightness(pC) > 50 ){
                            stroke(0, 0,200)
                            // line(i - pixelSize,j - pixelSize,i, j)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                            pop();
                        }else{
                            stroke(255)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                            pop();
                        }
                    
                pop();
            }
        }
    pop()
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}