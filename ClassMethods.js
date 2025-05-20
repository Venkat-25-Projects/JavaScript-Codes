class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        return "Hello " + this.name + " you are " + this.age + " years old";
    }
    changeName(newName){
            this.newName = newName;
    }
}
const person1 = new Person('John', 30);

person1.changeName("Avinash");
console.log(person1);


