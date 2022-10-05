let test = [11, 2, 2, 3, 3, 5, 6, 7, 7, 9, 0, 0, 1, 11];
//set
function unique_1(arr) {
    return Array.from(new Set(arr));
}

//reduce+indexof
function unique_2(arr) {
    return arr.reduce((pre, cur) => {
        if (pre.indexOf(cur) == -1) {
            pre.push(cur);
        }
        return pre;
    }, [])
}

//filter
function unique_3(arr) {
    return arr.filter((value, index, array) => {
        return array.indexOf(value) === index;
    })
}
console.log(unique_1(test));
console.log(unique_2(test));
console.log(unique_3(test));