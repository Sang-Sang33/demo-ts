class duplicateRemova<T> {
    newArr: T[] = [];
    arr: T[];
    constructor(ar: T[]) {
        this.arr = ar;
    };
    pushMethods(): T[] {
        this.arr.forEach(
            (item: T): void => {
                if (this.newArr.indexOf(item) === -1) {
                    this.newArr.push(item)
                }
            }
        )
        return this.newArr;
    };
    filterMethods(): T[] {
        return this.arr.filter(
            (item: T, index: number, ar: T[]): boolean => ar.indexOf(item) === index
        )
    };
    filter(): T[] {
        this.arr.forEach(
            (item: T, index: number, ar: T[]): void => {
                if (ar.indexOf(item) === index) {
                    this.newArr.push(item);
                }
            }
        )
        return this.newArr;
    }
}

let methodsOne = new duplicateRemova<number>([2, 3, 6, 8, 7, 6, 5, 6, 5, 4, 7, 8, 9])

console.table(methodsOne.pushMethods());

console.table(methodsOne.filterMethods());


let strOne = new duplicateRemova<string>(['wag', 'wag', 'zhu', 'zh', 'zhu', 'en', 'en']);
console.log(strOne.filter());