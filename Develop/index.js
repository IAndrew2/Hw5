// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Project Title',
        message: 'What is your Project Title?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'What Is Your Project Description',
      },
      {
        type: 'input',
        name: 'Table Of Contents',
        message: 'What is your table of contents?',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions & examples for use',
      },
      {
        type: 'input',
        name: 'Credits',
        message: 'List all collaborators',
      },
      {
        type: 'input',
        name: 'License',
        message: 'What type of license was used?',
      },
      {
        type: 'input',
        name: 'Features',
        message: 'List all features used',
      },
      {
        type: 'input',
        name: 'How To Contribute',
        message: 'How are other developers able to contribute?',
      },
    ]);
  };
  
  const generateHTML = (answers) =>

// TODO: Create a function to write README file
function generateMarkdown(response) {
    return `
  
  # ${response.title}
  
  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  -[profile](#profile)
  
      ${response.description}
  ##description:
  
      ${response.installation}
  ##installation:
  
      ${response.usage}
  ##usage:
  
      ${response.licenses}
  ##licenses:
  
      ${response.contribution}
  ##contribution:
  
      ${response.test}
  ##test:
  
      ${response.features}
  ##email:
  `;
  }
  
  module.exports = generateMarkdown;

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
