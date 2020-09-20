interface obj {
    name: string,
    age: number,
    sex?: string, //可选属性
    readonly hobby: string //只读属性
}

// let ar: readonly number[] = [1, 2, 3, 6, 5, 55];
let ar1: ReadonlyArray<number> = [1, 2, 3, 6, 5, 8];
const arr1: number[] = [1, 2, 3, 5, 5, 9];
//属性用readonly   变量使用const

let oYmm: obj = {
    name: 'mimi',
    age: 22,
    hobby: 'cat'
};
oYmm.sex = '女';

let oCyu: obj = {
    name: 'chaoyue',
    age: 33, sex: '女',
    hobby: 'dog'
};
console.log(oYmm);

interface Perso {
    name: string,
    readonly age: number,
    tall: string,
    hobby: string,
    profession?: string
}

let Tomm: Perso = {
    name: 'Tom',
    age: 33,
    tall: '175cm',
    hobby: 'computer',
    profession: 'watcher'
}
Tomm.tall = '170cm';
delete Tomm.profession;
console.log(Tomm);
