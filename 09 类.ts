class Person { 
    name: string;
    age?: number;
    readonly hobby: string;
    constructor(name: string,hobby:string,age?: number) { 
        this.name = name;
        this.hobby = hobby;
        this.age = age;
    }
    personInfo():void { 
        console.log(`${this.name}----------${this.hobby}---------${this.age}`);
    }
    changeInfo(name: string,age: number): void { 
        this.name = name;
        this.age = age;
    }
}

let oYm = new Person('明明', 'cat', 33);
oYm.personInfo();
// oYm.age = 22;
// oYm.personInfo();
// oYm.hobby = 'fsaf';
oYm.changeInfo('mimi', 22);
oYm.personInfo();