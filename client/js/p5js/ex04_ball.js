class Ball{
    constructor(x, y, wsp, imgW, hsp, imgH){
        this.x = x + wsp;
        this.y = y;
        this.wStartPoint = wsp;
        this.wL = imgW;
        this.hStartPoint = hsp;
        this.hL = imgH;
        this.sy = random(1, 4)
        this.acc = random(0.1, 0.4);

    }

    draw(){
        fill(255)
        ellipse(this.x, this.y, 10, 10);
    }

    move(){
        this.sy += this.acc;
        this.y += this.sy;

        if(this.y > this.hStartPoint + this.hL){
            this.y = this.hStartPoint;
            this.sy = random(1, 4);
        }
    
    }


}