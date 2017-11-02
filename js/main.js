/**
 * Created by mariano on 2/11/17.
 */

function init() {
    // code here.
    while(1) {
        var stage = new createjs.Stage("game_canvas");
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
        stage.update();
    }
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