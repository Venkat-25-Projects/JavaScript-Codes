class Counter {
    static #validate(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Value must be a non-negative number");
        }
    }

    constructor(start) {
        Counter.#validate(start);
        this.count = start;
    }

    increment() {
        this.count++;
    }

    getCount() {
        return this.count;
    }
}

const counter = new Counter(5);
counter.increment();
console.log(counter.getCount());
