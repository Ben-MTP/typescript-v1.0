class Person{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  sayHello(): void{
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }
}

let john = new Person("ManhKM", 19);
john.sayHello();
