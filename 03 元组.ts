let x: [boolean, number, string] = [false, 5131, 'fsafsa'];

//元组中嵌套数组
let X: [Array<number>, string[], Array<boolean>];
X = [[1111, 222, 333], ['asfs', 'saf', 'gag'], [false, true]];
console.log(X[2][1]);

//元组中嵌套元组与数组
let Xin: [[boolean, string, number], number[], boolean];
Xin = [[false, 'asf', 544], [111, 22, 5, 5], false];