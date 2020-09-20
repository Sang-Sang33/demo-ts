class Father { 
    static family: string = 'what are you ';
    public name: string;
    protected age: number;
    constructor(n: string, a: number) { 
        this.name = n;
        this.age = a;
    };
    getProtected(): void { 
        console.log('age',this.age);
    };
    changeStatic(fa: string): void {
        Father.family = fa;
        console.log('static',Father.family);
    }
    static staticFunc(state: string): void { 
        console.log(`this is ${state} static function`);
    };
}

let mine = new Father('my', 33);
mine.changeStatic('ahhh');
console.log(Father.family);
Father.staticFunc('father');

class Son extends Father { 
    constructor(n: string, age: number) { 
        super(n, age);
    }
    getAge() { 
        console.log('protected', this.age);
    }
}

let my = new Son('whta', 33);


console.log(Son.family);

my.changeStatic('subClass change statci');
console.log(Son.family);
console.log(Father.family == Son.family);
Son.staticFunc('son');