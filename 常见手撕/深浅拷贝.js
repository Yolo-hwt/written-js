let testobj = {
    a: '1',
    b: '2',
    c: { deepc: 'c' },
    e: new Error('test')
}
testobj.d = testobj;
//浅拷贝：只考虑对象类型
function shallowCopy(obj) {
    if (typeof obj === 'object') {
        let newObj = Array.isArray(obj) ? [] : {};
        let keys = Object.keys(obj)
        for (const key of keys) {
            newObj[key] = obj[key];
        }
        return newObj;
    } else {
        return obj;
    }
}
function deepClone(obj) {
    if (typeof obj === 'object') {
        let newObj = Array.isArray(obj) ? [] : {};
        let keys = Object.keys(obj)
        for (const key of keys) {
            newObj[key] = deepClone(obj[key]);
        }
        return newObj;
    } else {
        return obj;
    }
}


//进阶——解决循环引用
function deepClone_pro(obj, map = new Map()) {
    if (typeof obj === 'object') {
        if (map.has(obj)) {
            return map.get(obj);
        }
        let newObj = Array.isArray(obj) ? [] : {};
        map.set(obj, newObj);
        for (const key of Object.keys(obj)) {
            newObj[key] = deepClone_pro(obj[key], map);
        }
        return newObj;
    } else {
        return obj;
    }
}

//进阶+强化
//使用weakmap，优化map的内存空间
//使用while循环提升性能
//考虑其他数据类型
function deepClone_pro_max(obj, map = new WeakMap()) {
    if (map.has(obj)) {
        return map.get(obj);
    }
    //解决忽略类型
    if (Object.prototype.toString.call(obj) === '[object Date]') return new Date(obj)
    if (Object.prototype.toString.call(obj) === '[object RegExp]') return new RegExp(obj)
    if (Object.prototype.toString.call(obj) === '[object Error]') return new Error(obj)

    //对象数组类型
    if (typeof obj === 'object') {
        let newObj = Array.isArray(obj) ? [] : {};
        map.set(obj, newObj);
        for (const key of Object.keys(obj)) {
            newObj[key] = deepClone_pro(obj[key], map);
        }
        return newObj;
    } else {
        return obj;
    }
}
// let clone = shallowCopy(testobj);
// let clone = deepClone(testobj);
// let clone = deepClone_pro(testobj);
// clone.c.deepc = 'changec';
// console.log(testobj.c, clone.c);
// console.log('end');


function deepClone_test(obj, map = new WeakMap()) {
    if (map.has(obj)) {
        return map.get(obj);
    }
    if (Object.prototype.toString.call(obj) === '[object Date]') return new Date(obj);
    if (Object.prototype.toString.call(obj) === '[object Error]') return new Error(obj);
    if (Object.prototype.toString.call(obj) === '[object RegExp]') return new RegExp(obj);

    if (typeof obj == 'object') {
        let newobj = Array.isArray(obj) ? [] : {};
        map.set(obj, newobj);
        let keys = Object.keys(obj);
        for (const key of keys) {
            newobj[key] = deepClone_test(obj[key], map);
        }
        return newobj;
    } else {
        return obj;
    }
}

let clone = deepClone_test(testobj);
clone.c.deepc = 'changec';
console.log(testobj.c, clone.c);
console.log(clone);
console.log('end');