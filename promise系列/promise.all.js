Promise.all2 = function (iterableArr) {
    let len = iterableArr.length;
    let count = 0;
    let result = [];
    return new Promise((resolve, reject) => {
        Array.from(iterableArr).forEach(element => {
            Promise.resolve(element).then(value => {
                result.push(value);
                count++;
                if (count === len) {
                    resolve(result);
                }
            }).catch(reason => {
                reject(reason)
            })
        });
    })
}

async function test1() {
    return 1;
}
async function test2() {
    return 2;
}
async function test3() {
    return 3;
}
let arr = [test1(), test2(), test3()];
Promise.all2(arr).then((res) => {
    console.log(res);
})