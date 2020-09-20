class Cat { 
    protected name: string;
    public food: string;
    public num: number;
    private write: string[];
    constructor(na: string, fd: string, n: number,w: string[]) { 
        this.name = na;
        this.food = fd;
        this.num = n;
        this.write = w;
    };
    getName(): string { 
        console.log('name',this.name);
        return this.name;
    }
    getWrite(): string[] { 
        console.log('write',this.write);
        return this.write;
    }
}
let mouse = new Cat(
    'mouse',
    'water',
    33,
    ['ahhah', 'what', 'protected----mouse', 'private-----']
);
console.log(mouse);

let hisName: string = mouse.getName();
let theWrite: string[] = mouse.getWrite();
// console.log(hisName);
// console.log(theWrite);
// console.log(mouse.name);

class Animal extends Cat { 
    constructor(na: string, fd: string, n: number,w: string[]) { 
        super(na,fd,n,w);
    };
    getAnimalName(): void { 
        console.log(this.name);
    }
    getAnimalWrite(): string[]{
        return this.getWrite();
        // console.log(this.write);
        //write私有属性，只能在Cat类中访问，不能单独在子类animal中访问
    }
}




let bull = new Animal('bull', 'grass', 23, ['subClass', 'private']);
console.log(bull);

let bullName: string = bull.getName();

let bullWrite: string[] = bull.getAnimalWrite();
console.log('bullWrite', bullWrite);
