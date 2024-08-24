const getData=(dataId,getNextData)=>{
//setTimeout( cb fn,time in ms)
    setTimeout(()=>{
        console.log("data",dataId)
        if(getNextData){
            getNextData() 
        }

    },2000)
}
getData(4, ()=>{
    getData(6)
})