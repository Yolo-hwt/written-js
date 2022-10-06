Promise.resolve2 = function (value) {
    if (value instanceof Promise) {
        return value;
    }
    return new Promise(resolve => resolve(value));
}