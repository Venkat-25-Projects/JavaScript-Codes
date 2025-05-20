class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get greet(){
        return "Hello" + this.name;
    }
}
const person1 = new Person("john",25);
console.log(person1.greet);