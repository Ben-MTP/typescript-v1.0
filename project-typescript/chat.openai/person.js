"use strict";
/**
 * Modules:
 * TypeScript hỗ trợ việc tách mã của bạn thành các module riêng biệt
 * và quản lý chúng theo mô hình nhóm, giúp tăng tính rõ ràng và dễ quản lý của mã.
 */
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old"));
    };
    return Person;
}());
exports.Person = Person;
