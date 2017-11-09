/**
 * Created by mariano on 5/11/17.
 */

class Display{
    constructor(x,y,rw,rh) {
        this.w = rw;
        this.h = rh;
        this.x = x;
        this.y = y;

        this.sBg = new createjs.Shape();
        this.sFg = new createjs.Shape();
        this.sText = new createjs.Text();

        //TODO:altura de las lineas a fuego
        //TODO: matriz de textos por cada linea
        this.sText.font = "24px VT323";
        this.sText.color = "#ade67e";
        this.lines = (this.h / 12)-2;
        this.rows = this.w / 10;

        this.focus = false;
    }

    draw()
    {
        this.sBg.graphics.clear();
        this.sFg.graphics.clear();

        this.setText("DEFCON",9,43);

        this.sBg.graphics.beginFill("black").drawRect(this.x,this.y,this.w,this.h);
        this.sFg.graphics.setStrokeStyle(2).beginStroke("#ade67e").drawRect(this.x,this.y,this.w,this.h);
        //console.log(this.sBg);
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
        this.focus = !this.focus;
    }
}

class DefconDisp extends Display
{

    setup()
    {
        this.defs = 4;
        this.currentDef = 0;

    }

    draw() {

        this.sBg.graphics.clear();
        this.sFg.graphics.clear();
        this.defH = this.h / (this.defs + 1);

        for (var i = 0; i <= this.defs;i++) {
            var color;
            var defh = this.y + i*this.defH;

            switch(i) {
                case 0:
                    color = "#FFFFFF";
                    break;
                case 1:
                    color = "#FF0000";
                    break;
                case 2:
                    color = "#FFFF00";
                    break;
                case 3:
                    color = "#00FF00";
                    break;
                case 4:
                    color = "#0000FF";
                    break;
            }
            this.sBg.graphics.beginFill(color).drawRect(this.x, defh, this.w, this.defH);
        }


        this.sFg.graphics.setStrokeStyle(2).beginStroke("#ade67e").drawRect(this.x, this.y, this.w, this.h);





    }
}