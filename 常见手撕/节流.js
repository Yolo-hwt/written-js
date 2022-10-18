function throttle(fn, wait) {
    var timer;
    var context, args;
    return function () {
        context = this;
        args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                clearTimeout(timer);
                timer = null;
            }, wait);
        }
    }
}

function throttle_pro(fn, wait, immediate) {
    var timer;
    var context, args;
    let run = (timeout) => {
        timer = setTimeout(() => {
            if (!immediate) {
                fn.apply(context, args);
            }
            clearTimeout(timer);
            timer = null;
        }, timeout);
    }
    return function () {
        context = this;
        args = arguments;
        if (!timer) {
            if (immediate) {
                fn.apply(context, args);
            }
            run(wait);
        }
    }
}

function throttle_time(fn, wait) {
    var context, args;
    var previous;
    return function () {
        context = this;
        args = arguments;
        let now = new Date().getTime();
        if (now - previous > wait) {
            fn.apply(context, args);
        }
        previous = now;
    }
}