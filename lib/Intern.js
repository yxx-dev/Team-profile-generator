const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, employeeId, email, school) {
        super(name, employeeId, email);
        this.school = school;
    };
}

module.exports = Intern;