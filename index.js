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
    switch (answers.shape) {
        case 'Triangle':
            shape = new triangle();
            break;
        case 'Circle':
            shape = new circle();
            break;
        case 'Square':
            shape = new square();
            break;
        case 'Rectangle':
            shape = new rectangle();
            break;
        case 'Pentagon':
            shape = new pentagon();
            break;
        case 'Hexagon':
            shape = new hexagon();
            break;
        case 'Octagon':
            shape = new octagon();
            break;
    }
    shape.setColor(answers.color);
    fs.writeFileSync('output.svg', shape.render());
    console.log('output.svg has been created!');
}
);
