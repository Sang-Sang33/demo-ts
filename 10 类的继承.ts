class Person { 
    name: string;
    age: number;
    hobby: string;
    constructor(name: string,age: number,hobby: string) { 
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    };
    init(): void { 
        this.showName();
        this.showAge();
        this.showHobby();
    }
    showName(): void { 
        console.log(this.name);
    };
    showAge(): void { 
        console.log(this.age);
    };
    showHobby(): void { 
        console.log(this.hobby);
    };
}

let oYm = new Person('mimi', 22, 'cat');

oYm.init();

//People类继承Person类
class People extends Person { 
    extra: string;
    constructor(name: string, age: number, hobby: string,extra: string) { 
        super(name, age, hobby);
        this.extra = extra;
    }
    showExtra(): void { 
        console.log(this.extra);
    };
    showAll(): void { 
        this.init();
        this.showExtra();
    }
}

let oCy = new People('chaoyue', 33, 'dog','hahahha');
// oCy.init();
oCy.showAll();