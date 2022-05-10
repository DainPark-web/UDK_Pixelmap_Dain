class Ball{
    constructor(x, y, wsp, imgW, hsp, imgH, img){
        this.x = x;
        this.y = y;
        this.wStartPoint = wsp;
        this.wL = imgW;
        this.hStartPoint = hsp;
        this.hL = imgH;
        this.sy = random(0.5, 2)
        this.acc = random(0.1, 0.4);
        this.img = img
        this.col = [255, 255,255,255];

    }

    draw(){
        noStroke()
        fill(this.col)
        rect(this.x, this.y, 10, 10);
    }

    move(){
        this.sy += this.acc;
        this.y += this.sy;
        const getC = this.img.get(this.x , this.y);
        // const getR = red(getC);
        // if(getR > 200){
        //     this.col = [100,200,0,200]
        // }else if(getR > 100){
        //     this.col = [200,0,0,255]
        // }else if(getR > 50){
        //     this.col = [200,0,255,255]
        // }
        

        this.col = getC
        if(this.y > this.hStartPoint + this.hL){
            this.y = this.hStartPoint;
            this.sy = random(1, 4);
        }
    
    }


}