class Person {
    constructor(name) {
        this.name = name;
    }

    static greet(x) {
        console.log("Hello" + x.name);
    }
}

const person1 = new Person("peter");
Person.greet(person1); 