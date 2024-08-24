const myfn=()=>{
    console.log('hello ')
}
setTimeout(myfn,1000)

function calc(a,b,sumcb){
    sumcb(a,b)
}

calc(4,5,(a,b)=>{
    console.log(a+b)
})