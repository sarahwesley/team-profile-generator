// import employee constructor
const Employee = require('./Employee');

// engineer constructor will extend employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    // return github
    getGithub() {
        return this.github;

    }

    // change employee role to engineer
    getRole() {
        return "Engineer";
    }
};

// export Engineer
module.exports = Engineer;