// function fun1(){
//     const myName='bng';
//     function fun2(){
//         return myName+' '+'Nag';
//     }
//     return fun2();
// }
// console.log(fun1())

let count=0;
function counter(){
    count += 1;
}

for (let i=0; i<10;i++){
    counter();
}

console.log(count);