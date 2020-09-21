interface searchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: searchFunc = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
let fl: boolean = mySearch('source', 's');

console.log(fl);

function sum(x: number, y: number): number[] {
    return [x, y];
}
let arr3: number[] = sum(3, 4);
console.log(arr3);

//可选参数  可选参数要放到参数的末尾

function people(name: string, age?: number): string {
    if (age) {
        return `${name}---------${age}`;
    }
    else {
        return `${name}--------年龄保密`;
    }
}

let oYm2: string = people('明明', 33);
console.log(oYm2);

let oCy2: string = people('超越');
console.log(oCy2);

//形参默认值

function person(name: string, age: number = 22): string { 
    return `${name}--------------${age}`;
} 

let oCC = person('cc');
console.log(oCC);

//剩余参数

function add2(a: number, b: number, ...res: number[]): number { 
    let sum: number = a + b;
    for (let i: number = 0; i < res.length; i++) { 
        sum += res[i];
    }
    return sum
}

let biNumber: number = add2(3, 5, 6, 3, 5, 5, 8, 2, 2, 2, 3);

console.log(biNumber);

let acNumber: number = add2(2, 5, 6, 55, 6, 6, 5);

interface Pel { 
    (food: string[]): void;
}

let him: Pel = function eat (food: string[]) { 
    console.table(food);
};

him(['fsafas','--b--','--c--','--d--']);
