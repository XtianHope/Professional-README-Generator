// Variables and Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions Array
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:'
    }
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process:'
    }
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how your project is intended to be used:'
    }
    // Contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'Please name the contributors of this project:'
    }
    // Test Instructions
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the testing protocols/instructions:'
    }
    // License
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [
            'Apache 2.0',
            'GNU GPLv3',
            'GNU LGPLv3',
            'MIT',
            'Boost Software 1.0',
            'Mozilla',
            'ISC',
        ]
    }
    // GitHub
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }
    // Email Address
    {
        type: 'input',
        name: 'pemail',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
