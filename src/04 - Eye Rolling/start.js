"use strict";
var EyeDetector = /** @class */ (function () {
    function EyeDetector() {
        this.bodyElement = document.querySelector('body');
        this.eyesElement = document.querySelectorAll('.eye');
    }
    EyeDetector.prototype.onMouseMove = function (event) {
        this.eyesElement.forEach(function (eyeElement) {
            var _a = eyeElement.getBoundingClientRect(), eyeLeft = _a.left, eyeTop = _a.top;
            var eyeCenterX = eyeLeft + eyeElement.offsetWidth / 2;
            var eyeCenterY = eyeTop + eyeElement.offsetHeight / 2;
            var radian = Math.atan2(event.pageX - eyeCenterX, event.pageY - eyeCenterY);
            var angle = (radian / Math.PI) * -180;
            eyeElement.style.transform = "rotate(" + angle + "deg)";
        });
    };
    EyeDetector.prototype.execute = function () {
        console.log(this);
        this.bodyElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    };
    return EyeDetector;
}());
var eyeDetect = new EyeDetector();
eyeDetect.execute();
//# sourceMappingURL=start.js.map