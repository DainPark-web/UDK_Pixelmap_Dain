const mainContainer = document.querySelector(".p5container")


let WIDTH = mainContainer.clientWidth;
let HEIGHT = mainContainer.clientHeight;

let img;
let imgW = 800;
let imgH = 800;
let pixelSize = 30


let dataList = [
    {
        title: "p0",
        angle: 0
    },
    {
        title: "p1",
        angle: 0
    },
    {
        title: "p2",
        angle: 0
    },
    {
        title: "p3",
        angle: 0
    },
    {
        title: "p4",
        angle: 0
    },
    {
        title: "p5",
        angle: 0
    },
    {
        title: "p6",
        angle: 0
    },
    {
        title: "p7",
        angle: 0
    },
    {
        title: "p8",
        angle: 0
    },
]


function preload(){
    img = loadImage("../client/js/p5js/assets/test.jpg")
}

function setup (){
    let canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent(mainContainer);
    strokeWeight(2)

  
    

    background(0);
    
   
    // image(img, WIDTH/2 - (imgW/2), HEIGHT/2 - (imgH/2), imgW, imgH)

}

function getAngleDate(i, j, a){
    //  //p0
    // if(i === 0 && j === 0){
    //     dataList[0].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    // //p1
    // if(j === 0 &&  (floor(i) < floor(img.width/4) + 15 && floor(i) > floor(img.width/4) - 15)){
    //     dataList[1].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,200)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    // //p2
    // if(j === 0 && (floor(i) < floor(img.width/2) + 15 && floor(i) > floor(img.width/2) - 15)){
    //     dataList[2].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    //  //p3
    //  if((floor(j) < floor(img.height/6) + 15 && floor(j) > floor(img.height/6) - 15) && i === 0){
    //     dataList[3].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    //  //p4
    //  if((floor(j) < floor(img.height/6) + 15 && floor(j) > floor(img.height/6) - 15) && (floor(i) < floor(img.width/4) + 15 && floor(i) > floor(img.width/4) - 15)){
    //     dataList[4].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    //  //p5
    //  if((floor(j) < floor(img.height/6) + 15 && floor(j) > floor(img.height/6) - 15) && (floor(i) < floor(img.width/2) + 15 && floor(i) > floor(img.width/2) - 15)){
    //     dataList[5].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    //  //p6
    //  if((floor(j) < floor(img.height/3) + 20 && floor(j) > floor(img.height/2.5) - 85) && i === 0){
    //     dataList[6].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    //  //p7
    //  if((floor(j) < floor(img.height/3) + 20 && floor(j) > floor(img.height/2.5) - 85) && (floor(i) < floor(img.width/4) + 15 && floor(i) > floor(img.width/4) - 15)){
    //     dataList[7].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
    //  //p8
    //  if((floor(j) < floor(img.height/3) + 20 && floor(j) > floor(img.height/2.5) - 85) && (floor(i) < floor(img.width/2) + 15 && floor(i) > floor(img.width/2) - 15)){
    //     dataList[8].angle = (a * 120)/2;
    //     push();

    //         fill(0,200,0)
    //         rotate(-(a - 45))
    //         rect(i, j, 30, 30)
    //     pop();
    // }
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
                       
                        if(lightness(pC) > 50 ){
                            stroke(0, 0,200)
                            // line(i - pixelSize,j - pixelSize,i, j)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)

                               
                                getAngleDate(i, j, a)
                               
                            pop();
                        }else{
                            stroke(255)
                            push()
                                let a = atan2(mouseY - j, (mouseX - width/4) - i);
                                translate(i, j)
                                rotate(a - 45)
                                line(0,0,pixelSize, pixelSize)
                                getAngleDate(i, j, a)
                               
                            pop();
                        }
                pop();
            }
        }
    pop()
    push()
    for(let i = 0; i < dataList.length; i++ ){
        push()
        const col = map(dataList[i].angle, -180, 180, 0, 255);
        fill(col)
        

        rect(20, (i * 100) + 20, 40, 40)
        pop()
    }

    pop()
    // console.log(dataList[1].angle)
}

function windowResized(){
    WIDTH = mainContainer.clientWidth;
    HEIGHT = mainContainer.clientHeight;
    resizeCanvas(WIDTH, HEIGHT);
}