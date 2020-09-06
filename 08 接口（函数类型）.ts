interface searchFunc { 
    (source: string, subString: string): boolean;
}
let mySearch: searchFunc = function (source: string, subString: string) { 
    let result = source.search(subString);
    return result > -1;
}
let fla: boolean = mySearch('source', 's');

console.log(fla);