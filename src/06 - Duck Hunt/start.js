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
var random = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var mapDuctToElement = function (duck) {
    var duckElement = document.createElement('div');
    duckElement.className = 'duck';
    duckElement.style.left = duck.x + "px";
    duckElement.style.top = duck.y + "px";
    duckElement.style.background = "url(./left-1.png)";
    document.body.appendChild(duckElement);
    return duckElement;
};
var createDuck = function (count) {
    return __spreadArray([], new Array(count), true).map(function () {
        return {
            x: random(0, window.innerWidth),
            y: window.innerHeight,
            speedX: random(-50, 50),
            speedY: random(5, 10)
        };
    });
};
var execute = function () {
    var ducks = createDuck(5);
    var duckElements = ducks.map(mapDuctToElement);
};
execute();
//# sourceMappingURL=start.js.map