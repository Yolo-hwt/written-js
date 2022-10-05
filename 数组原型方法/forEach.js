Array.prototype.forEach2 = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError('this is null or undefined')
    }
    if (typeof callback !== "function") {
        throw new TypeError(callback + 'is not a functin')
    }
    if (thisArg == null) {
        thisArg = this;
        //console.log(thisArg);
    }
    const O = Object(this);
    //保证转换后的值为正整数。其实底层做了 2 层转换，
    //第一是非 number 转成 number 类型，
    //第二是将 number 转成 Uint32 类型
    const len = O.length >>> 0;
    let k = 0;
    while (k < len) {
        if (k in O) {
            //callback(value,index,array)
            callback.call(thisArg, O[k], k, O);
        }
        k++;
    }
}

Array.from([4, 2, 3]).forEach2((value, index, array) => {
    console.log(value, index, array);
})
