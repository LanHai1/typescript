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

// -------------------------------------------------------------

// 声明类
class Person {
    nickName: string
    // 构造器 实例化对象的时候就会触发这个方法 把传递过来的值设置给类里面的属性
    constructor(name: string) {
        this.nickName = name
    }
    getInfo(): string {
        return `我叫${this.nickName}`
    }
    // 可以通过方法设置类里面属性的值
    setInfo(name: string): void {
        this.nickName = name
    }
}
let per = new Person("蓝海")
per.setInfo("jeck")
console.log(per.getInfo())

// -------------------------------------------------------------

// 类的继承
class Student {
    nick: string
    age: number
    constructor(n: string, a: number) {
        this.nick = n
        this.age = a
    }
    run(): void {
        console.log(`${this.nick}在跑步`)
    }
}
let stu = new Student("pink", 18)
stu.run()
console.log(stu.age)
// 结合 extends 和 super 关键字继承类
// extends 后面跟继承的父类
// super 触发父类的构造器 传递参数到父类 /* 初始化父类的构造函数 */
class myStudent extends Student {
    constructor(mNick: string, mAge: number) {
        super(mNick, mAge)
    }
    // 子类获取属性和方法的规律 先从自己的类里面去找 没有再去继承的父类里面去找 
    // 类似于es5的构造函数 先从构造函数中找 没有再去构造函数对应的原型对象中找
    // (扩展自己的方法) 获取父类里面的属性
    run() {
        console.log("myRun" + this.nick)
    }
}
let myStu = new myStudent("莉丝", 13)
myStu.run()
console.log(myStu.age)

// -------------------------------------------------------------

// 类里面的修饰符
class Test {
    // 公有的 在类、子类、类外面都可以访问
    public nickName: string
    // 保护类型 在类、子类里面可以访问，在类外面无法访问
    protected age: number
    // 私有 在类里面可以访问，在子类、类外面无法访问
    private sex: string
    // 属性如果不加修饰符 默认就是公有的

    constructor(_name: string, _age: number, _sex: string) {
        this.nickName = _name
        this.age = _age
        this.sex = _sex
    }
}
class Test_ji_chen extends Test {
    constructor(_name: string, _age: number, _sex: string) {
        super(_name, _age, _sex)
    }
    run() {
        console.log(this.nickName); // "jack"
        console.log(this.age); // 18
        // console.log(this.sex); // err 属性“sex”为私有属性，只能在类“Test”中访问。
    }
}
let test = new Test_ji_chen("jack", 18, "男")
console.log(test.nickName); // "jack"
// console.log(test.age); // 属性“age”受保护，只能在类“Test”及其子类中访问。
// console.log(test.sex); // 属性“sex”为私有属性，只能在类“Test”中访问。
test.run()

// -------------------------------------------------------------

// 静态属性和静态方法
// 通过 static 关键字来声明的属性和方法 就是静态属性和静态方法
// 静态属性必须赋值 静态方法中 "只能" 访问这个类里面的静态属性 通过类名.静态属性来访问 
class staticFn {
    public nickName: string /* 实例属性 */
    static myAge: number = 19 /* 静态属性 必须赋值 */
    constructor(name: string) {
        this.nickName = name
    }
    sayHi(): void { /* 实例方法 */
        console.log(`sayhi,${this.nickName}`)
    }
    static myRun(): void {
        console.log(`我${staticFn.myAge}岁我可以跑步`);
    }
}
let sta = new staticFn("蓝海")
// 实例属性
console.log(sta.nickName);
// 实例方法
sta.sayHi()
// 静态属性
console.log(staticFn.myAge);
// 静态方法
staticFn.myRun()
// 静态属性和静态方法的用途
// 如 jquery中 
// 通过 $(el).css()这是实例方法 $(el)返回了 这个方法获取的DOM元素 然后.css()方法设置样式
// $.ajax() 这是静态方法 直接通过 $.出来的方法

// -------------------------------------------------------------

// 多态 父类定义一个方法不去实现 让继承的子类去实现 每个子类有不同的表现
// 多态属于继承
class Animal {
    public nickName: string
    constructor(name: string) {
        this.nickName = name
    }
    eat() {
        console.log(`吃`);
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat(): string {
        return `小狗${this.nickName}吃骨头`
    }
}
class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }
    eat(): string {
        return `小猫${this.nickName}吃鱼`
    }
}

// -------------------------------------------------------------

// 抽象类 提供其他类继承的基类 “不能直接被实例化”
// 使用 abstract关键字来定义抽象类和抽象方法 抽象类中的抽象方法“必须在继承的子类中实现”
// abstract抽象方法只能放在抽象类中 抽象类和抽象方法是用来定义标准的，父类要求子类必须实现某些方法。
abstract class AbsAnimal {
    protected nickName: string
    constructor(name: string) {
        this.nickName = name
        // 一些初始化的方法可以在构造器中直接实现
        this.run()
    }
    abstract eat(): void
    run(): void {
        console.log(`${this.nickName}在跑步`);
    }
}
class AbsCat extends AbsAnimal{
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log(`${this.nickName}吃鱼`);
    }
}
let abscat = new AbsCat("Tom")
abscat.eat()