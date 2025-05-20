class Person {
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
    }

    static #fullName(x) {
        return x.firstname + " " + x.lastName;
    }

    display() {
        console.log(Person.#fullName(this)); // Access via class name
    }
}

const person1 = new Person("Hardsham", "DSFGHGFDS");
person1.display(); // Output: Hardsham DSFGHGFDS
