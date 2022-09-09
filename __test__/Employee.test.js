const Employee = require('../lib/Employee');

describe('Employee',()=>{
     //tests of behavior receiving data from command line
     describe('class/module',()=>{
        //postive test
        it('should store employee data in an object from command line entry', ()=>{
            const test = ['lukas', 335, 'lukas@gmail.com'];//employee's name, employee ID, email address
            const result = new Employee(test);
            expect([result.name, result.employeeId, result.email, result.officeNumber]).toEqual(test);
        });
        //negative test
        it('should prompt again', ()=>{
            const test = ['test', 222];//employee's name, employee ID, email address
            const result = new Employee(test);
            const err = new Error('incomplete entries');
            expect(result).toThrowError(err);
        });
        //exception test
        it('should prompt again', ()=>{
            const test = ['', , ''];//employee's name, employee ID, email address
            const result = new Employee(test);
            const err = new Error('incomplete entries');
            expect(result).toThrowError(err);
        });
/*
        it('should store engineer info command line entry in an object', ()=>{
            const test = ['yilun', 777, 'yilun@gmail.com', 'yxx-dev'];//engineer’s name, ID, email, and GitHub username
            const result = new Engineer(test);
            expect([result.name, result.employeeId, result.email, result.githubUsername]).toEqual(test);
        });
        it('should store intern info command line entry in an object', ()=>{
            const test = ['lol', 345, 'lol@gmail.com', 'uw'];//intern’s name, ID, email, and school
            const result = new Intern(test);
            expect([result.name, result.employeeId, result.email, result.school]).toEqual(test);
        });
*/
    });
})