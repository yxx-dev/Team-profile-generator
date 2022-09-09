const index = require('../index');

describe('index',()=>{
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