class Printer {
    name = "I am printer class"

    printName() {
        console.log('printName:', this.name);
    }

    printNameArrowFn = () => {
        console.log('printNameArrowFn:', this.name);
    }
}

const myPrinter = new Printer();
// myPrinter.printName();
// myPrinter.printNameArrowFn();

const customPrinter = {
    name: 'I am a Custom Printer',
    printName:  myPrinter.printName,
    printNameArrowFn: myPrinter.printNameArrowFn,
}

customPrinter.printName();
customPrinter.printNameArrowFn();