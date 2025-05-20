const person = {
	firstName: "Elon",
	lastName: "Musk",
	getFullName: function() {
		return this.firstName + " " + this.lastName;
	}
};

console.log(person.getFullName());
