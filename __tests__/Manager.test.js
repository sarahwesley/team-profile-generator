// import manager
const Manager = require('../lib/Manager');

// create a manager

test('create a manager', () => {
    const manager = new Manager('sarah', 123, 'email@emial.com', 64);
    expect(manager.officeNum).toEqual(expect.any(Number));
});

//get role
test('get role of manager', () => {
    const manager = new Manager('sarah', 123, 'email@emial.com', 64);
    expect(manager.getRole()).toEqual("Manager");
});
