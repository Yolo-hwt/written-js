//闭包+递归
let arr = []
function addCurry() {
    arr = arr.concat([...arguments]);
    if (arguments.length === 0) {
        return arr.reduce((pre, cur) => pre += cur, 0);
    } else {
        return addCurry;
    }
}
//console.log(addCurry(1)(2)(3)());

//进阶纯函数写法
//将外部的arr数组放进来
function addCurry_pro() {
    var arr = [...arguments];//利用闭包保存
    function fn() {
        if (arguments.length === 0) {
            return arr.reduce((pre, cur) => pre += cur, 0);
        } else {
            arr.push(...arguments);
            return fn;
        }
    }
    return fn;//返回一个方法
}

//隐式转换toString()/valueOf()
function addCurry_pro_max() {
    let arr = [...arguments];
    var fn = function () {
        arr.push(...arguments);
        return fn;//作为后续调用的返回
    };
    fn.valueOf = fn.toString = () => {
        return arr.reduce((pre, cur) => pre += cur, 0);
    }
    return fn;//作为第一次调用的返回
}
//使用+让函数整体可识别为一个表达式，那么就需要调用其valueOf或者toString方法
//进而得到结果
//console.log(+addCurry_pro_max(1)(2)(3));
