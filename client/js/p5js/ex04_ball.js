class Ball{
    constructor(x, y, wsp, imgW, hsp, imgH, img){
        this.x = x;
        this.y = y;
        this.wStartPoint = wsp;
        this.wL = imgW;
        this.hStartPoint = hsp;
        this.hL = imgH;
        this.sy = random(0.5, 1)
        this.acc = random(0.1, 0.4);
        this.img = img
        this.col = [255, 255,255,255];
        this.sx = random(0.5, 2);

    }

    draw(){
        // noStroke()
        fill(this.col)
        rect(this.x, this.y, 10, 10);
    }

    move(){
        this.sy += this.acc;
        this.y += this.sy;

        this.x += sin(this.sx) * 3;

        this.sx += this.acc;
        const getC = this.img.get(this.x , this.y);
        // 01 Experiment
        const getR = red(getC);
        if(getR > 200){
            this.col = [100,200,0,255]
        }else if(getR > 150){
            this.col = [200,0,0,255]
        }else if(getR > 100){
            this.col = [0,0,255,255]
        }else{
            this.col = [0,100,255,255]
        }
        
        // 02 Experiment
        // this.col = getC
        if(this.y > this.hStartPoint + this.hL){
            this.y = this.hStartPoint;
            this.sy = random(0.5, 1);
            this.sx = random(0.5, 2);
            this.x = random(this.wL);

        }
    
    }


}