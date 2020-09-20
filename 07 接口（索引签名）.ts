interface Peo { 
    name: string,
    age: number,
    tall: string,
    [propName: string]: any     //可添加任意的属性名以及相应的属性值
}

let Person1: Peo = {
    name: 'haha',
    age: 33,
    tall: '160cm',
    marry: 'none',
    hobby: 'swiming',
    interest: 'tennis',
    getName(): void { 
        console.log(this.name + this.marry);
    },
    changeName(newName: string): void { 
        this.name = newName;
    }
}
console.log(Person1);

Person1.getName();

Person1.changeName('wahaha');

Person1.getName();

function printName(Per: { name: string, age: number }, extra: string): void { 
    console.log(`${Per.name}---------${Per.age}-----------${extra}`);
}

printName({ name: 'mimi', age: 33 }, 'ahah');