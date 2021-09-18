"use strict";
var setElementInnerText = function (id, text) {
    var element = document.getElementById(id);
    if (element) {
        element.innerText = text;
    }
};
var countdown = function () {
    var SECOND = 1000;
    var MINUTE = SECOND * 60;
    var HOUR = MINUTE * 60;
    var DAY = HOUR * 24;
    var date = new Date();
    var now = Date.now();
    var newYear = new Date("1 Jan " + (date.getFullYear() + 1)).getTime();
    var dateDiff = newYear - now;
    setElementInnerText('days', Math.floor(dateDiff / DAY).toString());
    setElementInnerText('hours', Math.floor(dateDiff % DAY / HOUR).toString());
    setElementInnerText('minutes', Math.floor(dateDiff % HOUR / MINUTE).toString());
    setElementInnerText('seconds', Math.floor(dateDiff % MINUTE / SECOND).toString());
};
(function () {
    return setInterval(countdown, 1000);
})();
//# sourceMappingURL=start.js.map