// Tint

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
        let iv = img.get(x, y);

       
        noStroke();
        fill(iv);
        ellipse((x + WIDTH/4) + sin(t * (i * 0.001)) * 100 , y, 10, 10)
    }
    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}