"use strict";
// 布尔类型
var bool = true;
bool = false;
console.log(bool); // false
// -------------------------------------------------------------
// 数字类型
var num = 1;
num += 10;
console.log(num); // 11
// -------------------------------------------------------------
// 字符串类型
var str = "hello ts";
str += "!";
console.log(str); // hello ts!
// -------------------------------------------------------------
// 数组类型
// 一、规定统一数组中元素的数据类型
var arr1 = [2, 1];
console.log(arr1);
// 二、元组类型 属于数组类型的一种
//   规定数组中所有的元素统一类型 泛型
var arr2 = ["hehe", "heh", "hehh"];
console.log(arr2);
//   规定数组中每个元素的数据类型
var arr3 = [1, "2", 3];
console.log(arr3);
// 三、数组中的元素可以是任意数据类型
var arr4 = [2, 3, "ss"];
console.log(arr4);
// -------------------------------------------------------------
// 枚举类型
// 规定一组特殊表达某个意义的词汇 如数字状态码
/**
 * success 成功 对应 1
 * errpr 失败 对应 2
 * ...
 */
// 后面的标示符没有给值会默认根据前面的标示符( <= number)生成对应的值(递增)
// 注意 如果前面的标示符是字符串 后面的标示符必须赋值！！！
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var s = Flag.success;
console.log(s); // 1
var e = Flag.error;
console.log(e); // 2
// 如果标识符没有给值 默认是下标
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["blue"] = 2] = "blue";
    Color[Color["hotpink"] = 3] = "hotpink";
})(Color || (Color = {}));
var red = Color.red, yellow = Color.yellow, hotpink = Color.hotpink;
console.log(red, yellow, hotpink); // 0 1 3 
// -------------------------------------------------------------
// 任意类型 
// 可以赋值任意类型的数据
// 用途 如获取DOM元素后为这个DOM元素设置样式 
var isTs = 1;
isTs = "is typescript";
console.log(isTs); // isTs
// -------------------------------------------------------------
// null 和 undefined
var n;
n = null;
console.log(n); // null
var u;
u = undefined;
console.log(u); // undefined
// 设置一个变量可能是undefined 可能是number 
var numUndefind;
console.log(numUndefind); // undefined
numUndefind = 1;
console.log(numUndefind); // 1
// -------------------------------------------------------------
// void类型 表示没有任何类型 一般用在定义方法的时候没有返回值
var myFn = function () { };
// 函数定义返回值 
var myFn1 = function () {
    return 1;
};
var myFn2 = function () {
    return "myFn2";
};
// 如果不设置数据类型 默认设置 “赋值的值” 的数据类型
