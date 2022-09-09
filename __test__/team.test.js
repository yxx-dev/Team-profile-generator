const index = require('../index');

describe('team profile generator',()=>{
    //tests of behavior receiving data from command line
    describe('inquirer',()=>{
        
        it('should store manager info command line entry in an object', ()=>{
            const test = ['lukas', 335, 'lukas@gmail.com', 202];//team manager’s name, employee ID, email address, and office number
            const result = new index.Manager(test);
            expect([result.name, result.employeeId, result.email, result.officeNumber]).toEqual(test);
        });
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

    });

    describe('term member type', ()=>{
        //negative test
        it('should be empty as a default',()=>{
            const test = '';
            expect(currentRole()).toEqual(test);
        });
        //positive tests
        it('should return the engineer type',()=>{
            const test = 'engineer';
            expect(currentRole(test)).toEqual(test);
        });
        it('should return the intern type',()=>{
            const test = 'intern';
            expect(currentRole(test)).toEqual(test);
        });
        //exception tests
        it('should return error',()=>{
            const test = '123';
            const err = new Error(
                'role must be either engineer or intern'
            );
            expect(currentRole(test)).toThrowError(err);
        });
    })

    //tests of behavior printing data on html
    describe('print',()=>{
        it('should print HTML',()=>{
            const sampleHtml = '<p>test HTML<p>';
            const result = printHtml(sampleHtml);
            expect(result).toEqual(sampleHtml);
        }) 
    });
})