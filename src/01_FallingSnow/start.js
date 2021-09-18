"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getCanvasById = function (elementId, width, height) {
    var canvas = document.getElementById(elementId);
    canvas.width = width;
    canvas.height = height;
    return canvas;
};
var createSnowBallDrawer = function (snowball, canvasContext) {
    canvasContext.beginPath();
    canvasContext.arc(snowball.x, snowball.y, snowball.radius, 0, Math.PI * 2);
    canvasContext.fillStyle = "rgba(255, 255, 255, " + snowball.opacity + ")";
    canvasContext.fill();
};
var createSnowBallMover = function (snowball, canvas) {
    snowball.x += snowball.speedX;
    snowball.y += snowball.speedY;
    if (snowball.x > canvas.width) {
        snowball.x = 0;
    }
    else if (snowball.x < 0) {
        snowball.x = canvas.width;
    }
    if (snowball.y > canvas.height) {
        snowball.y = 0;
    }
};
var createSnowBalls = function (snowball, screenWidth, screenHeight) {
    return __spreadArray([], Array(snowball), true).map(function () {
        return {
            x: random(0, screenWidth),
            y: random(0, screenHeight),
            opacity: random(0.5, 1),
            speedX: random(-5, 5),
            speedY: random(1, 3),
            radius: random(2, 4)
        };
    });
};
var execute = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var snowball = 2500;
    var canvasId = 'falling-snow-canvas';
    var canvas = getCanvasById(canvasId, width, height);
    var canvasCtx = canvas.getContext('2d');
    var snowballs = createSnowBalls(snowball, width, height);
    setInterval(function () {
        canvasCtx.clearRect(0, 0, width, height);
        for (var _i = 0, snowballs_1 = snowballs; _i < snowballs_1.length; _i++) {
            var snowball_1 = snowballs_1[_i];
            createSnowBallDrawer(snowball_1, canvasCtx);
        }
        for (var _a = 0, snowballs_2 = snowballs; _a < snowballs_2.length; _a++) {
            var snowball_2 = snowballs_2[_a];
            createSnowBallMover(snowball_2, canvas);
        }
    }, 50);
};
execute();
//# sourceMappingURL=start.js.map