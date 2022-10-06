Object.create2 = function (proto, propertyObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('proto must be a object')
    }
    if (propertyObject == null) {
        new TypeError('Cannot convert undefined to object');
    }
    // function Empty() { };
    // Empty.prototype = proto;
    // const obj = new Empty();
    let obj = new Object();
    obj.__proto__ = proto.prototype;

    if (propertyObject != undefined) {
        const keys = Object.keys(propertyObject);
        for (const key of keys) {
            Object.defineProperty(obj, key + '', propertyObject[key]);
        }

    }
    return obj;
}

function test() {
    this.name = 'hwt';
}
let propertyObject = {
    myname: {
        configurable: false,
        get: function () { return this.name; },
        set: function (value) {
            console.log('Setting `o.name` to', value);
        }
    },
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    }
};
let t = Object.create2(test, propertyObject);
let t2 = Object.create(test.prototype, propertyObject);
let t3 = new test();
console.log(t, t2, t3);
