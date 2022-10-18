let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
];


/**
 * 递归方式，递归构造pid的孩子元素
 * @param {Array} data 
 * @param {Array} result 
 * @param {Number} pid 
 */
const getChildren = (data, result, pid) => {
    for (const item of data) {
        if (item.pid == pid) {
            let child = { ...item, children: [] };
            result.push(child);
            getChildren(data, child.children, child.id);
        }
    }
}
//转为树形结构
const transfromToTree = (data, pid) => {
    //借助引用，在getChildren中递归生成树形
    const result = [];
    getChildren(data, result, pid);
    return result;
}
// var ans = transfromToTree(arr, 0);
// console.log(ans);
// console.log('end');


/**
 * map非递归实现
 * 本质是利用了数据的引用，在一次循环过程中不断补充完善各个父子结点关系
 * @param {Array} data 
 * @returns 
 */
const listToTree = (data) => {
    let map = {};
    let result = [];
    for (const item of data) {
        //以id为键存储各个数据项
        map[item.id] = { ...item, children: [] };
    }
    for (const item of data) {
        const id = item.id;
        const pid = item.pid;
        //获取map中的该数据引用
        const itemData = map[id];
        if (pid == 0) {
            //存储根节点
            result.push(itemData);
        } else {
            //处理子节点
            //若存在父节点，则添加进去
            if (map[pid]) {
                map[pid].children.push(itemData);
            }
        }
    }
    return result;
}
var ans = listToTree(arr);
console.log(ans);
console.log('end');