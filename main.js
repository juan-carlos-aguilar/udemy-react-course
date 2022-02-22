class Shape {
    #privateVariable = 'privateVariable'
    publicVariable = 'publicVariable'
    static staticVariable = 'staticVariable'

    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getArea() {
        return 'not implemented';
    }

    getPrivateData() {
        return this.#privateVariable;
    }
}

class Square extends Shape {
    getArea() {
        return this.height * this.width;
    }

    getParentClassArea() {
        return super.getArea();
    }
}

//const myShape = new Shape(5, 10);
//console.log(Shape.staticVariable);

const mySquare = new Square(5, 10);
console.log(mySquare.getPrivateData());