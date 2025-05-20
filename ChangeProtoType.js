function Person(){
    this.name = "John";
}
Person.prototype.age = 25;

const Person1 = new Person();

Person.prototype = {age: 53}
const Person2 = new Person();
console.log(Person1.age);
console.log(Person2.age);
