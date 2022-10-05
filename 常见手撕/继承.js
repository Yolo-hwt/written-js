function Animal(name) {
    this.name = name;
    this.colors = ['black', 'white'];
}
Animal.prototype.getName = function () {
    return this.name;
}
Animal.prototype.getColors = function () {
    return this.colors;
}

// //原型链继承
function Dog_1() {
    this.bark = 'the dog is barking';
}
Dog_1.prototype = new Animal();
// let dog1 = new Dog_1();
// let dog2 = new Dog_1();
// dog1.colors.push('111');
// console.log(dog2.getColors());//(3) ['black', 'white', '111']
//共享一份原型对象，造成引用数据类型的污染
//子类无法传参

// //构造函数继承
function Dog_2(name) {
    Animal.call(this, name);//将父类属性赋给子类
    this.bark = 'the dog is barking';//添加子类方法
}
// let dog1 = new Dog();
// let dog2 = new Dog();
// dog1.colors.push('111');
// console.log(dog2.getColors());//(2) ['black', 'white']
//每次都要调用一次父类方法，且无法访问原型链方法

//组合继承
function Dog(name, age) {
    Animal.call(this, name);     //第一次调用，构造函数
    this.age = age;
}
Dog.prototype = new Animal();    //第二次调用，原型链构造
Dog.prototype.constructor = Dog;
// //调用了两次父类构造函数


//寄生组合式继承
function createObject(prototype) {
    function F() { };
    F.prototype = prototype;
    return new F();
}
function inheritPrototype(child, parent) {
    // let prototype = createObject(parent.prototype);
    //或者直接使用Object.create
    let prototype = Object.create(parent.prototype);
    child.prototype = prototype;
    child.prototype.constructor = child;
}
function Dog(name, age) {
    Animal.call(this, name);
    this.age = age;
}
inheritPrototype(Dog, Animal);

// let dog1 = new Dog('jack', 3);
// let dog2 = new Dog('bob', 2);
// dog1.colors.push('111');
// console.log(dog1);
// console.log(dog2.getColors());

//calss继承
class AnimalClass {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static sleep() {
        return 'Animal sleep'
    }
    get size() {
        return this._size;
    }
    set size(size) {
        this._size = size;
    }
}
class Dog extends AnimalClass {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    static DogSleep() {
        return super.sleep() + ' dog sleep';
    }
}
// let dog1 = new Dog();
// //!!!   dog1.sleep();        //子类实例不能调用父类静态方法
// console.log(dog1.size);
// //!!!    dog1.size(15);          //getter 和 setter 不能当作函数使用，他们相当于拦截器和捕获器
// dog1.size = 15
// console.log(dog1._size, dog1.size);
// console.log(AnimalClass.sleep());
// console.log(Dog.DogSleep());

