class Person {
    constructor(name) {
        this.name = name;
    }

    static greet() {
        console.log("Hello");
    }
}

const person1 = new Person("peter");
Person.greet(); 