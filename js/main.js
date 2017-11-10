/**
 * Created by mariano on 2/11/17.
 */

var stage;


var canvas;
var wOriginal = 500;
var hOriginal = 375;

var defcon;

var MainDisplay;
var DefconDisplay;

function init(){
    // code here.

    canvas = document.getElementById("game_canvas");
    stage = new createjs.Stage("game_canvas");
    setup();

    createjs.Ticker.addEventListener("tick",draw);

}

function setup() {

    MainDisplay = new Display(0,0,wOriginal,hOriginal);
    DefconDisplay = new DefconDisp(wOriginal-52,hOriginal/2-50,20,75);
    DefconDisplay.setup();

    defcon = 0;


    props = Object.getOwnPropertyNames(MainDisplay).sort();

    for (var i = 0;i<props.length;i++)
    {
        if (props[i][0]=='s')
        {
            stage.addChild(MainDisplay[props[i]]);
        }
    }

    props = Object.getOwnPropertyNames(DefconDisplay).sort();
    console.log(props);
    for (var i = 0;i<props.length;i++)
    {
        if (props[i][0]=='s')
        {
            //console.log("Added: "+ props[i]);
            stage.addChild(DefconDisplay[props[i]]);
        }
    }
    console.log(stage);
    //DefconDisplay.setup();


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
    DefconDisplay.draw();
    stage.update();
}
