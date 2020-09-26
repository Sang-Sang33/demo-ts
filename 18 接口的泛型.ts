interface SetData {
    <T>(val: T[]): T;
}

let summ: SetData = function <T>(val: T[]): T {
    let sm: any;
    typeof val[0] === 'number' ? sm = 0 : sm = '';
    val.forEach(
        (item: T): void => {
            sm += item;
        }
    );
    return sm;
}

console.log(summ<string>(['what', 'are', 'you', 'do']));
console.log(summ<number>([12, 1, 5, 6, 2, 5, 5, 6]));

interface GetData<T>{ 
    <T>(val: T[]): T;
}

function getData<T>(val: T[]): T { 
    let sm: any;
    typeof val[0] === 'number' ? sm = 0 : sm = '';
    val.forEach(
        (item: T): void => {
            sm += item;
        }
    );
    return sm; 
} 
var stringData: GetData<string> = getData;

console.log(stringData(['what', 'are', 'you', 'nong', 'sha', 'lie']));

let numberData: GetData<number> = getData;

console.log(numberData([12, 5, 12, 6, 123, 51, 132, 2]));