/**
 * 功能：定义一个操作数据库的库 支持 mysql、mongodb...
 * 要求：mysql和mongodb功能一样 都有 add update delete get 方法
 * 注意：约束统一的规范、以及代码的重用
 * 解决方案：需要约束规范所以要定义接口 需要代码重用所以要用到泛型
 * 1:接口: 在面向对象的编程中 接口是一种规范的定义 它定义了行为和动作的规范
 * 2:泛型: 泛型就是解决 类、接口、方法的复用性
 */
// 定义接口
interface DB<T> {
    // 添加
    add(info: T): boolean
    // 更新
    update(info: T, id: number): boolean | string
    // 删除
    delete(id: number): boolean | string
    // 获取
    get(id: number): any[] | string
}
// mysql类 模拟操作数据库
class MySql<T> implements DB<T>{
    // 模拟数据库用户表
    public userList: any[] = []
    constructor() {
        // 模拟数据库连接成功
        console.log(`🔗MySql数据库成功`);
    }
    // 添加数据
    add(info: T): boolean {
        this.userList.unshift(info)
        return true
    }
    // 修改数据
    update(info: any, id: number): boolean | string {
        let userRes = this.get(id)
        if (typeof userRes === "string") return "更新失败,未查到此用户";
        this.userList.map((val) => {
            if (val.id === id) {
                let { userName, passWord } = info
                val.userName = userName
                val.passWord = passWord
                if (info.infoMassage) {
                    val.infoMassage = info.infoMassage
                }
            }
        })
        return true
    }
    // 删除数据
    delete(id: number): boolean | string {
        let userRes = this.get(id)
        if (typeof userRes === "string") return "删除失败,未查到此用户";
        this.userList.filter((element, index) => {
            if (element.id === id) {
                return this.userList.splice(index, 1)
            }
        })
        return true
    }
    // 获取数据
    get(id?: number): any[] | string {
        if (id && this.userList.length !== 0) {
            let res = this.userList.filter(element => element.id === id)
            return res.length === 0 ? "未查到此用户" : res;
        }
        return this.userList.length === 0 ? "暂无数据" : this.userList;
    }
}
// 用户信息类 相当于数据库中的表结构 校验数据
class UserInfo {
    public userName: string | undefined
    public passWord: string | undefined
    public infoMassage: string | undefined
    public id: number
    constructor(params: {
        userName: string | undefined
        passWord: string | undefined
        infoMassage?: string | undefined
        id: number
    }) {
        let { userName, passWord, infoMassage, id } = params
        this.userName = userName
        this.passWord = passWord
        this.infoMassage = infoMassage ? infoMassage : "未填写信息"
        this.id = id
    }
}
let user = new UserInfo({
    userName: "蓝海",
    passWord: "lanhai",
    id: 1
})
let user2 = new UserInfo({
    userName: "jack",
    passWord: "jack1",
    id: 2
})
let user3 = new UserInfo({
    userName: "rome",
    passWord: "rome1",
    id: 3
})

// 操作mysql数据库
let mySqlDb = new MySql<UserInfo>()
// 添加数据
mySqlDb.add(user)
mySqlDb.add(user2)
mySqlDb.add(user3)
// 查询数据
console.log(mySqlDb.get(2));
// 删除数据
console.log(mySqlDb.delete(1));
// 修改数据
console.log(mySqlDb.update({
    userName: "修改user",
    passWord: "修改pwd",
    infoMassage: "我是修改信息"
}, 2));




// 和 mysql操作一样
// // momgodb
// class MongoDb<T> implements DB<T>{
//     constructor() {
//         console.log(`🔗MongoDb数据库成功`);
//     }
//     add(info: T): boolean {
//         console.log(info);
//         return true
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): any[] {
//         throw new Error("Method not implemented.");
//     }
// }
// // 操作mongdb数据库
// let MyMongoDb = new MongoDb<UserInfo>()
// MyMongoDb.add(user)


// 17