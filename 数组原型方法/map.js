Array.prototype.map2 = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError("this is null or undefined")
    }
    if (typeof callback !== "function") {
        throw new TypeError("callback is not a function")
    }
    if (thisArg == undefined) {
        thisArg = this;
    }
    let O = Object(this);
    let len = O.length >>> 0;
    let k = 0;
    let result = [];
    while (k < len) {
        if (k in O) {
            result[k] = callback.call(thisArg, O[k], k, O);
        }
        k++
    }
    return result;
}

let temp = Array.from(['1', '2', '3']).map2(_v => Number(_v));
console.log(temp, typeof temp[0]);