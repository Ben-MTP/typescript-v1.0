/**
 * Interfaces:
 * TypeScript cung cấp một cách để định nghĩa các giao diện cho các đối tượng,
 * cho phép bạn xác định các thuộc tính và phương thức mà một đối tượng phải có.
 */
var john = {
    name: "John",
    age: 30,
    sayHello: function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old "));
    }
};
john.sayHello();
