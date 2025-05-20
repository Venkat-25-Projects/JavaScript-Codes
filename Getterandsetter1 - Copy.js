class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    set personName(newName){
        this.name = newName;
    }
    get personName(){
        return this.name
    }

}
const person1 = new Person("john",25);

console.log(person1.personName);
person1.personName = "Vishnu";
console.log(person1.personName);
