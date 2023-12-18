// Variables and Dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('README.md was successfully generated!');
    });
}

// Function to get License Badge URL
function getLicense(license) {

}

// Function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.licenseBadge = getLicense(data.license);
        writeToFile("./example/readme.md", data);
    });
}

// Function call to initialize app
init();
