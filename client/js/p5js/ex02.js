const mainContainer = document.querySelector(".p5container")

let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;


let img;
const imgWdith = 700;
const imgHeight = 1000;


let t = 0;
function preload() {
    img = loadImage("../client/js/p5js/assets/test.jpg");
  }

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    
  
    background(0);
    // image(img, 0, 0, 300, 300)
    
    
   
    
}

function draw(){
    // background(0)
   t += 0.1;
    for(let i = 0; i < 500; i++){
        let x = random(width);
        let y = random(height);
        let cCol = img.get(x, y);
        const getRed = red(cCol);
        let tCol;
            if(getRed > 200){
                tCol = [0, 109, 119, 255];
            }else if(getRed > 100){
                tCol = [131, 197, 190, 255];
            }else if(getRed > 50){
                tCol = [237, 246, 249, 255];
            }
            else{
                tCol = [0, 0, 0, 255];
            }

       
        noStroke();
        fill(tCol);
        ellipse((x + WIDTH/4) , y, 10, 10)
    }
    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}