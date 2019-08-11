"use strict";
// 函数的定义 规定形参的类型和函数返回值的类型
var fnInfo = function (nickname, age) {
    return nickname + " -- " + age;
};
console.log(fnInfo("lanhai", 11)); // lanhai -- 11
// -------------------------------------------------------------
// 可选参数 形参后面加问号即可 默认是必传
// 可选参数必须设置在形参最后面 不能前面是可传 后面是必传
// ❌(nickname?:string,age:number) ✅(nickname:string,age?:number)
var fnInfo1 = function (nickname, age) {
    return age ? nickname + " -- " + age : nickname + " -- \u5E74\u9F84\u4FDD\u5BC6";
};
console.log(fnInfo1("lanhai", 11));
console.log(fnInfo1("lanhai"));
// -------------------------------------------------------------
// 默认参数 形参后面加等号跟上默认值即可
// 参数不能同时是默认参数或者是可选参数 默认参数也必须写在形参中的最后面
// 如果默认参数传递了值 那这个默认参数的值以传递过来的值为准 
// 相当于es5中的 a = a || 20
var fnInfo2 = function (nickname, age) {
    if (age === void 0) { age = 10; }
    return nickname + " -- " + age;
};
console.log(fnInfo2("hai!"));
// -------------------------------------------------------------
// 剩余参数 通过三点运算符 接收传递过来的值 赋给对应的数组 
// 相当于es5中的 arguments
var fnSum = function () {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
    var sum = 0;
    res.forEach(function (val) {
        sum += val;
    });
    return sum;
};
console.log(fnSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 50
function fn(str) {
    var res = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        res[_i - 1] = arguments[_i];
    }
    return typeof str === "string" ? "\u6211\u53EB" + str + ",\u6211\u662F" + res[0] + "\u751F,\u6211\u7231\u597D" + res[1] : "\u6211" + str + "\u5C81\u4E86";
}
console.log(fn("lanhai", "男", "编程"));
function fn1(str, sex) {
    return typeof str === "string" ? "\u6211\u53EB" + str + ",\u6211\u662F" + sex + "\u751F" : "\u6211" + str + "\u5C81\u4E86";
}
console.log(fn1("lanhai1", "男"));
