Array.prototype.filter2 = function (callback, thisArg) {
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
    let result = [];
    while (k < len) {
        if (k in O) {
            if (!!callback.call(thisArg, O[k], k, O)) {
                result.push(O[k])
            }
        }
        k++;
    }
    return result;
}

let temp = Array.from([1, 2, 3]).filter2((_v) => _v != 2);
console.log(temp);