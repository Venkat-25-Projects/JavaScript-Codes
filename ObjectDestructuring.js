const person = {
    firstName: "Elon",
    lastName: "Musk",
}
//  let fname = person.firstName;
//  let lname = person.lastName;

// let {property1: variable1, property2: variable2} = Object;

let{firstName: fname, lastName: lname} = person;
console.log(fname, lname); // Elon Musk