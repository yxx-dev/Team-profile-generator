const Intern = require('../lib/Intern');

describe('Intern',()=>{
     //tests of behavior receiving data from command line
     describe('class/module',()=>{
        //postive test
        it('should store Intern data in an object from command line entry', ()=>{
            const test = ['dah', 654, 'dah@gmail.com', 'UW'];//Intern's name, employee ID, email address, school
            const result = new Intern(...test);
            expect([result.name, result.employeeId, result.email, result.school]).toEqual(test);
        });
    });
})