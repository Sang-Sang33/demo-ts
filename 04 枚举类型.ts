//默认从0开始为元素编号，red=0，green=1，yellow=2
enum Color { red, green, yellow };
let c: Color = Color.red; //0
console.log(c);

//定义结果
enum Result { success = 1, error = -1 };
let res: Result = Result.error;
let resName: string = Result[1]; //通过枚举的值映射Result的名字key值
console.log(res);
console.log(resName);

//red = 0; green = 3; yellow = 4;
enum CC { red, green = 3, yellow };
let color: CC = CC.yellow; //4
console.log(color);