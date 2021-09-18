"use strict";
var getColor = function (distance) {
    var opacity = Math.min(0.5, 1 / distance);
    return "rgba(222, 10, 109, " + opacity + ")";
};
var getDistance = function (previousPoint, currentPoint) {
    // Distance formular: https://www.wikihow.com/Find-the-Distance-Between-Two-Points
    return Math.sqrt(Math.pow((previousPoint.x - currentPoint.x), 2) +
        Math.pow((previousPoint.y - currentPoint.y), 2));
};
var getSize = function (distance) {
    return (Math.random() / distance) * 40;
};
var createOnMouseMoveHandler = function (context, pervuousPoint) {
    return function (event) {
        var currentPointer = {
            x: event.pageX,
            y: event.pageY
        };
        var distance = getDistance(pervuousPoint, currentPointer);
        context.beginPath();
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = getSize(distance);
        context.strokeStyle = getColor(distance);
        context.moveTo(pervuousPoint.x, pervuousPoint.y);
        context.lineTo(currentPointer.x, currentPointer.y);
        context.stroke();
        context.closePath();
        pervuousPoint.x = currentPointer.x;
        pervuousPoint.y = currentPointer.y;
    };
};
var createOnMouseEnterHandler = function (pervuousPoint) {
    return function (event) {
        pervuousPoint = {
            x: event.pageX,
            y: event.pageY
        };
    };
};
var execute = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var canvas = document.getElementById('painting');
    canvas.width = width;
    canvas.height = height;
    var context = canvas.getContext('2d');
    var pervuousPoint = { x: 0, y: 0 };
    canvas.addEventListener('mousemove', createOnMouseMoveHandler(context, pervuousPoint));
    canvas.addEventListener('mouseenter', createOnMouseEnterHandler(pervuousPoint));
};
execute();
//# sourceMappingURL=start.js.map