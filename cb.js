const mydispalay=(myvalue)=>{
    console.log('result is ' + myvalue )
}

const  mycalc=(n1,n2,mycb)=>{
    let sum=n1+n2;
    console.log('addition has completed ');
    mycb(sum)
}

mycalc(5,6,mydispalay)