/**
 * Interfaces: 
 * TypeScript cung cấp một cách để định nghĩa các giao diện cho các đối tượng, 
 * cho phép bạn xác định các thuộc tính và phương thức mà một đối tượng phải có.
 */

interface Person{
  name: string,
  age: number,
  sayHello(): void;
}

let john: Person = {
  name: "John",
  age: 30,
  sayHello: function(): void{
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old `);
  }
}

john.sayHello();