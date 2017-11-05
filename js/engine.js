/**
 * Created by mariano on 5/11/17.
 */

var l = 0;
var r = 0;
class Display{
    constructor(x,y,rw,rh) {
        this.rw = rw;
        this.rh = rh;

        this.sBg = new createjs.Shape();
        this.sFg = new createjs.Shape();
        this.sText = new createjs.Text();

        //TODO:altura de las lineas a fuego
        this.sText.font = "24px VT323";
        this.sText.color = "#ade67e";
        this.lines = (this.rh / 12)-2;
        this.rows = this.rw / 10;

        this.focus = false;
    }

    draw()
    {
        this.sBg.graphics.clear();
        this.sFg.graphics.clear();

        this.sBg.graphics.beginFill("black").drawRect(0,0,canvas.width,canvas.height);
        this.sFg.graphics.setStrokeStyle(2).beginStroke("#ade67e").drawRect(0,0,canvas.width,canvas.height);


        if(l>this.lines)
        {
            l=0;
        }
        if(r>this.rows)
        {
            r=0;
        }
        l++;
        r++;
        this.setText("Hola mundo", l,r);


    }

    getLines()
    {
        return this.lines;
    }

    //LIMITS: L->29, R->49
    //TODO: Check text lenght for row position
    setText(text,line,row)
    {
        if((line<(this.lines)) && (row<(this.rows)))
        {

            this.sText.x = row * 10;
            this.sText.y = line * 12;
            this.sText.text=text;
        }
        else
        {
            console.log("Error: Text position out of range.");
        }
    }
    setFocus()
    {
        this.focus = true;
    }

    unsetFocus()
    {
        this.focus = false;
    }





}
