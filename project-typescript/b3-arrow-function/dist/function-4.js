"use strict";
// Tùy chọn tham số truyền vào cho hàm
let sum4 = (x = 5, y) => { return x + y; };
const printOutput4 = (output) => console.log("Result: " + output);
printOutput4(sum4(3));
printOutput4(sum4(12, 12));
printOutput4(sum4(12, 5));
//# sourceMappingURL=function-4.js.map