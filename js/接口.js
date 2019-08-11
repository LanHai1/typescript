"use strict";
/**
 * 接口的作用
 * 在面向对象的编程中 接口是一种规范的定义 它定义了行为和动作的规范
 * 在程序设计里面 接口起到一种限制和规范的作用
 * 接口定义了某一批类所需要遵守的规范 接口不关心这些类的内部状态数据 也不关心这些类里面的方法的实现细节
 * 它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需求
 * typescript中的接口类似于Java 同时还增加了更灵活的接口类型 包括属性、函数、可索引和类...
 */
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
var MyName = /** @class */ (function () {
    function MyName(name) {
        this.name = name;
    }
    MyName.prototype.allName = function () {
        console.log("" + this.name.firstName + (this.name.secoundName ? "---" + this.name.secoundName : ""));
    };
    return MyName;
}());
var myname = new MyName({
    firstName: "jack"
});
myname.allName();
var YouName = function (name) {
    console.log("" + name.firstName + (name.secoundName ? "/" + name.secoundName : ""));
};
YouName({
    firstName: "蓝",
    secoundName: "海"
});
var $ = /** @class */ (function () {
    function $() {
    }
    $.ajax = function (obj) {
        // 可以xml小黄人ajax处理请求数据
        console.log(obj);
    };
    return $;
}());
$.ajax({
    type: "get",
    url: "test.json",
    data: { name: "蓝海", age: 11 },
    dataType: "json"
});
var myFn11 = function (key, value) {
    return key + ":" + value;
};
console.log(myFn11("name", "jack"));
var myFn22 = function (key, value) {
    return key + "---" + value;
};
console.log(myFn22("age", "11"));
var AnimalInterface = /** @class */ (function () {
    function AnimalInterface(name) {
        this.nickName = name;
    }
    AnimalInterface.prototype.eat = function (food) {
        console.log(this.nickName + " eat " + food + " !!");
    };
    return AnimalInterface;
}());
var myAnimal = new AnimalInterface("猫");
myAnimal.eat("🐟");
var LanHai = /** @class */ (function () {
    function LanHai(name) {
        this.nickName = name;
    }
    LanHai.prototype.sayHi = function () {
        console.log("hi!");
    };
    LanHai.prototype.play = function (playing) {
        console.log("i am man ,i play " + playing);
    };
    return LanHai;
}());
var lh = new LanHai("兰海");
lh.sayHi();
lh.play("王者荣耀");
// 类实现接口
var LanHai2 = /** @class */ (function () {
    function LanHai2(name) {
        this.nickName = name;
    }
    LanHai2.prototype.work = function () {
        console.log(this.nickName + "-\u6572\u4EE3\u7801");
    };
    return LanHai2;
}());
// 类的继承
var myLanHai2 = /** @class */ (function (_super) {
    __extends(myLanHai2, _super);
    function myLanHai2(name) {
        return _super.call(this, name) || this;
    }
    myLanHai2.prototype.sayHi = function () {
        console.log("你好");
    };
    myLanHai2.prototype.play = function (playing) {
        console.log("\u6211\u5728\u73A9" + playing);
    };
    return myLanHai2;
}(LanHai2));
var mylh2 = new myLanHai2("jack");
mylh2.sayHi();
mylh2.work();
mylh2.play("王者荣耀");
