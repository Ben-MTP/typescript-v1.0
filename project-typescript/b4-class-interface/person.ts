/**
 * Định nghĩa interface Person
 * Các thuộc tính trong interface có thể truy cập được giống như class
 */
interface Person{
  name: string;
}

let p: Person = {
  name: 'Khổng Minh Mạnh'
}

console.log(p);

console.log(p.name);
