Array.prototype.reduce2 = function (callback, initValue) {
    if (this == null) {
        throw new TypeError("this is null or undefined")
    }
    if (typeof callback !== 'function') {
        throw new TypeError("callback is not a function")
    }

    let O = Object(this);
    let len = O.length >>> 0;
    let k = 0, ans;
    //对初始值的设定
    //如果有则使用，没有则以第一个非空元素作为初始值
    if (arguments.length > 1) {
        ans = initValue;
    } else {
        while (k < len && !(k in O)) {
            k++;
        }
        if (k > len) {
            throw new TypeError('Empty array with no initValue')
        }
        ans = O[k++];
    }
    while (k < len) {
        if (k in O) {
            ans = callback.call(this, ans, O[k], k, O);
        }
        k++;
    }
    return ans;
}
let res = Array.from([1, 2, 3]).reduce2((pre, cur) => pre += cur);
console.log(res);
