// import emploee
const Employee = require('./Employee');

// intern will extend employee
class Intern extends Employee {
    constructor ( name, id, email, school) {
        super (name, id, email);

        this.school = school;
    }

    // return school
    getSchool () {
        return this.school;
    }

    // return employee role as intern
    getRole() {
        return "Intern";
    }
}

// export Intern
module.exports = Intern;