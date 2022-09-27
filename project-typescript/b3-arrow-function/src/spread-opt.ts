// Trộn các phần từ của mảng với nhau
// Thành một mảng mới

let ars1 = [12, 3, 4, 5, 6];
let ars2 = [3, 4, 3, 2, 0];

let ars3 = [...ars1, ...ars2];

// Kết quả tổng hợp từ 2 mảng
console.log(ars3);

// 2. Kết hợp nhiều đối tượng lại với nhau

let person: {
  name: string
} = {
  name: 'Khổng Minh Mạnh'
}

let salary: {
  salary: number
} = {
  salary: 3000
}

// In giá trị kết hợp của 2 Object:
// Nó in ra giá trị giống kiểu JSON nhỉ?
let employee = { ...person, ...salary };
console.log(employee);