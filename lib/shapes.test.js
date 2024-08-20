const Triangle = require('../lib/shapes').Triangle;
const Circle = require('../lib/shapes').Circle;
const Square = require('../lib/shapes').Square;
const Rectangle = require('../lib/shapes').Rectangle;
const Pentagon = require('../lib/shapes').Pentagon;
const Hexagon = require('../lib/shapes').Hexagon;
const Octagon = require('../lib/shapes').Octagon;

describe('Triangle', () => {
    describe('render', () => {
        it('should render a triangle SVG with the given shape color', () => {
            const triangle = new Triangle();
            triangle.setColor('blue');
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should render a circle SVG with the given shape color', () => {
            const circle = new Circle();
            circle.setColor('red');
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should render a square SVG with the given shape color', () => {
            const square = new Square();
            square.setColor('green');
            expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
        });
    });
});

describe('Rectangle', () => {
    describe('render', () => {
        it('should render a rectangle SVG with the given shape color', () => {
            const rectangle = new Rectangle();
            rectangle.setColor('yellow');
            expect(rectangle.render()).toEqual('<rect x="50" y="50" width="200" height="100" fill="yellow" />');
        });
    });
}
);

describe('Pentagon', () => {
    describe('render', () => {
        it('should render a pentagon SVG with the given shape color', () => {
            const pentagon = new Pentagon();
            pentagon.setColor('purple');
            expect(pentagon.render()).toEqual('<polygon points="150, 18 244, 70 206, 182 94, 182 56, 70" fill="purple" />');
        });
    });
}
);

describe('Hexagon', () => {
    describe('render', () => {
        it('should render a hexagon SVG with the given shape color', () => {
            const hexagon = new Hexagon();
            hexagon.setColor('orange');
            expect(hexagon.render()).toEqual('<polygon points="150, 18 244, 64 244, 136 150, 182 56, 136 56, 64" fill="orange" />');
        });
    });
}
);

describe('Octagon', () => {
    describe('render', () => {
        it('should render a octagon SVG with the given shape color', () => {
            const octagon = new Octagon();
            octagon.setColor('pink');
            expect(octagon.render()).toEqual('<polygon points="150, 50 200, 18 250, 50 250, 150 200, 182 150, 150 100, 182 50, 150 50, 50" fill="pink" />');
        });
    });
}
);

