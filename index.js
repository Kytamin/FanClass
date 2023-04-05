var speed;
(function (speed) {
    speed[speed["SLOW"] = 1] = "SLOW";
    speed[speed["MEDIUM"] = 2] = "MEDIUM";
    speed[speed["MAX"] = 3] = "MAX";
})(speed || (speed = {}));
var Fan = /** @class */ (function () {
    function Fan() {
        this.speed = speed.SLOW;
        this.status = false;
        this.radius = 5;
        this.color = "blue";
    }
    Fan.prototype.getter = function () {
        return "speed:".concat(this.speed, " , status:").concat(this.status, ", radius:").concat(this.radius, ", color:").concat(this.color);
    };
    Fan.prototype.setOn = function () {
        this.status = true;
    };
    Fan.prototype.setOff = function () {
        this.status = false;
    };
    Fan.prototype.setColor = function (color) {
        this.color = color;
    };
    Fan.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Fan.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Fan.prototype.toString = function () {
        if (this.status) {
            console.log("".concat(this.getter(), " Fan is on"));
        }
        else {
            console.log("".concat(this.getter(), " Fan is off"));
        }
    };
    return Fan;
}());
var Fan1 = new Fan();
var Fan2 = new Fan();
Fan1.setSpeed(speed.MAX);
Fan1.setOn();
Fan1.setRadius(10);
Fan1.setColor("yellow");
Fan1.toString();
Fan2.setSpeed(speed.MEDIUM);
Fan2.setOff();
Fan2.setRadius(5);
Fan2.setColor("blue");
Fan2.toString();
