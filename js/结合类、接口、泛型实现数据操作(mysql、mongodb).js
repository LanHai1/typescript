"use strict";
// mysql类 模拟操作数据库
var MySql = /** @class */ (function () {
    function MySql() {
        // 模拟数据库用户表
        this.userList = [];
        // 模拟数据库连接成功
        console.log("\uD83D\uDD17MySql\u6570\u636E\u5E93\u6210\u529F");
    }
    // 添加数据
    MySql.prototype.add = function (info) {
        this.userList.unshift(info);
        return true;
    };
    // 修改数据
    MySql.prototype.update = function (info, id) {
        var userRes = this.get(id);
        if (typeof userRes === "string")
            return "更新失败,未查到此用户";
        this.userList.map(function (val) {
            if (val.id === id) {
                var userName = info.userName, passWord = info.passWord;
                val.userName = userName;
                val.passWord = passWord;
                if (info.infoMassage) {
                    val.infoMassage = info.infoMassage;
                }
            }
        });
        return true;
    };
    // 删除数据
    MySql.prototype.delete = function (id) {
        var _this = this;
        var userRes = this.get(id);
        if (typeof userRes === "string")
            return "删除失败,未查到此用户";
        this.userList.filter(function (element, index) {
            if (element.id === id) {
                return _this.userList.splice(index, 1);
            }
        });
        return true;
    };
    // 获取数据
    MySql.prototype.get = function (id) {
        if (id && this.userList.length !== 0) {
            var res = this.userList.filter(function (element) { return element.id === id; });
            return res.length === 0 ? "未查到此用户" : res;
        }
        return this.userList.length === 0 ? "暂无数据" : this.userList;
    };
    return MySql;
}());
// 用户信息类 相当于数据库中的表结构 校验数据
var UserInfo = /** @class */ (function () {
    function UserInfo(params) {
        var userName = params.userName, passWord = params.passWord, infoMassage = params.infoMassage, id = params.id;
        this.userName = userName;
        this.passWord = passWord;
        this.infoMassage = infoMassage ? infoMassage : "未填写信息";
        this.id = id;
    }
    return UserInfo;
}());
var user = new UserInfo({
    userName: "蓝海",
    passWord: "lanhai",
    id: 1
});
var user2 = new UserInfo({
    userName: "jack",
    passWord: "jack1",
    id: 2
});
var user3 = new UserInfo({
    userName: "rome",
    passWord: "rome1",
    id: 3
});
// 操作mysql数据库
var mySqlDb = new MySql();
// 添加数据
mySqlDb.add(user);
mySqlDb.add(user2);
mySqlDb.add(user3);
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
