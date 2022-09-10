const Engineer = require('../lib/Engineer');

describe('Engineer',()=>{
     //tests of behavior receiving data from command line
     describe('class/module',()=>{
        //postive test
        it('should store Engineer data in an object from command line entry', ()=>{
            const test = ['yada', 63723, 'yada@gmail.com', 'yxx-dev'];//Engineer's name, employee ID, email address, github username
            const result = new Engineer(...test);
            expect([result.name, result.employeeId, result.email, result.githubUsername]).toEqual(test);
        });
    });
})