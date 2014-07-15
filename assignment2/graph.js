function Canvasapp2(step,startp,endp){
    this._step =step;
    this._startp =startp;
    this._endp =endp;
    this._c=document.getElementById("canvas");
    this._ctx=this._c.getContext("2d");
    


    //alert(this._eqn);

}
Canvasapp2.prototype.set=function(x,y,cst,op){
    this._x = x ;
    this._y = y ;
    this._cst = cst;
    this._op = op;
}

Canvasapp2.prototype.drawGrid2=function(){
    //draw vertical line
    for (i=0;i<=this._c.width;i+=(this._c.width)/10)
    {

        if (i == (this._c.width)/2) // different colors for origin lines
            {
                this._ctx.lineWidth = 3; // line width
                this._ctx.strokeStyle = 'blue'; //line color
            }
            else
            {
                this._ctx.lineWidth = 1;
                this._ctx.strokeStyle = 'red';
            }
            //draw vertical line
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
    for (i=-10;i<=10;i++)
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
      
        var ycof=[],xcof=[];
        for(var i=0; i< 5;i++)
        {
           //finiding the co-ordinates of x and y coefficients.
           switch(this._op) {
                                   //finding the cordinates of y coefficient depending on operator 
                                    case "+":
                                             ycof[i] = eval((this._cst - (this._x * i ))/this._y);
                                              break;
                                    case "-":
                                             ycof[i] = eval((this._cst - (this._x * i ))/(-this._y));
                                              break;
                                    case "*":
                                             ycof[i] = eval(this._cst / ((this._x * i )*this._y));
                                              break;
                                    case "/":
                                             ycof[i] = eval((this._x * i )/(this._cst * this._y));
                                              break;
  
                                    default:
                                            alert("Invalid Operator ");
                                            break;
                                }
 
            //adding x co-oedinates 
            xcof[i] = i;
            
        }
        alert("X cordinates"+xcof+"\nY cordinates"+ycof);
        
        this._ctx.font = '15px _sans';
        this._ctx.textBaseline = 'bottom';
        this._ctx.strokeStyle='blue';
        for(var i=-5; i< 5;i++)
        {
                    
                for(var j=-5; j<5;j++)
                {
                        //validating x,y co-ordinates(equatio) with i,j co-ordinates (graph)
                        if((j * (this._c.width/10)) ==(ycof[i] * (this._c.width/10)) && (i * (this._c.width/10)) == (xcof[i])* (this._c.width/10))
                        {
                            //fill a rectangle
                            this._ctx.fillRect(xcof[i] * (this._c.width/10),-ycof[i] * (this._c.width/10),10,10); 
                            //fill text with (x,y) co-ordinates
                            this._ctx.fillText ("("+xcof[i].toString()+","+ycof[i].toString()+")", xcof[i] * (this._c.width/10), -ycof[i] * (this._c.width/10));

                            this._ctx.moveTo(xcof[i] * (this._c.width/10), -ycof[i] * (this._c.width/10));
                             this._ctx.lineTo(xcof[++i] * (this._c.width/10), -ycof[++i] * (this._c.width/10));
                             this._ctx.stroke();
                                                       

                        }
                          


                 }
        }    
            

}
function get()
{
var eqn = document.getElementById("eqn").value;
var step = document.getElementById("steps").value;
var startp = document.getElementById("startp").value;
var endp = document.getElementById("endp").value;
eqn = eqn.replace(/ +/g, "");
var xc=0,yc=0,cst=0;
var i =0;

        while(eqn[i]!='x')
        {
            xc+=eqn[i];
            i++;
        }
        var op = eqn[++i];
        i++;
        
        while(eqn[i]!='y')
        {
            yc+=eqn[i];
            i++;
        }

        i++;
        i++;
       
        while(i < eqn.length){

            cst+=eqn[i];
            i++;
           
        }

var g = new Canvasapp2(step,startp,endp);
alert(step);
g.set(xc-0,yc-0,cst-0,op);
g.drawGrid2();
g.drawLine2();

}


