"use strict";
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
function getData(value) {
    return value;
}
console.log(getData(111));
console.log(getData("myData"));
// -------------------------------------------------------------
// 泛型类 
// 根据传入的数据(字符串或number) 返回对应数据类型的最小值
var minClass = /** @class */ (function () {
    function minClass() {
        this.list = [];
    }
    minClass.prototype.add = function (arr) {
        this.list = this.list.concat(arr);
    };
    minClass.prototype.min = function () {
        var min = this.list[0];
        // 对比大小
        this.list.forEach(function (val) {
            min = val > min ? min : val;
        });
        return min;
    };
    return minClass;
}());
var min = new minClass();
min.add(["z", "u", "c"]);
min.add(["j", "h", "m"]);
console.log(min.min());
var min1 = new minClass();
min1.add([2, 3, 4]);
min1.add([5, 6, 7]);
console.log(min1.min());
var person = function (nickName) {
    return nickName;
};
var person2 = function (nickName) {
    return nickName;
};
person("蓝");
person2(11);
// -------------------------------------------------------------
// 把类作为参数来约束数据传入的类型
var User = /** @class */ (function () {
    function User(params) {
        var userName = params.userName, passWord = params.passWord;
        this.userName = userName;
        this.passWord = passWord;
    }
    return User;
}());
var MySqlDB = /** @class */ (function () {
    function MySqlDB() {
    }
    MySqlDB.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MySqlDB;
}());
var userInfo = new User({ userName: "蓝湖", passWord: "lanhai" });
var addUserInfo = new MySqlDB();
addUserInfo.add(userInfo);
// -------------------------------------------------------------
// 配合泛型 把类作为参数来约束数据的传递
var MyUser = /** @class */ (function () {
    function MyUser(params) {
        var userName = params.userName, passWord = params.passWord, info = params.info;
        this.userName = userName;
        this.passWord = passWord;
        this.info = info == undefined ? "未描述信息" : info;
    }
    return MyUser;
}());
var MyMySqlDb = /** @class */ (function () {
    function MyMySqlDb() {
    }
    MyMySqlDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MyMySqlDb;
}());
var myUserInfo = new MyUser({
    userName: "jack",
    passWord: "jack"
});
var myAddUserInfo = new MyMySqlDb();
myAddUserInfo.add(myUserInfo);
