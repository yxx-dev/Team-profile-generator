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

//getManagerData();
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
        managerCurrent.push(new Manager(a.name, a.employeeId, a.email, a.officeNumber));
        console.log(managerCurrent);
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
        engineerCurrent.push(new Engineer(a.name, a.employeeId, a.email, a.githubUsername));
        console.log(engineerCurrent);
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
        internCurrent.push(new Intern(a.name, a.employeeId, a.email, a.school));
        console.log(internCurrent);
    });
};