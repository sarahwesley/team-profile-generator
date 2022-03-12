// constructor for employee
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

// return id from the input
    getId() {
        return this.id;
    }

    // return email from the input
    getEmail() {
        return this.email;
    }

    // return role as employee
    getRole() {
        return "Employee";

    }

};

// export eEmployee
module.exports = Employee;
