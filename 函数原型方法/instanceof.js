function instanceOf(child, parent) {
    var proto = Object.getPrototypeOf(child);

    while (proto) {
        if (proto === parent) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}
function test() {
    this.name = 'hwt';
}
test.prototype.sayName = function () {
    console.log(this.name);
}
let t1 = Object.create(test);
let t2 = Object.create(test.prototype);
console.log(instanceOf(t1, test));          //true
console.log(instanceOf(t1, test.prototype));//false
console.log(instanceOf(t2, test));          //false
console.log(instanceOf(t2, test.prototype));//true
