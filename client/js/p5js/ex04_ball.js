class Ball{
    constructor(x, y, wsp, imgW, hsp, imgH){
        this.x = x + wsp;
        this.y = y;
        this.wStartPoint = wsp;
        this.wL = imgW;
        this.hStartPoint = hsp;
        this.hL = imgH;
    }

    draw(){
        fill(255)
        ellipse(this.x, this.y, 10, 10);
    }

    move(){
        this.y += 1;
        if(this.y > this.hStartPoint + this.hL){
            this.y = this.hStartPoint;
        }
    
    }


}