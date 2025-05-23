class Resistor{
    protected width: number;
    protected height: number=40;
    protected u: number=20;
    constructor(protected r: number, protected nimetus: string, protected g, 
         protected startx: number, protected endx: number, 
          protected y: number){
        this.width=this.endx-this.startx;
        this.draw();
    }
    draw(){
        this.g.clearRect(this.startx, this.y-this.height/2, this.width, this.height);
        this.g.beginPath();
        this.g.moveTo(this.startx, this.y);
        this.g.lineTo(this.startx+this.width/4, this.y);
        this.g.rect(this.startx+this.width/4, this.y-this.height/3, this.width/2, this.height*2/3);
        this.g.moveTo(this.startx+this.width*3/4, this.y);
        this.g.lineTo(this.endx, this.y);
        this.g.stroke();
        this.g.fillText(this.r+" Ω", this.startx+this.width/3, this.y+3);
        this.g.fillText(this.u+" V", this.startx+this.width/4, this.y-this.height/3-2);
        this.g.fillText(this.nimetus, this.startx+22, this.y+22)
    }
    setR(r:number){
        this.r=r;
        this.draw();
    }
    getR():number{
        return this.r;
    }
}