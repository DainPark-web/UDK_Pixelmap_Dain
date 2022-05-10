class Ball{
    constructor(x, y, wsp, imgW, hsp, imgH){
        this.x = x;
        this.y = y;
        this.wStartPoint = wsp;
        this.wL = imgW;
        this.hStartPoint = hsp;
        this.hL = imgH;
    }

    draw(){
        fill(2555)
        ellipse(this.x, this.y, 10, 10);
    }


}