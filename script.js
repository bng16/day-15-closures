// function fun1(){
//     const myName='bng';
//     function fun2(){
//         return myName+' '+'Nag';
//     }
//     return fun2();
// }
// console.log(fun1())

// let count=0;
// function counter(){
//     count += 1;
// }

// for (let i=0; i<10;i++){
//     counter();
// }

// console.log(count);


let lastUniqueId=546546515854;

let generateId=()=>{
    return ++lastUniqueId;
}
console.log(`your id is ${generateId()}`);
console.log(lastUniqueId);

for (let i=0; i<5;i++){
    console.log(`your id is ${generateId()}`);
}

console.log(lastUniqueId);
