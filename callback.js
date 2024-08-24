function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b
}


function calc(x,y,operation){
    return operation(x,y);
}

console.log(calc(3,4,add));
console.log(calc(3,5,multiply))