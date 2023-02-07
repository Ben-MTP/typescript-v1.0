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
var john = new Person("ManhKM", 19);
john.sayHello();
