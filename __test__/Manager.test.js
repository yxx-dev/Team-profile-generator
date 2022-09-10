const Manager = require('../lib/Manager');

describe('Manager',()=>{
     //tests of behavior receiving data from command line
     describe('class/module',()=>{
        //postive test
        it('should store Manager data in an object from command line entry', ()=>{
            const test = ['yilun', 666, 'yilun@gmail.com', 707];//manager's name, employee ID, email address, office number
            const result = new Manager(...test);
            expect([result.name, result.employeeId, result.email, result.officeNumber]).toEqual(test);
        });
    });
})