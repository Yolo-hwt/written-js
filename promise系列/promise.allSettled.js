Promise.allSettled2 = function (iterableArr) {
    var result = [];

    return new Promise((resolve, reject) => {
        Array.from(iterableArr).forEach(promiseItem => {
            Promise.resolve(promiseItem).then(value => {
                result.push({
                    status: 'fullfilled',
                    value: value
                })
                if (result.length === iterableArr.length) {
                    resolve(result);
                }
            }, err => {
                result.push({
                    status: 'rejected',
                    value: err
                })
                if (result.length === iterableArr.length) {
                    resolve(result);
                }
            })
        })
    })
}