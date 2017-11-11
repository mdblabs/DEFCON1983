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
        this.sBgImage = new createjs.Bitmap();

        //TODO:altura de las lineas a fuego
        //TODO: matriz de textos por cada linea
        this.sText.font = "14px VT323";
        this.sText.color = "#ade67e";
        this.lines = Math.floor(this.h / lineh);
        this.rows = Math.floor(this.w / charw);

        this.focus = false;
    }

    setup()
    {

    }

    draw()
    {
        this.sBg.graphics.clear();
        this.sFg.graphics.clear();

        this.setText("DEFCON",10,44);


        this.sBg.graphics.beginFill("black").drawRect(this.x,this.y,this.w,this.h);
        this.sFg.graphics.setStrokeStyle(1).beginStroke("#ade67e").drawRect(this.x,this.y,this.w,this.h);
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
        this.setDefcon(5);
    }

    setDefcon(def) {
        if(def<6)
            this.currentDef = def-1;
    }

    setFocus()
    {
        this.focus = !this.focus;
    }

    draw() {
        this.sBg.graphics.clear();
        this.sFg.graphics.clear();
        this.defH = this.h / 5;

        for (var i = 0; i <= 4;i++) {
            var color;
            var defh =this.y + i*this.defH;

            switch(i) {
                case 4:
                    if (i==this.currentDef) {
                        color = "#0000FF";
                        this.sText.color="#FFFFFF";
                    }
                    else
                        color = "#000077";
                    break;
                case 3:
                    if (i==this.currentDef){
                        color = "#00FF00";
                        this.sText.color="#000000";
                    }
                    else
                        color = "#007700";
                    break;
                case 2:
                    if(i==this.currentDef) {
                        color = "#FFFF00";
                        this.sText.color="#000000";
                    }
                    else
                        color = "#777700";
                    break;
                case 1:
                    if(i==this.currentDef) {
                    if(i==this.currentDef)
                        color = "#FF0000";
                        this.sText.color = "#000000";
                    }
                    else
                        color = "#770000";
                    break;
                case 0:
                    if(i==this.currentDef) {
                        color = "#FFFFFF";
                        this.sText.color = "#000000";
                    }
                    else
                        color = "#777777";
                    break;
            }
            this.sBg.graphics.beginFill(color).drawRect(this.x, defh, this.w, this.defH);
        }
        this.setText(this.currentDef+1,this.currentDef,0.75);

        this.sFg.graphics.setStrokeStyle(1).beginStroke("#ade67e").drawRect(this.x, this.y, this.w, this.h);

    }
}

class Map {
    constructor(x,y,image_url){
        this.sBackground = new createjs.Bitmap(image_url);
        this.sBackground.x = x;
        this.sBackground.y = y;
        this.sBackground.scaleX=1/1.90;
        this.sBackground.scaleY=1/1.65;
    }

}
