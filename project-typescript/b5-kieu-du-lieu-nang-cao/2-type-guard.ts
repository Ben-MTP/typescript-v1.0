
type Combinable2 = string | number;

function add (a: Combinable2, b: Combinable2): Combinable2{

  if(typeof a == 'string' || typeof b == 'string'){
    return a.toString() + b.toString();
  }
  return a + b;

}

console.log(add(100, 200));
console.log(add('ManhKM', 'Hà Nội'));

