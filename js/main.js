/**
 * Created by mariano on 2/11/17.
 */

function init() {
    // code here.
    var stage = new createjs.Stage("game_canvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
}

function toggleFullScreen() {
    var canvas = document.getElementById("game_canvas");
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen)
        {

            //document.documentElement.requestFullScreen();
            canvas.requestFullScreen()
        } else if (document.documentElement.mozRequestFullScreen)
        {
            canvas.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen)
        {
            canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen)
        {
            canvas.cancelFullScreen();
        } else if (document.mozCancelFullScreen)
        {
            canvas.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen)
        {
            canvas.webkitCancelFullScreen();
        }
    }
}