const cacheData={}   //object

function calc(a,b){
    let result=(a+b)*(a+a)*(b*b)
console.log("function called",result)
    return result
}

function memory(a,b){
    const key=a+":"+b;
    if(!cacheData[key]){
        const result=calc(a,b)
        cacheData[key]=result
        return result
    }else{
        console.log("result from cache",cacheData[key])
        return cacheData[key]  // already in memeory cache directly use it
    }

}