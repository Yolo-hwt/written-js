class EventEmitter {
    constructor() {
        this.cache = {};
    }
    //订阅器
    on(name, fn) {
        let tasks = this.cache[name];
        if (tasks) {
            tasks.push(fn);
        } else {
            // tasks = [fn];
            this.cache[name] = [fn]
        }
    }
    //取消订阅
    off(name, fn) {
        let tasks = this.cache[name];
        let taskIndex = tasks.indexOf(fn);
        if (taskIndex != -1) {
            tasks.splice(taskIndex, 1);
        }
    }
    //触发器
    emit(name, once = false, ...args) {
        let tasks = this.cache[name];
        if (!tasks) {
            console.log('no event can be use');
            return;
        }
        tasks.forEach((task) => {
            task(...args);
        })
        if (once) {
            delete this.cache[name];
        }
    }
}

let eventEmitter = new EventEmitter();
const test = (name, age) => {
    console.log(name + ':' + age);
}
const test2 = () => {
    console.log('test2');
}
eventEmitter.on('sayYourSelf', test);
eventEmitter.on('sayYourSelf', test2);
eventEmitter.emit('sayYourSelf', false, 'hwt', 22);
eventEmitter.off('sayYourSelf', test2);
eventEmitter.emit('sayYourSelf', false, 'hwt', 22);
