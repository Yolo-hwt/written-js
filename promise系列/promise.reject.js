Promise.reject2 = function (reason) {
    return new Promise((resolve, reject) => reject(reason));
}