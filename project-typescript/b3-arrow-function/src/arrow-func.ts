// cách kiểu giá trị truyền vào 
// Trả về cho lời gọi hàm
function sum1(a: number, b: number) : number {
  return a + b;
}

console.log(sum1(100, 200));

// Cách sử dụng hàm ArrowFunction:
// từ khóa function thay bằng dấu mũi tên
// 
let add = (a: number, b: number): number => {

  return a + b;
}

// cú pháp rút gọn:
let add2 = (a: number, b: number): number => a + b;

console.log("Value of method add: " + add(400, 300));
console.log("Value of method add2: " + add2(400, 300));