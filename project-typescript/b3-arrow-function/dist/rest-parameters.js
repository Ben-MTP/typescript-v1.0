"use strict";
let addInputValues = (message, ...values) => {
    let result = 0;
    values.forEach(item => result += item);
    return `${message} : ${result}`;
};
console.log(addInputValues('Hello'));
console.log(addInputValues('Hello', 1));
console.log(addInputValues('Hello', 1, 2));
console.log(addInputValues('Hello', 1, 2, 3));
console.log(addInputValues('Hello', 1, 2, 3, 4));
console.log(addInputValues('Hello', 1, 2, 3, 4, 5));
console.log(addInputValues('Hello', 1, 2, 3, 4, 5, 6));
//# sourceMappingURL=rest-parameters.js.map