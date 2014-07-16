function Canvasapp2(step,startp,endp){
    //assigning the values to variables
    this._step =step;
    this._startp =startp;
    this._endp =endp;
    this._c=document.getElementById("canvas");
    this._ctx=this._c.getContext("2d");
    
}
Canvasapp2.prototype.set=function(x,y,cst,op){
    this._x = x ;
    this._y = y ;
    this._cst = cst;
    this._op = op;
}

Canvasapp2.prototype.drawGrid2=function(){
    //draw vertical and horizantal lines
    for (i=0;i<=this._c.width;i+=(this._c.width)/20)
    {

        if (i == (this._c.width)/2) // setting blue color for origin lines
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
    for (i=-20;i<=20;i++)
     {
        if (i != 0) { 
           // horizontal label
              this._ctx.fillText (i, i*(this._c.width/20), 0);
           // vertical label
              this._ctx.fillText (i, 0, -i*(this._c.width/20));
        }

    }

}
Canvasapp2.prototype.drawLine2=function(){
      
        var ycof=[],xcof=[];
        //setting start and end point for equation
        for(var i=this._startp; i<this._endp;i+=this._step)
        {
           //finiding the co-ordinates of x and y coefficients.
           switch(this._op) {
                                   //finding the cordinates of y coefficient depending on operator 
                                    case "+":
                                             ycof[i] = eval((this._cst - (this._x * i ))/this._y);
                                             xcof[i] = i;
                                              break;
                                    case "-":
                                             ycof[i] = eval((this._cst - (this._x * i ))/(-this._y));
                                             xcof[i] = i;
                                              break;
                                    case "*":
                                             ycof[i] = eval(this._cst / ((this._x * i )*this._y));
                                             xcof[i] = i;
                                              break;
                                    case "/":
                                             ycof[i] = eval((this._x * i )/(this._cst * this._y));
                                             xcof[i] = i;
                                              break;
  
                                    default:
                                            alert("Invalid Operator ");
                                            break;
                                }
                     
        }
        //Display X and Y cordinates
        alert("X cordinates"+xcof+"\nY cordinates"+ycof);
        //setting the font, baseline and stroke color for graph
        this._ctx.font = '15px _sans';
        this._ctx.textBaseline = 'bottom';
        this._ctx.strokeStyle='green';
        this._ctx.lineWidth=1;

        this._ctx.moveTo(xcof[this._startp] * (this._c.width/20), ycof[this._startp] * (this._c.width/20));
        for(var i=-5; i< 5;i++)
        {
                    
               for(var j=-5; j<5;j++)
                {
                        //validating x,y co-ordinates(equatio) with i,j co-ordinates (graph)
                        if((j * (this._c.width/20)) == (ycof[i] * (this._c.width/20)) && (i * (this._c.width/20)) == (xcof[i])* (this._c.width/20))
                        {
                            //fill a rectangle
                            this._ctx.fillRect(xcof[i] * (this._c.width/20),-ycof[i] * (this._c.width/20),8,8); 
                            //fill text with (x,y) co-ordinates
                            this._ctx.fillText ("("+xcof[i].toString()+","+ycof[i].toString()+")", xcof[i] * (this._c.width/20), -ycof[i] * (this._c.width/20));

                            //draw line
                             this._ctx.lineTo(xcof[i] * (this._c.width/20), -ycof[i] * (this._c.width/20));
                             
                                                       

                        }
                          


                 }
        } 
        this._ctx.stroke();   
            

}
function get()
{
    //Fetching the values from input boxes
    var eqn = document.getElementById("eqn").value;
    var step = document.getElementById("steps").value;
    var startp = document.getElementById("startp").value;
    var endp = document.getElementById("endp").value;
    //Removing spaces from equation
    eqn = eqn.replace(/ +/g, "");
    var xc=0,yc=0,cst=0;
    var i =0;
        //parsing X coefficient
        while(eqn[i]!='x')
        {
            xc+=eqn[i];
            i++;
        }
        var op = eqn[++i];
        i++;
        //parsing Y coefficient
        while(eqn[i]!='y')
        {
            yc+=eqn[i];
            i++;
        }

        i++;
        i++;
       //parsing constant
        while(i < eqn.length){

            cst+=eqn[i];
            i++;
           
        }
//creating object of Canvasapp2 function
var g = new Canvasapp2(step-0,startp-0,endp-0);
alert("Scale ="+step);
g.set(xc-0,yc-0,cst-0,op);
g.drawGrid2();
g.drawLine2();

}

