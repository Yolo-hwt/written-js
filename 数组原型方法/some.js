Array.prototype.some2 = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError("this is null or undefined")
    }
    if (typeof callback !== 'function') {
        throw new TypeError("callback is not a function")
    }
    if (thisArg == null) {
        thisArg = this;
    }
    let O = Object(this);
    let len = O.length >>> 0;
    let k = 0;
    while (k < len) {
        if (k in O) {
            if (!!callback.call(thisArg, O[k], k, O)) {
                return true;
            }
        }
        k++
    }
    return false;
}
let res = Array.from([1, 2, 3]).some2((value, index, array) => value == 12);
console.log(res);