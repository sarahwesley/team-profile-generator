const Employee = require('../lib/Employee');

// create am employee object
test('creates an employee object', () => {
    const employee = new Employee('Sarah', 123, 'sarah.davis2017@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    });

// get name from getName
test('get an employee name', () => {
    const employee = new Employee('sarah', 123, 'sarah.davis2017@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// get employee id from getID
test('get an employee ID', () => {
    const employee = new Employee('sarah', 123, 'sarah.davis2017@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
    
});

// get employee email from getEmail
test('get employee email', () => {
    const employee = new Employee('sarah', 123, 'sarah.davis2017@gmail.com');
    expect(employee.email).toEqual(expect.any(String));

});

// get employee role from getRole
test('get employee role', () => {
    const employee = new Employee('sarah', 123, 'sarah.davis2017@gmail.com', 'Employee');
    expect(employee.getRole()).toEqual("Employee");

});

