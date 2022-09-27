"use strict";
// Using for loop with arrow-function
// Khai báo một mảng các số không giới hạn
let sumLoop = (a, ...b) => {
    let s = a;
    for (let i = 0; i < b.length; i++) {
        const element = b[i];
        s += element;
    }
    return s;
};
console.log(sumLoop(4));
console.log(sumLoop(1, 2, 3, 4));
console.log(sumLoop(3, 4, 5, 3, 0));
console.log(sumLoop(10, 22));
//# sourceMappingURL=arrow-function-for-loop.js.map