"use strict";
let sum2 = (x = 5, y) => x + y;
const printOutput2 = (output) => console.log("Result: " + output);
printOutput2(sum2(300, 100));
printOutput2(sum2(undefined, 5));
printOutput2(sum2(3, 5));
//# sourceMappingURL=function-3.js.map