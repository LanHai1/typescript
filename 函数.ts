// 函数的定义 规定形参的类型和函数返回值的类型
let fnInfo = (nickname: string, age: number): string => {
    return `${nickname} -- ${age}`
}
console.log(fnInfo("lanhai", 11)) // lanhai -- 11

// -------------------------------------------------------------

// 可选参数 形参后面加问号即可 默认是必传
// 可选参数必须设置在形参最后面 不能前面是可传 后面是必传
// ❌(nickname?:string,age:number) ✅(nickname:string,age?:number)
let fnInfo1 = (nickname: string, age?: number): string => {
    return age ? `${nickname} -- ${age}` : `${nickname} -- 年龄保密`
}
console.log(fnInfo1("lanhai", 11))
console.log(fnInfo1("lanhai"))

// -------------------------------------------------------------

// 默认参数 形参后面加等号跟上默认值即可
// 参数不能同时是默认参数或者是可选参数 默认参数也必须写在形参中的最后面
// 如果默认参数传递了值 那这个默认参数的值以传递过来的值为准 
// 相当于es5中的 a = a || 20
let fnInfo2 = (nickname: string, age: number = 10): string => {
    return `${nickname} -- ${age}`
}
console.log(fnInfo2("hai!"));

// -------------------------------------------------------------

// 剩余参数 通过三点运算符 接收传递过来的值 赋给对应的数组 
// 相当于es5中的 arguments
let fnSum = (...res: Array<number>) => {
    let sum: number = 0;
    res.forEach(val => {
        sum += val
    });
    return sum
}
console.log(fnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 50

// -------------------------------------------------------------

// 函数的重载 
// java中的重载 是指两个以上同名函数 但它们的参数不一样 这时就会出现函数重载的情况
// typescript中的重载 “同样的函数传递‘不同类型’的参数 执行不同的功能” 
// 通过为同一个函数提供 形参不同类型来判断实现多种功能
function fn(name: string, sex: string, love: string): string;
function fn(age: number): string;
function fn(str: any, ...res: Array<any>): any {
    return typeof str === "string" ? `我叫${str},我是${res[0]}生,我爱好${res[1]}` : `我${str}岁了`
}
console.log(fn("lanhai", "男", "编程"))
function fn1(name: string, sex: string): string;
function fn1(age: number): string;
function fn1(str: any, sex?: string): any {
    return typeof str === "string" ? `我叫${str},我是${sex}生` : `我${str}岁了`
}
console.log(fn1("lanhai1", "男"))
