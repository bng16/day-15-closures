function fun1(){
    const myName='bng';
    function fun2(){
        return myName+' '+'Nag';
    }
    return fun2();
}
console.log(fun1())