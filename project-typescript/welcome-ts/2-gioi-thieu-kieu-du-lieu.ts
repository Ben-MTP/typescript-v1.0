let a : string | number;

a = 'hello';

console.log('Value: ' + a);

a = 5;

console.log('Value: ' + a);

let unk : unknown;
let st : string;

unk = 5;
unk = 'ManhKM';

// Thực hiện ép kiểu cho giá trị trong TypeScript 
st = <string> unk;
console.log(`st = ${st}`);