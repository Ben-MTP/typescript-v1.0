
interface Printable{
  print(): void;
}

interface Sortable{
  sort(): void;
}

/**
 * Định nghĩa một IDocument thực hiện các action được quy định trong Printable và Sortable
 * Vậy các method riêng của print và sort thì làm như thế nào
 * Hỗ trợ việc mở rộng từ nhiều interface khác nhau
 */
interface IDocument extends Printable, Sortable{
  open(): void
}

class PolyDocument implements IDocument{

  constructor(){
    console.log('Default constructor PolyDocument');
  }

  open(): void {
    console.log('Open Poly-Document');
  }
  sort(): void {
    console.log('Sort Poly-Document');
  }

  print(): void {
    console.log('Print poly-document');
  }
}

/**
 * Khởi tạo một đối tượng từ class -> nếu không có constructor thì chúng sẽ lấy mặc định
 */
let poly = new PolyDocument();
poly.open();
poly.sort();
poly.print();