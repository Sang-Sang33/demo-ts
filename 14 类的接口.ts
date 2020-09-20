interface Food { 
    weight: string;
    power: string;
}

interface Anim { 
    name: string;
    age: number;
    hobby: string;
    fd: Food;
    eat(str: string): void;
}

class Yack implements Anim { 
    name: string;
    age: number;
    hobby: string;
    fd: Food;
    constructor(n: string, a: number, h: string, f: Food) { 
        this.name = n;
        this.age = a;
        this.hobby = h;
        this.fd = f;
    }
    eat(str: string): void { 
        console.log(`${str}----${this.name}----${this.fd.weight}`);
    };
}

let ya = new Yack('yack', 32, 'water', { weight: '100kg', power: '200kj' })

console.log(ya);
ya.eat('eat方法');