/**
 * Created by mariano on 2/11/17.
 */

var stage;

var text;
var tFly;

var canvas;
var wOriginal = 500;
var hOriginal = 375;


var MainDisplay;

function init(){
    // code here.

    canvas = document.getElementById("game_canvas");
    stage = new createjs.Stage("game_canvas");
    setup();

    createjs.Ticker.addEventListener("tick",draw);

}

function setup() {

    /*
    text = new createjs.Text();
    tFly = new createjs.Text();

    text.font = "24px VT323";
    tFly.font = "18px VT323";

    text.color = "#ade67e";
    tFly.color = "#ade67e";
    text.x = 5;
    text.y = 5;

    //Ancho del texto:11
    tFly.x = 141;
    tFly.y = 9;

    //bg.graphics.clear()
    //bg.graphics.beginFill("black").drawRect(0,0,stage.canvas.width,stage.canvas.height);
    */
    MainDisplay = new Display(0,0,wOriginal,hOriginal);

    var props = Object.getOwnPropertyNames(MainDisplay).sort();

    for (var i = 0;i<props.length;i++)
    {
        if (props[i][0]=='s')
        {
            stage.addChild(MainDisplay[props[i]]);
        }
    }


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

function draw(){


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

    MainDisplay.draw();
    stage.update();
}
