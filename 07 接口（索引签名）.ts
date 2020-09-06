interface People { 
    name: string,
    age: number,
    tall: string,
    [propName: string]: any     //可添加任意的属性名以及相应的属性值
}

let Person1: People = {
    name: 'haha',
    age: 33,
    tall: '160cm',
    marry: 'none',
    hobby: 'swiming',
    interest: 'tennis'
}