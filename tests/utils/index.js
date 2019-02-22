"use strict";
exports.__esModule = true;
var Expect = /** @class */ (function () {
    function Expect(result) {
        this.result = result;
    }
    Expect.prototype.toBe = function (value) {
        console.log(this.result === value);
    };
    Expect.prototype.toBeTruthy = function (value) {
        value === true;
    };
    Expect.prototype.toBeFalsy = function (value) {
        value === false;
    };
    return Expect;
}());
function it(description, callback) {
    console.log(description);
    callback();
}
exports.it = it;
function expect(result) {
    return new Expect(result);
}
exports.expect = expect;
