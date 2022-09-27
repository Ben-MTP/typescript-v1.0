function addArrowFunction2(a: number, b?: number): number {
  if (b) {
    return a + b;
  } else {
    return a;
  }
}

console.log(addArrowFunction2(1,3));
console.log(addArrowFunction2(32));

// Kiểu tham số ngầm định của function:
let addFunctionWithDefault = (a: number, b: number = 100): number => {
  console.log(`Giá trị thứ 1: ${a}`);
  console.log(`Giá trị thứ 2: ${b}`);
  return a + b;
}

console.log('Tính tổng với tham số ngầm định: ' + addFunctionWithDefault(200));