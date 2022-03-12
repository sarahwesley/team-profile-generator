const Engineer = require('../lib/Engineer');

// create an enginerr object
test('create an engineer',() => {
    const engineer = new Engineer('Sarah', 123, 'email@email.com', 'sarahwesley');
    expect(engineer.github).toEqual(expect.any(String));
});

// get github
test('get engineer github', () => {
    const engineer = new Engineer('Sarah', 123, 'email@email.com', 'sarahwesley');
    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));
    
});

// get engineer role
test('get role of employee', () => {
    const engineer = new Engineer('Sarah', 123, 'email@email.com', 'sarahwesley');
    expect(engineer.getRole()).toEqual("Engineer");
});