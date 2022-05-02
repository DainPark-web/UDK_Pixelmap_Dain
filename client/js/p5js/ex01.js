// Tint

const mainContainer = document.querySelector(".p5container")

let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;


let img;
const imgWdith = 700;
const imgHeight = 1000;

let tintSliderR;
let tintSliderG;
let tintSliderB;

function preload() {
    img = loadImage("../client/js/p5js/assets/test.jpg");
  }

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    
    // slider
    tintSliderR = createSlider(0, 255, 100);
    tintSliderR.position(30, HEIGHT-50);
    tintSliderR.style("width", "200px")
    tintSliderG = createSlider(0, 255, 100);
    tintSliderG.position(30, HEIGHT-100);
    tintSliderG.style("width", "200px")
    tintSliderB = createSlider(0, 255, 100);
    tintSliderB.position(30, HEIGHT-150);
    tintSliderB.style("width", "200px")
    // rectMode(CENTER);

    textSize(15);
    textAlign(CENTER, CENTER);
}

function draw(){
    background(0);
    // 01 Ex tint
    let tintVR = tintSliderR.value();
    let tintVG = tintSliderG.value();
    let tintVB = tintSliderB.value();
    fill(255)
    text("R", 30 + 230, HEIGHT-50 + 8)
    text("G", 30 + 230, HEIGHT-100 + 8)
    text("B", 30 + 230, HEIGHT-150 + 8)
    tint(tintVR, tintVG,tintVB);
    image(img,WIDTH/2 - (imgWdith/2), HEIGHT/2 - (imgHeight/2), imgWdith, imgHeight)
   
    
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}