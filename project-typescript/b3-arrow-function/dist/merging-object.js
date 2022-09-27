"use strict";
// MERGING OBJECT:
let person = {
    name: 'Typescript',
    age: 11
};
const salary = {
    grade: 'A',
    basic: '$3000'
};
const address = {
    city: 'Hà Nội',
    district: 'Bắc Từ Liêm',
    wards: 'Xuân Đỉnh'
};
const summary = Object.assign(Object.assign({ person }, address), salary);
console.log(summary);
// ARRAY:
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
// activeHobbies.push(hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log(activeHobbies);
//# sourceMappingURL=merging-object.js.map