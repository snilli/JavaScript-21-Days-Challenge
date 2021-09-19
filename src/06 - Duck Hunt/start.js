"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var random = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
var mapDuctToElement = function (duck) {
    var duckElement = document.createElement('div');
    duckElement.className = 'duck';
    duckElement.style.left = duck.x + "px";
    duckElement.style.top = duck.y + "px";
    document.body.appendChild(duckElement);
    return duckElement;
};
var getDuckBackgroundImage = function (duckElement, duck) {
    var direction = duck.speedX > 0 ? 'right' : 'left';
    var animetion = duckElement.style.backgroundImage.includes('1') ? '2' : '1';
    return "url(./" + direction + "-" + animetion + ".png)";
};
var moveDuck = function (duckElement, duck) {
    var _a = duckElement.getBoundingClientRect(), left = _a.left, top = _a.top;
    var outOfBoundX = duck.x < 0 || duck.x > window.innerWidth;
    var outOfBoundY = duck.y < 0 || duck.y > window.innerHeight;
    if (outOfBoundX) {
        duck.speedX *= -1;
    }
    if (outOfBoundY) {
        duck.speedY *= -1;
    }
    duck.x = left + duck.speedX;
    duck.y = top + duck.speedY;
    duckElement.style.left = duck.x + "px";
    duckElement.style.top = duck.y + "px";
    duckElement.style.backgroundImage = getDuckBackgroundImage(duckElement, duck);
};
var createDuck = function (count) {
    return __spreadArray([], __read(new Array(count)), false).map(function () {
        return {
            x: random(0, window.innerWidth),
            y: window.innerHeight,
            speedX: random(-50, 50),
            speedY: random(5, 10)
        };
    });
};
var execute = function () {
    var e_1, _a;
    var ducks = createDuck(5);
    var duckElements = ducks.map(mapDuctToElement);
    var _loop_1 = function (index, duckElement) {
        var interval = setInterval(function () { return moveDuck(duckElement, ducks[index]); }, 100);
        duckElement.addEventListener('click', function (event) {
            var currentDuckElement = event.currentTarget;
            currentDuckElement.style.transition = 'top 2s';
            currentDuckElement.style.top = window.innerHeight + "px";
            clearInterval(interval);
            setTimeout(function () {
                document.body.removeChild(currentDuckElement);
                var duck = document.querySelector('.duck');
                if (!duck) {
                    var winningElem = document.querySelector('.winning');
                    winningElem.style.opacity = '1';
                }
            }, 2000);
        });
    };
    try {
        for (var _b = __values(duckElements.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), index = _d[0], duckElement = _d[1];
            _loop_1(index, duckElement);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
execute();
//# sourceMappingURL=start.js.map