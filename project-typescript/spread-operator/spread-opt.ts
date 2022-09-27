
//1. Kết hợp các kiểu mảng cơ sở
let ars1 = [12,3,4,5,6,5];

let ars2 = [3,4,5,2,3,4];

let ars3 = [...ars1, ...ars2];

console.log(ars3);

//2. Kết hợp các kiểu Object:

//3. Object Destructuring:

function myFunction(x, y, z){
  console.log(x);
  console.log(y);
  console.log(z);
}

var parameterArray = [0, 3, 4];

// myFunction(...parameterArray);