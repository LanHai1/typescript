/**
 * 泛型：软件工程中 我们不仅要创建一致的定义良好的API 同时也要考虑代码的可重用性
 *      组件不仅能够支持当前的数据类型 同时也能支持未来的数据类型 这在创建大型系统时为你提供了十分灵活的功能
 * 
 *      在像C#和Java这样的语言中 可以使用泛型来创建可重用的组件 一个组件可以支持多种数据的类型 
 *      这样用户就可以以自己的数据类型来使用组件
 * 
 *      通俗理解： 泛型就是解决 类、接口、方法 的复用性 以及对不特定数据类型的支持（数据类型校验）帮助我们避免重复的代码
 * 
 *      不希望在编写代码的时候约束数据类型 而是根据传递过来的数据类型返回对应数据类型的结果
 */

// 泛型的定义 - 泛型函数 
// T表示泛型 具体什么类型是调用这个方法的时候决定的
// 希望传入的值和返回的值数据类型一致 就可以使用泛型
function getData<T>(value: T): T {
    return value
}
console.log(getData(111));
console.log(getData("myData"));

// -------------------------------------------------------------

// 泛型类 
// 根据传入的数据(字符串或number) 返回对应数据类型的最小值
class minClass<T> {
    public list: Array<T> = []
    add(arr: Array<T>) {
        this.list = this.list.concat(arr)
    }
    min(): T {
        let min = this.list[0]
        // 对比大小
        this.list.forEach(val => {
            min = val > min ? min : val
        });
        return min
    }
}
let min = new minClass<string>()
min.add(["z", "u", "c"])
min.add(["j", "h", "m"])
console.log(min.min());
let min1 = new minClass<number>()
min1.add([2, 3, 4])
min1.add([5, 6, 7])
console.log(min1.min());

// -------------------------------------------------------------

// 泛型接口
interface MyPer {
    <T>(nickName: T): T
}
let person: MyPer = function <T>(nickName: T) {
    return nickName;
}
let person2: MyPer = <T>(nickName: T) => {
    return nickName
}
person("蓝")
person2(11)

// -------------------------------------------------------------

// 把类作为参数来约束数据传入的类型
class User {
    public userName: string | undefined
    public passWord: string | undefined
    constructor(params: {
        userName: string | undefined,
        passWord: string | undefined
    }) {
        let { userName, passWord } = params
        this.userName = userName
        this.passWord = passWord
    }
}
class MySqlDB {
    add(user: User): boolean {
        console.log(user);
        return true
    }
}
let userInfo = new User({ userName: "蓝湖", passWord: "lanhai" })
let addUserInfo = new MySqlDB()
addUserInfo.add(userInfo)

// -------------------------------------------------------------

// 配合泛型 把类作为参数来约束数据的传递
class MyUser {
    public userName: string | undefined
    public passWord: string | undefined
    public info: string | undefined
    constructor(params: {
        userName: string | undefined,
        passWord: string | undefined,
        // 信息可传可不传
        info?: string | undefined
    }) {
        let { userName, passWord, info } = params
        this.userName = userName
        this.passWord = passWord
        this.info = info == undefined ? "未描述信息" : info
    }
}
class MyMySqlDb<T>{
    add(user: T): boolean {
        console.log(user);
        return true
    }
}
let myUserInfo = new MyUser({
    userName: "jack",
    passWord: "jack"
})
let myAddUserInfo = new MyMySqlDb<MyUser>()
myAddUserInfo.add(myUserInfo)