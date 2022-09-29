
/**
 * Khai báo một kiểu dữ liệu Combinable là sự kết hợp của string và number
 */
type Combinable = string | number;
type Numberic = number | boolean;
type Universal = Combinable | Numberic;

// Khai báo một biến num: có kiểu dữ liệu Combinable đó
let num: Combinable;
let faction: Numberic;
let un: Universal;

num = 20;
num = 'ManhhKM';
// num = false;
console.log(num);

num = 100;

un = true;
un = 'manhkm';
un = 100;
console.log(un);
