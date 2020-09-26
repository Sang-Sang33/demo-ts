
function duplicateRemoval<T>(arr: Array<T>): T[] {
    // return arr.filter(
    //     (item: T, index: number, ar: T[]): boolean => ar.indexOf(item) === index
    // );
    return Array.from(new Set(arr));
}

let newArr: Array<any> = duplicateRemoval([1, 1, 2, 6, 8, 9, 3, 5, 6, 8, 9]);
console.table(newArr);

let str1Arr: Array<any> = duplicateRemoval(['my', 'his', 'what', 'find', 'my', 'his']);

console.table(str1Arr);


