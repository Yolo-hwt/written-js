Object.assign2 = function (target, ...source) {
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    let ret = Object(target);
    source.forEach((obj) => {
        if (obj != null) {
            for (const key of Object.keys(obj)) {
                ret[key] = obj[key];
            }
        }
    });
    return ret;
}