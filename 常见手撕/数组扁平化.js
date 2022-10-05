let test = [[1, 2, 3], [2, [3, [6, 6, [9]]]]];

function flat_1(arr) {
    return arr.toString().split(',').map(Number);
}

function flat_2(arr) {
    var ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            ans = ans.concat(flat_2(arr[i]));
        } else {
            ans.push(arr[i]);
        }
    }
    return ans;
}

function flat_3(arr) {
    let ans = arr;
    while (ans.some((value) => Array.isArray(value))) {
        ans = [].concat(...ans);//concat返回一个新数组
    }
    return ans;
}
console.log(flat_1(test));
console.log(flat_2(test));
console.log(flat_3(test));

