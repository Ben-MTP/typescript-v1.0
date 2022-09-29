/**
 * Tạo mới Class Dirtionary với 2 kiểu giá trị truyền vào
 */
class Dictionary<T, U>{

  /**
   * Định nghĩa constructor khởi tạo các tham số cho Class
   * @param key Tham số đầu tiên với kiểu là T
   * @param value Tham số thứ 2 với kiểu là U
   */
  constructor(public key: T, public value: U){

  }

  /**
   * Hàm hiển thị thông tin với không kiểu giá trị trả về
   */
  display(): void{
    console.log(`Key = ${this.key} and value = ${this.value}`);
    
  }
}

let dictionary: Dictionary<string, number>; // Khởi tạo một biến có kiểu dữ liệu là Directionary
dictionary = new Dictionary('100', 300);    // Giá giá trị của dictionary bằng cách khởi tạo qua constructor

dictionary.display();