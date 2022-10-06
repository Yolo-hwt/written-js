Promise.any2 = function (iterableArr) {
    var errNumIndex = 0;
    const len = iterableArr.length;
    return new Promise((resolve, reject) => {
        Array.from(iterableArr).forEach(promiseObj => {
            Promise.resolve(promiseObj).then(value => {
                resolve(value);
            }, err => {
                errNumIndex++;
                if (errNumIndex === len) {
                    reject(new AggregateError('all promise were rejected'));
                }
            })
        })
    })
}