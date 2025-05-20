function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

const person1 = new Person("Elon", "Musk");
const person2 = new Person("Musk", "Mellon");

person1.age = 52;

person2.greet = function() {
    console.log("Hello, Greetstack");
};

console.log(person1);         // { firstName: 'Elon', lastName: 'Musk', age: 52 }
console.log(person2);         // { firstName: 'Musk', lastName: 'Mellon', greet: [Function] }

person2.greet();              // Hello, Greetstack
