/**
 * Created by mariano on 2/11/17.
 */

var stage;
var bg;

window.addEventListener('resize', resize, false);

function init() {
    // code here.
    var stage = new createjs.Stage("game_canvas");

    createBackground();
    createjs.Ticker.addListener(this);

    resize();
}

function createBackground() {
    bg = new createjs.Shape();
    stage.addChild(bg);
}


function toggleFullScreen() {
    var canvas = document.getElementById("game_canvas");
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen)
        {

            //document.documentElement.requestFullScreen();
            canvas.requestFullScreen();
            canvas.width = screen.width;
            canvas.height = screen.height;


        } else if (document.documentElement.mozRequestFullScreen)
        {
            canvas.mozRequestFullScreen();
            canvas.width = screen.width;
            canvas.height = screen.height;


        } else if (document.documentElement.webkitRequestFullScreen)
        {
            canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            canvas.width = screen.width;
            canvas.height = screen.height;
        }
    } else {
        if (document.cancelFullScreen)
        {
            canvas.cancelFullScreen();
            canvas.width = 500;
            canvas.height = 375;
        } else if (document.mozCancelFullScreen)
        {
            canvas.mozCancelFullScreen();
            canvas.width = 500;
            canvas.height = 375;
        } else if (document.webkitCancelFullScreen)
        {
            canvas.webkitCancelFullScreen();
            canvas.width = 500;
            canvas.height = 375;
        }
    }
}


function tick() {
    stage.update();
}

function resize() {
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;

    bg.graphics.clear()
    bg.graphics.beginFill("red").drawRect(0,0,stage.canvas.width,stage.canvas.height);

}
