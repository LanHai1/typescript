/**
 * 接口的作用 
 * 在面向对象的编程中 接口是一种规范的定义 它定义了行为和动作的规范
 * 在程序设计里面 接口起到一种限制和规范的作用
 * 接口定义了某一批类所需要遵守的规范 接口不关心这些类的内部状态数据 也不关心这些类里面的方法的实现细节
 * 它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需求 
 * typescript中的接口类似于Java 同时还增加了更灵活的接口类型 包括属性、函数、可索引和类...
 */

// 属性类型接口 对属性(变量、形参)的数据进行约束
// 如 规定一组数据设置类型 设置给类或函数中形参的数据类型 在使用这个类或函数时必须按照接口的规定来传递数据
interface FullName {
    firstName: string
    // 接口的可选属性 加?号即可 可传可不传
    secoundName?: string
}
class MyName {
    protected name: FullName
    constructor(name: FullName) {
        this.name = name
    }
    allName(): void {
        console.log(`${this.name.firstName}${this.name.secoundName ? "---" + this.name.secoundName : ""}`);
    }
}
let myname = new MyName({
    firstName: "jack"
})
myname.allName()
let YouName = (name: FullName): void => {
    console.log(`${name.firstName}${name.secoundName ? "/" + name.secoundName : ""}`);
}
YouName({
    firstName: "蓝",
    secoundName: "海"
})

// -------------------------------------------------------------

// 接口 ajax 案例
/**
 * $.ajax({
 *  type:"get",
 *  url:"test.json",
 *  data:{name:"蓝海",age:11},
 *  dataType:"json"
 * })
 */
interface myAjax {
    type: string,
    url: string,
    data?: object,
    dataType: string
}
class $ {
    static ajax(obj: myAjax) {
        // 可以xml小黄人ajax处理请求数据
        console.log(obj);
    }
}
$.ajax({
    type: "get",
    url: "test.json",
    data: { name: "蓝海", age: 11 },
    dataType: "json"
})

// -------------------------------------------------------------

// 函数类型接口
// 对方法传入的参数 以及返回值进行约束 可批量约束
// 函数接口只能用在函数表达式上面
interface MyFn {
    // 参数的数据类型               // 返回值 的数据类型
    (key: string, value: string): string
}
let myFn11: MyFn = (key: string, value: string) => {
    return `${key}:${value}`
}
console.log(myFn11("name", "jack"));
let myFn22: MyFn = function (key: string, value: string) {
    return `${key}---${value}`
}
console.log(myFn22("age", "11"));

// -------------------------------------------------------------

// 类 类型接口 对类的约束 和抽象类有点类似 
// 通过关键字 implements 来对类进行接口约束
interface MyClass {
    // 子类必须实现这里面的属性和方法
    nickName: string
    eat(food: string): void
}
class AnimalInterface implements MyClass {
    nickName: string
    constructor(name: string) {
        this.nickName = name
    }
    eat(food: string): void {
        console.log(`${this.nickName} eat ${food} !!`);
    }
}

let myAnimal = new AnimalInterface("猫")
myAnimal.eat("🐟")

// -------------------------------------------------------------

// 接口扩展 接口可以继承接口
interface Student1 {
    nickName: string
    sayHi(): void
}
interface StudentMan extends Student1 {
    play(playing: string): void
}
class LanHai implements StudentMan {
    nickName: string
    constructor(name: string) {
        this.nickName = name
    }
    sayHi() {
        console.log(`hi!`);
    }
    play(playing: string) {
        console.log(`i am man ,i play ${playing}`);
    }
}
let lh = new LanHai("兰海")
lh.sayHi()
lh.play("王者荣耀")

// -------------------------------------------------------------

// 类的继承 + 接口扩展
// "extends" 子句必须位于 "implements" 子句之前
interface Student2 {
    nickName: string
    sayHi(): void
}
// 接口扩展
interface StudentMan2 extends Student2 {
    play(playing: string): void
}
// 类实现接口
class LanHai2 {
    public nickName: string
    constructor(name: string) {
        this.nickName = name
    }
    work(): void {
        console.log(`${this.nickName}-敲代码`);
    }
}
// 类的继承
class myLanHai2 extends LanHai2 implements StudentMan2 {
    constructor(name: string) {
        super(name)
    }
    sayHi() {
        console.log("你好");
    }
    play(playing: string) {
        console.log(`我在玩${playing}`);
    }
}
let mylh2 = new myLanHai2("jack")
mylh2.sayHi()
mylh2.work()
mylh2.play("王者荣耀")