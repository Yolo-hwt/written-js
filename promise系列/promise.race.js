Promise.race2 = function (iterableArr) {
    return Promise((resolve, reject) => {
        Array.from(iterableArr).forEach((promiseobj) => {
            Promise.resolve(promiseobj).then(res => {
                resolve(res);
            }).catch(reason => {
                reject(reason);
            })
        })
    })
}