// Tùy chọn tham số truyền vào cho hàm

let sum4 = (x:number=5, y?:number) => {return x + <number> y;}

const printOutput4 = (output: string|number) => console.log("Result: " + output);

printOutput4(sum4(3));
printOutput4(sum4(12,12));
printOutput4(sum4(12, 5));