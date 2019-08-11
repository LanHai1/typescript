"use strict";
/** es5 继承 */
/*function Person(this: any, nickname: string) {
    this.nickname = nickname
    this.sex = "男"
    this.run = () => {
        console.log(this.nickname + "跑步")
    }
}
Person.prototype.sayHi = () => {
    console.log(`你好`)
}
let per = new Person("jack")
per.run()
per.sayHi()

function Son(this: any, nickname: string) {
    Person.call(this, nickname)
    for (var variable in Person.prototype) {
        Son.prototype[variable] = Person.prototype[variable]
    }
}

let son = new Son("jack")
son.run()
son.sayHi()*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// -------------------------------------------------------------
// 声明类
var Person = /** @class */ (function () {
    // 构造器 实例化对象的时候就会触发这个方法 把传递过来的值设置给类里面的属性
    function Person(name) {
        this.nickName = name;
    }
    Person.prototype.getInfo = function () {
        return "\u6211\u53EB" + this.nickName;
    };
    // 可以通过方法设置类里面属性的值
    Person.prototype.setInfo = function (name) {
        this.nickName = name;
    };
    return Person;
}());
var per = new Person("蓝海");
per.setInfo("jeck");
console.log(per.getInfo());
// -------------------------------------------------------------
// 类的继承
var Student = /** @class */ (function () {
    function Student(n, a) {
        this.nick = n;
        this.age = a;
    }
    Student.prototype.run = function () {
        console.log(this.nick + "\u5728\u8DD1\u6B65");
    };
    return Student;
}());
var stu = new Student("pink", 18);
stu.run();
console.log(stu.age);
// 结合 extends 和 super 关键字继承类
// extends 后面跟继承的父类
// super 触发父类的构造器 传递参数到父类 /* 初始化父类的构造函数 */
var myStudent = /** @class */ (function (_super) {
    __extends(myStudent, _super);
    function myStudent(mNick, mAge) {
        return _super.call(this, mNick, mAge) || this;
    }
    // 子类获取属性和方法的规律 先从自己的类里面去找 没有再去继承的父类里面去找 
    // 类似于es5的构造函数 先从构造函数中找 没有再去构造函数对应的原型对象中找
    // (扩展自己的方法) 获取父类里面的属性
    myStudent.prototype.run = function () {
        console.log("myRun" + this.nick);
    };
    return myStudent;
}(Student));
var myStu = new myStudent("莉丝", 13);
myStu.run();
console.log(myStu.age);
// -------------------------------------------------------------
// 类里面的修饰符
var Test = /** @class */ (function () {
    // 属性如果不加修饰符 默认就是公有的
    function Test(_name, _age, _sex) {
        this.nickName = _name;
        this.age = _age;
        this.sex = _sex;
    }
    return Test;
}());
var Test_ji_chen = /** @class */ (function (_super) {
    __extends(Test_ji_chen, _super);
    function Test_ji_chen(_name, _age, _sex) {
        return _super.call(this, _name, _age, _sex) || this;
    }
    Test_ji_chen.prototype.run = function () {
        console.log(this.nickName); // "jack"
        console.log(this.age); // 18
        // console.log(this.sex); // err 属性“sex”为私有属性，只能在类“Test”中访问。
    };
    return Test_ji_chen;
}(Test));
var test = new Test_ji_chen("jack", 18, "男");
console.log(test.nickName); // "jack"
// console.log(test.age); // 属性“age”受保护，只能在类“Test”及其子类中访问。
// console.log(test.sex); // 属性“sex”为私有属性，只能在类“Test”中访问。
test.run();
// -------------------------------------------------------------
// 静态属性和静态方法
// 通过 static 关键字来声明的属性和方法 就是静态属性和静态方法
// 静态属性必须赋值 静态方法中 "只能" 访问这个类里面的静态属性 通过类名.静态属性来访问 
var staticFn = /** @class */ (function () {
    function staticFn(name) {
        this.nickName = name;
    }
    staticFn.prototype.sayHi = function () {
        console.log("sayhi," + this.nickName);
    };
    staticFn.myRun = function () {
        console.log("\u6211" + staticFn.myAge + "\u5C81\u6211\u53EF\u4EE5\u8DD1\u6B65");
    };
    staticFn.myAge = 19; /* 静态属性 必须赋值 */
    return staticFn;
}());
var sta = new staticFn("蓝海");
// 实例属性
console.log(sta.nickName);
// 实例方法
sta.sayHi();
// 静态属性
console.log(staticFn.myAge);
// 静态方法
staticFn.myRun();
// 静态属性和静态方法的用途
// 如 jquery中 
// 通过 $(el).css()这是实例方法 $(el)返回了 这个方法获取的DOM元素 然后.css()方法设置样式
// $.ajax() 这是静态方法 直接通过 $.出来的方法
// -------------------------------------------------------------
// 多态 父类定义一个方法不去实现 让继承的子类去实现 每个子类有不同的表现
// 多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.nickName = name;
    }
    Animal.prototype.eat = function () {
        console.log("\u5403");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return "\u5C0F\u72D7" + this.nickName + "\u5403\u9AA8\u5934";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return "\u5C0F\u732B" + this.nickName + "\u5403\u9C7C";
    };
    return Cat;
}(Animal));
// -------------------------------------------------------------
// 抽象类 提供其他类继承的基类 “不能直接被实例化”
// 使用 abstract关键字来定义抽象类和抽象方法 抽象类中的抽象方法“必须在继承的子类中实现”
// abstract抽象方法只能放在抽象类中 抽象类和抽象方法是用来定义标准的，父类要求子类必须实现某些方法。
var AbsAnimal = /** @class */ (function () {
    function AbsAnimal(name) {
        this.nickName = name;
        // 一些初始化的方法可以在构造器中直接实现
        this.run();
    }
    AbsAnimal.prototype.run = function () {
        console.log(this.nickName + "\u5728\u8DD1\u6B65");
    };
    return AbsAnimal;
}());
var AbsCat = /** @class */ (function (_super) {
    __extends(AbsCat, _super);
    function AbsCat(name) {
        return _super.call(this, name) || this;
    }
    AbsCat.prototype.eat = function () {
        console.log(this.nickName + "\u5403\u9C7C");
    };
    return AbsCat;
}(AbsAnimal));
var abscat = new AbsCat("Tom");
abscat.eat();
