/**
 * Modules: 
 * TypeScript hỗ trợ việc tách mã của bạn thành các module riêng biệt 
 * và quản lý chúng theo mô hình nhóm, giúp tăng tính rõ ràng và dễ quản lý của mã.
 */

export class Person{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  sayHello():void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }
}
