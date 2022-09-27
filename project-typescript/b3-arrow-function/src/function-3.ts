
let sum2 = (x:number = 5, y:number) => x + y;

const printOutput2 = (output: string|number) => console.log("Result: " + output);

printOutput2(sum2(300, 100));
printOutput2(sum2(undefined, 5));
printOutput2(sum2(3,5));