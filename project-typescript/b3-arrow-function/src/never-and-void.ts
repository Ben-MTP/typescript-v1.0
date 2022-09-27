
let something: void = undefined;

let nothing: never = null; // Error: Type null is not assignable to type 'never'

function throwErrow(errorMsg: string): never{
  throw new Error(errorMsg);
}