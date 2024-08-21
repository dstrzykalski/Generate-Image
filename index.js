const inquirer = require('inquirer');
const fs = require('fs');
const triangle = require('./lib/shapes').Triangle;
const circle = require('./lib/shapes').Circle;
const square = require('./lib/shapes').Square;
const rectangle = require('./lib/shapes').Rectangle;
const pentagon = require('./lib/shapes').Pentagon;
const hexagon = require('./lib/shapes').Hexagon;
const octagon = require('./lib/shapes').Octagon;

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'enter up to 3 characters'
    },
    {
        type: 'input',
        name: 'nameColor',
        message: 'What color would you like the text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like to render?',
        choices: ['Triangle', 'Circle', 'Square', 'Rectangle', 'Pentagon', 'Hexagon', 'Octagon']
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like the shape to be?'
    }
];

inquirer.prompt(questions).then(answers => {
    let shape;
    let text

    if (answers.shape === 'Triangle') {
        shape = new triangle();
    } else if (answers.shape === 'Circle') {
        shape = new circle();
    } else if (answers.shape === 'Square') {
        shape = new square();
    } else if (answers.shape === 'Rectangle') {
        shape = new rectangle();
    } else if (answers.shape === 'Pentagon') {
        shape = new pentagon();
    } else if (answers.shape === 'Hexagon') {
        shape = new hexagon();
    } else if (answers.shape === 'Octagon') {
        shape = new octagon();
    }

    shape.setColor(answers.color);
    text = answers.name;
    textColor = answers.nameColor;

    const svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${text}">${textColor}</text>
</svg>`

    fs.writeFile('image.svg', svgFile, (err) => {
        if (err) throw err;
        console.log('Text Test!');
    });
}
);

