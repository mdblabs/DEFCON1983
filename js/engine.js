/**
 * Created by mariano on 5/11/17.
 */

lineh = 12;
charw = 10;

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
        this.lines = Math.floor(this.h / lineh);
        this.rows = Math.floor(this.w / charw);

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
            this.sText.x = this.x + row * charw;
            this.sText.y = this.y + line * lineh;
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
        this.currentDef = 4;
    }

    setDefcon(def) {
        if(def<5)
            this.currentDef = def;
    }

    setFocus()
    {
        this.focus = !this.focus;
    }

    draw() {
        console.log(this.getLines());

        this.sBg.graphics.clear();
        this.sFg.graphics.clear();
        this.defH = this.h / 5;

        for (var i = 0; i <= 4;i++) {
            var color;
            var defh =(this.y + this.h) - (i+1)*this.defH;

            switch(i) {
                case 4:
                    if (i==this.currentDef)
                        color = "#0000FF";
                    else
                        color = "#000077";
                    break;
                case 3:
                    if (i==this.currentDef)
                        color = "#00FF00";
                    else
                        color = "#007700";
                    break;
                case 2:
                    if(i==this.currentDef)
                        color = "#FFFF00";
                    else
                        color = "#777700";
                    break;
                case 1:
                    if(i==this.currentDef)
                        color = "#FF0000";
                    else
                        color = "#770000";
                    break;
                case 0:
                    if(i==this.currentDef)
                        color = "#FFFFFF";
                    else
                        color = "#777777";
                    break;
            }
            this.sBg.graphics.beginFill(color).drawRect(this.x, defh, this.w, this.defH);
        }
        this.setText(this.currentDef+1,8-2*this.currentDef,1);
        this.currentDef++;
        if (this.currentDef==5)
            this.currentDef = 0;
        this.sFg.graphics.setStrokeStyle(2).beginStroke("#ade67e").drawRect(this.x, this.y, this.w, this.h);

    }
}
