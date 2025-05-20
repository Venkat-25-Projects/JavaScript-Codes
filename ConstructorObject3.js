//Adding Properties and methods in an object.
function Person(first, last){
    this.firstName = first,
    this.lastName = last
}
const person1 = new Person("Elon", "Musk");
const person2 = new Person("Musk", "Mellon");


person1.age = 52;
console.log(person1);

console.log(person1.age);
//Output: { firstName: 'Elon', lastName: 'Musk', age: 52
console.log(person2);
person2.age = 58;
console.log(person2.age);

