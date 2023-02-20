const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a description of your project:',
    },
    {
      type: 'input',
      name: 'demo',
      message: 'Please enter the link you would like to use to preview this application:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions for your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide testing instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license will you be using for your project?',
      choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0', 'BSD'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub profile link?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];
  
  // function to write README file
  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('README.md file created successfully!')
    );
  }
  
  // function to initialize program
  function init() {
    inquirer.prompt(questions).then((responses) => {
      const markdown = generateMarkdown(responses);
      writeToFile('README.md', markdown);
    });
  }
  
  // function call to initialize program
  init();
