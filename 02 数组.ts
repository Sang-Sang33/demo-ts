//数字的数组
let ar: number[] = [1, 2, 3, 5, 6, 6, 4, 4];
let arr: Array<number> = [1, 2, 3, 5, 6, 6, 4, 4];

//字符串的数组
let strArr: string[] = ['sf', 'sa', 'sgs', 'agg'];
let stArr: Array<string> = ['sf', 'fsfsf', 'gggg', 'fsfs'];

//布尔的数组
let flagAr: boolean[] = [true, false];

//不确定类型的数组
let notSureArr: any[] = [12313, 'sfa', false];
let notArr: Array<any> = [false, 'fsfs', 123132];

let catArr: number[] = ar.concat(arr);
console.log(catArr);

let index: number = catArr.indexOf(4);
console.log(index);