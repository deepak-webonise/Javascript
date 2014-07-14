function Canvasapp2(eqn,step,startp,endp){
    this._eqn =eqn;
    this._step =step;
    this._startp =startp;
    this._endp =endp;
    this._c=document.getElementById("canvas");
    this._ctx=this._c.getContext("2d");
    this._x = 4;
    this._y = 6;
    this._cst = 8;


    //alert(this._eqn);

}
Canvasapp2.prototype.drawGrid2=function(){
    //draw vertical line
    for (i=0;i<=this._c.width;i+=(this._c.width)/10)
    {

        if (i == (this._c.width)/2) // Special handling for horiz/vert axes
            {
                this._ctx.lineWidth = 3; // Axes are thicker...
                this._ctx.strokeStyle = 'blue'; //... and in red
            }
            else
            {
                this._ctx.lineWidth = 1;
                this._ctx.strokeStyle = 'blue';
            }
            this._ctx.beginPath();
            this._ctx.moveTo(i, 0);
            this._ctx.lineTo(i, this._c.width);
            this._ctx.stroke();
            this._ctx.closePath();
    
    //draw horizantal line
    
            this._ctx.beginPath();
            this._ctx.moveTo(0, i);
            this._ctx.lineTo(this._c.width, i);
            this._ctx.stroke();
            this._ctx.closePath();
    }
    this._ctx.translate(this._c.width / 2, this._c.width / 2);
    this._ctx.font = '20px _sans';
    this._ctx.textBaseline = 'hanging';
    this._ctx.fillText ('0',0,0);
    for (i=-5;i<=5;i++)
     {
        if (i != 0) { 
           // horizontal label
              this._ctx.fillText (i*this._step, i*(this._c.width/10), 0);
           // vertical label
              this._ctx.fillText (i*this._step, 0, -i*(this._c.width/10));
        }

    }

}
Canvasapp2.prototype.drawLine2=function(){

        this._ctx.lineWidth = 10;
        this._ctx.strokeStyle = 'red';
                    
            this._ctx.beginPath();
            this._ctx.moveTo(0, (this._cst/this._y)* (this._c.width/10));
            this._ctx.lineTo((this._cst/this._x)* (this._c.width/10), 0);
            this._ctx.stroke();
            this._ctx.closePath();    

}
function get()
{
var eqn = document.getElementById("eqn");
var xc = 0;
var i =0;
while(eqn[i]!='x')
        {
            xc+=parseInt(eqn[i]);
            i++;
        }
        alert(xc);


var g = new Canvasapp2("x+y=0",10,10,10);
g.drawGrid2();
g.drawLine2();

}


