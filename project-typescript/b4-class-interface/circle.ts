
class Circle{
  static PI: number = 3.14;

  /**
   * Định nghĩa constructor khởi tạo với 2 tham số
   * @param radius - Bán kính
   * @param color - màu sắc
   */
  constructor(private radius: number, public color: string){

  }

  /**
   * Hàm thực hiện tính bình phương số PI lên
   * @returns - number
   */
  static powPI(): number{
    return Circle.PI * Circle.PI;
  }

  display(): void{
    console.log(`PI = ${Circle.PI}`);
    console.log(`Radius: ${this.radius} and color: ${this.color}`)
  }
}

let circle: Circle = new Circle(100, 'red');  // Khởi tạo một hình tròn có kiểu bán kính 100 và màu đỏ
circle.display();
console.log(Circle.PI);
console.log(Circle.powPI());