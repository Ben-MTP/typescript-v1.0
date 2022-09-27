"use strict";
// CALLBACK FUNCTION
// Tính tổng và xử lý nó
function AddandHandle(x, y, cb) {
    const result = x + y;
    cb(result);
}
AddandHandle(10, 20, (result) => { console.log(result); });
//# sourceMappingURL=function-and-callback.js.map