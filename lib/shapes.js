class Triangle {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

class Rectangle {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
}

class Pentagon {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150, 18 244, 70 206, 182 94, 182 56, 70" fill="${this.color}" />`;
    }
}

class Hexagon {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150, 18 244, 64 244, 136 150, 182 56, 136 56, 64" fill="${this.color}" />`;
    }
}

class Octagon {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150, 50 200, 18 250, 50 250, 150 200, 182 150, 150 100, 182 50, 150 50, 50" fill="${this.color}" />`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
    Rectangle,
    Pentagon,
    Hexagon,
    Octagon
};