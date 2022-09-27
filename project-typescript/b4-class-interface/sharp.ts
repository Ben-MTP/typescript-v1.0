/**
 * Chuyển kiểu dữ liệu của 2 thuộc tính x và y thành protected.
 * Khi sử dụng với phạm vi truy cập protected thì có 2 ý nghĩa.
 *      + Các thuộc tính/method được đánh dấu protected có thể sử dụng ngay trong chính class đó
 *      + Đồng thời lớp con của nó cũng có thể gọi được các thuộc tính và method đó.
 */
class Sharp {
  protected x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Vẽ hình Sharp với các tạo độ
   */
  draw(): void {
    console.log(`Draw Sharp at ${this.x} and ${this.y}`);
  }
}


// Định nghĩa lớp
class Rectangle extends Sharp {
  width: number;
  height: number;

  /**
   * Định nghĩa constructor cho Class Rectangle
   * Mục đích: thông qua constructor có thể tạo được đối tượng
   * + Sử dụng từ khóa super để gọi đến constructor của lớp cha
   * @param width - chiều rộng
   * @param height - chiều cao
   */
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y);
    this.width = width;
    this.height = height;
  }

  /**
   * Method display có kiểu trả về là void -> tức không trả về gì cả
   * Thực hiện in ra thông tin kích thước của hình chữ nhật
   */
  display(): void {
    console.log(`Rectangle with width: ${this.width} and height: ${this.height}`);
    console.log(`Position at ${this.x} and ${this.y}`);

  }
}

/**
 * Thông qua class Rectangle -> khởi tạo một đối tượng mới
 * Sử dụng: Shift + Alt + F để format code
 */
let rect1: Rectangle = new Rectangle(2, 3, 20, 30);
rect1.display();
rect1.draw();