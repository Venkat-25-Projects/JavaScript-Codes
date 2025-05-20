class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    changeName(newName){
        this.name = newName;
    }
}
const person1 = new Person("john",25);
person1.changeName = "Vishnu";
console.log(person1);