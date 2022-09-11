//import inquirer and fs libraries
const inquirer = require('inquirer');
const fs = require('fs');
//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//import function to build html
let buildHtml = require('./lib/html-building-blocks'); 
let managerCurrent = {};
let engineerCurrent =[];
let internCurrent =[];

//getRole();
getManagerData();
//getEngineerData();
//getInternData();

//prompting for manager entries
function getManagerData () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input team manager name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please input team manager employee ID',
            name: 'employeeId',
        },
        {
            type: 'input',
            message: 'Please input team manager email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please input team manager office number',
            name: 'officeNumber',
        },
    ])
    .then(a => {
        let data = [a.name, a.employeeId, a.email, a.officeNumber];
        let validity = true;
        data.forEach((entry) => entry === '' ? validity = false : null);
        if (validity === true) {
            managerCurrent = new Manager(...data);
            console.log(managerCurrent);
            getRole();
        } else {
            console.error('incomplete entries');
            //managerCurrent = {};
            getManagerData();
            }
    });
};

//select a role (engineer or intern) to add
function getRole () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'If adding a team member, select a role:',
            choices: ['engineer', 'intern', 'exit'],
        }
    ])
    .then(a => {
        switch (a.role) {
            case 'exit' :
                console.log('time to print');
                let finalHtml = buildHtml(managerCurrent, engineerCurrent, internCurrent);
                fs.writeFile('./dist/index.html','', () => {
                    fs.writeFile('./dist/index.html', finalHtml, (err) => 
                        err ? console.error(err) : console.log('data recorded')
                    )
                });
                break;
            case 'engineer' :
                console.log(`adding ${a.role}`);
                getEngineerData();
                break;
            case 'intern' : 
                console.log(`adding ${a.role}`);
                getInternData();
                break;
        }
         
    })
}

//prompting for engineer entries
function getEngineerData () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input engineer name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please input engineer employee ID',
            name: 'employeeId',
        },
        {
            type: 'input',
            message: 'Please input engineer email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please input engineer GitHub username',
            name: 'githubUsername',
        },
    ])
    .then(a => {
        //engineerCurrent.push(new Engineer(a.name, a.employeeId, a.email, a.githubUsername));
        //console.log(engineerCurrent);
        let data = [a.name, a.employeeId, a.email, a.githubUsername];
        let validity = true;
        data.forEach((entry) => entry === '' ? validity = false : null);
        if (validity === true) {
            engineerCurrent.push(new Engineer(...data));
            console.log(engineerCurrent);
            getRole();
        } else {
            console.error('incomplete entries');
            getEngineerData();
        }
            
    });
};

//prompting for intern entries
function getInternData () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input intern name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please input intern employee ID',
            name: 'employeeId',
        },
        {
            type: 'input',
            message: 'Please input intern email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please input intern school',
            name: 'school',
        },
    ])
    .then(a => {
        //internCurrent.push(new Intern(a.name, a.employeeId, a.email, a.school));
        //console.log(internCurrent);
        let data = [a.name, a.employeeId, a.email, a.school];
        let validity = true;
        data.forEach((entry) => entry === '' ? validity = false : null);
        if (validity === true) {
            internCurrent.push(new Intern(...data));
            console.log(internCurrent);
            getRole();
        } else {
            console.error('incomplete entries');
            getInternData();
        }
    });
};