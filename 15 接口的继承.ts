interface work { 
    job(product: string[]): void;
    working(methods: string[]): void;
    name: string;
    age: number;
}

let code: work = {
    name: 'mei',
    age: 50,
    job(product: string[]): void { 
        console.table(product);
    },
    working(me: Array<string>): void { 
        let newArr: Array<any> = [this.name, this.age];
        console.table(me.concat(newArr));
    }
}

code.working(['9:30', '12:00']);

interface Her extends work { 
    hobby(hp: string): void;
    tall: string;
}

class May implements Her { 
    name: string;
    age: number;
    tall: string;
    constructor(n: string, a: number, t: string) { 
        this.name = n;
        this.age = a;
        this.tall = t;
    }
    init(pro: string[],day: string[],h: string): void { 
        this.job(pro);
        this.working(day);
        this.hobby(h);
    }
    job(pro: string[]) { 
        console.table(pro);
    }
    working(day: string[]) {
        console.table(day);
    }
    hobby(h: string): void { 
        console.log(h);
        console.table([this.name, this.age, this.tall]);
    }
}

let Mei = new May('Mei', 32, '185cm');

Mei.init(['code', 'git', 'vue'], ['8:30', "12:00", "1:45", "6:30"], 'how to fuck');