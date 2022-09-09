//import inquirer and fs libraries
const inquirer = require('inquirer');
const fs = require('fs');
//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let managerCurrent =[];
let engineerCurrent =[];
let internCurrent =[];

getManagerData();
//getEngineerData();
//getInternData();

//prompting for manager entries
function getManagerData () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input team manager’s name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please input team manager’s employee ID',
            name: 'employeeId',
        },
        {
            type: 'input',
            message: 'Please input team manager’s email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please input team manager’s office number',
            name: 'officeNumber',
        },
    ])
    .then(a => {
        let data = [a.name, a.employeeId, a.email, a.officeNumber];
        let validity = true;
        data.forEach((entry) => entry === '' ? validity = false : null);
        if (validity === true) {
            managerCurrent.push(new Manager(...data));
            console.log(managerCurrent);
        } else console.error('incomplete entries');
    });
};


//prompting for engineer entries
function getEngineerData () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please input employee ID',
            name: 'employeeId',
        },
        {
            type: 'input',
            message: 'Please input email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please input GitHub username',
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
        } else console.error('incomplete entries');
    });
};

//prompting for intern entries
function getInternData () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please input name',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please input employee ID',
            name: 'employeeId',
        },
        {
            type: 'input',
            message: 'Please input email address',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please input school',
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
        } else console.error('incomplete entries');
    });
};