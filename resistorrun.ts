class Resistor {
    r: number = 0;
    m: number = 0
    constructor(r: number, m: number) {
        this.r = r;
        this.m = m;

    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number) {
        const p =  u * this.getCurrent(u);
        if (p <= this.m) {
            return p
        }
        else {
            console.log("-----------------")
        }
    }
}

let r1 = new Resistor(220, 100);
console.log(r1.getPower(5));