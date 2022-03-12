const Intern = require('../lib/Intern');

// create an intern
test('create an intern object', () => {
    const intern = new Intern('sarah', 123, 'email@email.com','UCF');
    expect(intern.school).toEqual(expect.any(String));
});

// get interns school
test('get employee School', () => {
    const intern = new Intern('sarah', 123, 'email@email.com','UCF');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// get role for intern
test('get role of Intern', () => {
    const intern = new Intern('sarah', 123, 'email@email.com','UCF');
    expect(intern.getRole()).toEqual("Intern");
});