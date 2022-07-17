const mainContainer = document.querySelector(".p5container")


let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

let img;
let imgW = 800;
let imgH = 800;
let pixelSize = 9

function preload(){
    img = loadImage("../client/js/p5js/assets/dog.jpg")
}

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    strokeWeight(2)

  
    

    background(0);
    
   
    // image(img, WIDTH/2 - (imgW/2), HEIGHT/2 - (imgH/2), imgW, imgH)

}


function draw(){
    background(0,0,0,5);
    push()
        translate(WIDTH/4, 0)
        noFill();
        for(let i =0; i < img.width; i += pixelSize ){
            for(let j = 0; j < img.height; j += pixelSize){
                const pC = img.get(i, j);
                push()
                        if(lightness(pC) < 10 ){
                            stroke(0, 0,0)
                            // line(i - pixelSize,j - pixelSize,i, j)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                            pop();
                        }else if(lightness(pC) < 20 ){
                            stroke(0,0,0)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                            pop();
                        }else if(lightness(pC) < 30 ){
                            stroke(200,0,0)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                            pop();
                        }else if(lightness(pC) < 40 ){
                            stroke(80,30,30)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                            pop();
                        }else if(lightness(pC) < 50 ){
                            stroke(100,0,0)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                            pop();
                        }  
                        else{
                            stroke(0)
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