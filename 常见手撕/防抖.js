//多次触发只执行最后一次，
var debounce = (fn, wait) => {
    var timer;
    return function () {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    }
}
//防抖pro
var debounce_pro = (fn, wait, immediate = false) => {
    var timer, result;
    const run = (timeout) => {
        timer = setTimeout(() => {
            if (!immediate) {
                fn.apply(context, args);
            }
            clearTimeout(timer);
            timer = null;
        }, timeout);
    }
    //每次不断更新context和args保证最后一次执行为最后一次触发时候的上下文
    var debounce = function () {
        var context = this;
        var args = arguments;

        if (!timer) {
            //新的一轮周期执行一次前缘触发
            if (immediate) {
                result = fn.apply(context, args);
            }
        }
        clearTimeout(timer);
        run(wait);
        return result;
    }
    return debounce;
}

const debounce_pro_temp = (fn, wait, immediate) => {
    var timer, result;
    var context, args;
    const clean = () => {
        clearTimeout(timer);
        timer = null;
    }
    const run = (timeout) => {
        timer = setTimeout(() => {
            if (!immediate) {
                fn.apply(context, args);
            }
            clean();
        }, timeout);
    }
    function debounce() {
        context = this;
        args = arguments;
        if (!timer) {
            if (immediate) {
                result = fn.apply(context, args);
            }
            run(wait);
        } else {
            clean();
            run(wait);
        }
        return result;
    }
    debounce.cancel = () => {
        clean();
    }
    return debounce;
}

//
function debounce_testpass(fn, wait, immediate = false) {
    var ctx, args;
    var timer;
    const run = (timeout) => {
        timer = setTimeout(() => {
            if (!immediate) {
                fn.apply(ctx, args);
            }
            console.log('over');
        }, timeout * 1000);
    }
    const clean = () => {
        clearTimeout(timer);
        timer = null;
    }
    return function () {
        ctx = this;
        args = arguments;
        if (!timer) {
            console.log('start');
            if (immediate) {
                fn.apply(ctx, args);
            }
            run(wait);
        } else {
            console.log('reset');
            clean(timer);
            run(wait);
        }
    }
}
