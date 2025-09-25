let obj ={
    name: 'Valeria',
    age: 17,
    sexuality: 'bi',
    fruits: ['mango', 'apple', 'cherry'],
    cat: {
        age: 9,
        name: 'Mursik',
        gaender: 'Female'
    },
    parentName: 'Julia',
    a2sd: 'asd',
    // parent-name: 'asd', Not allowed bcs - 
    //2asd: 'asd', Not allowed to start with number
    'parent-name': 'Name',
    '2asd': 'asd',
    'some thing': 'asd2',
};
 
console.log(obj);
console.log(obj.name);
console.log(obj.fruits[1]);
console.log(obj.cat.name);
console.log(obj['parent-name']);
console.log(Object.keys(obj));


 

