class Ani { 
    name: string;
    constructor(n: string) { 
        this.name = n;
    }
    eat(food: string): void { 
        console.log('eat的方法')
    }
}

class Fish extends Ani { 
    constructor(n: string) { 
        super(n);
    }
    eat(food: string): void { 
        console.log(`${this.name}--------${food}`);
    }
}

let Fi = new Fish('fish');
Fi.eat('water');

class Dog extends Ani { 
    constructor(n: string) { 
        super(n);
    }
    eat(f: string): void { 
        console.log(`${this.name}++++++++++++++${f}`);
    }
}

new Dog('dog').eat('wangwangwang');