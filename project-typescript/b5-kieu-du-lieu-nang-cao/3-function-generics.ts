/**
 * Yêu cầu đặt ra viết hàm hiển thị dữ liệu với toàn bộ kiểu dữ liệu truyền vào
 * @param value 
 */

function display<T>(value: T): void{

  console.log(`Value is ${value}`);
  
}

display(100);
display('hello');
display(true);