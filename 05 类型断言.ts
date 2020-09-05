//尖括号告知编译器确定的数据类型
let someValue: any = 'this maybe is a string';
let strLength = (<string>someValue).length;
console.log(strLength);

//as语法
let fla: boolean = false;
let someArr: any[] = [1231, '12132131', fla];
let arLen: number = (someArr[1] as string).length;
console.log(arLen);