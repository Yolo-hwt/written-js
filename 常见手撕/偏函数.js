function add(a, b, c) {
    return a + b + c;
}
//偏函数实现
function partial(fn, ...args) {
    return function () {
        let allArgs = args.concat([...arguments]);
        return fn.apply(this, allArgs);
        //return fn.call(this, ...allArgs);
    }
}
let partialAdd = partial(add, 1,2);
console.log(partialAdd(3));

// //偏函数带占位
// function partial_pro(fn, ...args) {
    
// }

