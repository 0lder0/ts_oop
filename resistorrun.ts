class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.r;
    }
}

let resistors: Resistor[] = [];
let r1: Resistor = new Resistor(2);
console.log(r1.getPower(5));
console.log()
