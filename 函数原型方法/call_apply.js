//Function.prototype.call(thisArgs,...args)
Function.prototype.call2 = function (ctx) {
    var context = ctx || globalThis
    const args = Array.from(arguments).slice(1);
    const key = Symbol('callKey');
    let ans = null;

    context[key] = this;
    ans = context[key](...args);
    delete (context[key]);
    return ans;
}

Function.prototype.apply2 = function (ctx) {
    var context = ctx || globalThis;
    const key = Symbol('applyKsy');
    let args = arguments[1];
    // while (Array.isArray(args[0])) {
    //     args = [].concat(...args);
    // }
    context[key] = this;
    const result = context[key](...args);
    delete (context[key]);
    return result;
}
function callName(name, age) {
    console.log(this.name);
    console.log(name, age);
}
let obj = {
    name: 'hwt'
}
// callName.call2(null, 111)
callName.apply2(obj, ['no', 22])