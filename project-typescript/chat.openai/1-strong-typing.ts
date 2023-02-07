
/**
 * Strong typing: 
 * TypeScript hỗ trợ kiểu dữ liệu cụ thể, cho phép bạn chỉ định kiểu dữ liệu của các biến, hàm và tham số trong mã của bạn.
 */
let name1: string = "John";
let age: number = 30;

function sayHello(name: string, age: number): void {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

sayHello(name1, age);