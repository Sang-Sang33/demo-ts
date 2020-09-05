interface obj {
    name: string,
    age: number,
    sex?: string, //可选属性
    readonly hobby: string //只读属性
}

// let ar: readonly number[] = [1, 2, 3, 6, 5, 55];
let ar: ReadonlyArray<number> = [1, 2, 3, 6, 5, 8];
const arr: number[] = [1, 2, 3, 5, 5, 9];
//属性用readonly   变量使用const

let oYm: obj = { name: 'mimi', age: 22, hobby: 'cat' };
oYm.sex = '女';

let oCy: obj = { name: 'chaoyue', age: 33, sex: '女', hobby: 'dog' };
console.log(oYm);