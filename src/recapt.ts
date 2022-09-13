const username:string = 'Hola';
const sum = (a: number, b:number) => {
  return a + b;
}

sum(2, 3);

class Person {
  age: number;
  name: string;

  constructor(age: number, name:string) {
    this.age = age;
    this.name = name;
  }

}

const person = new Person(40, 'Fran')
person.age;



