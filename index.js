const fs = require("fs");
const axios = require('axios');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
    },
    {
        type: "list",
        name: "color",
        message: "What is your favorite color?",
        choices: ['green', 'blue', 'pink', 'red'],
    }

];

function writeToFile(fileName, data) {

}

function init() {
    inquirer
        .prompt(questions)
        .then(function ({ github, color })){
        const queryUrl = `https://api.github.com/users/${username}`;

        axios
        .get(queryUrl)
        .then((response)) => {
            console.log(response.data)
        }
    } }
    init();
