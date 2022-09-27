// MERGING OBJECT:

let person: {
  name: string,
  age: number
} = {
  name: 'Typescript',
  age: 11
}

const salary: {
  grade: string,
  basic: string
} = {
  grade: 'A',
  basic: '$3000'
}

const address: {
  city: string,
  district: string,
  wards: string
} = {
  city: 'Hà Nội',
  district: 'Bắc Từ Liêm',
  wards: 'Xuân Đỉnh'
}

const summary = {person, ... address ,...salary};
console.log(summary);


// ARRAY:
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies);
activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

console.log(activeHobbies);