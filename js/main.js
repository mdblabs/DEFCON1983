/**
 * Created by mariano on 2/11/17.
 */

var KEYCODE_LEFT = 37,
    KEYCODE_RIGHT = 39,
    KEYCODE_UP = 38,
    KEYCODE_DOWN = 40,
    KEYBOARD_ESC = 27;

var stage;
var bg;
var fg;
var text;
var tFly;

var canvas;
var wOriginal = 500;
var hOriginal = 375;
var reload = false;

function init(){
    // code here.

    canvas = document.getElementById("game_canvas");
    stage = new createjs.Stage("game_canvas");
    createBackground();

    createjs.Ticker.addEventListener("tick",ticUpdate);

}

function createBackground() {

    bg = new createjs.Shape();
    fg = new createjs.Shape();
    text = new createjs.Text();
    tFly = new createjs.Text();

    text.font = "24px VT323";
    tFly.font = "18px VT323";

    text.color = "#ade67e";
    tFly.color = "#ade67e";
    text.x = 5;
    text.y = 5;
    text.text = "DEFCON : 1983";
    tFly.text = String.fromCharCode(9611);
    //Ancho del texto:11
    tFly.x = 141;
    tFly.y = 9;

    //bg.graphics.clear()
    //bg.graphics.beginFill("black").drawRect(0,0,stage.canvas.width,stage.canvas.height);

    stage.addChild(bg);
    stage.addChild(fg);
    stage.addChild(text);
    stage.addChild(tFly);
}


function fullscreenON() {
    if (
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
    ){
        canvas = document.getElementById("game_canvas");
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        } else if (canvas.mozRequestFullScreen) {
            canvas.mozRequestFullScreen();
        } else if (canvas.msRequestFullscreen) {
            canvas.msRequestFullscreen();
        }


    }


}
function fullscreenOFF()
{
}

function ticUpdate(){


    canvas = document.getElementById("game_canvas");

    if(document.fullScreenElement==null){

        canvas.width = wOriginal;
        canvas.height = hOriginal;

    }
    else
    {
        canvas.width = screen.width;
        canvas.height = screen.height;
    }
    bg.graphics.clear();
    fg.graphics.clear();

    bg.graphics.beginFill("black").drawRect(0,0,canvas.width,canvas.height);
    fg.graphics.setStrokeStyle(2).beginStroke("#ade67e").drawRect(0,0,canvas.width,canvas.height);



    stage.update();
}
