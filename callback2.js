const getData=(dataId,getNextData)=>{
//setTimeout( cb fn,time in ms)
    setTimeout(()=>{
        console.log("data",dataId)
        if(getNextData){
            getNextData() 
        }

    },2000)
}
// getData(4, ()=>{
//     getData(6)
// })
// output 
//       {wait 2s}  data 4  ( wait2s)  data 6

getData(4, ()=>{
    getData(6,()=>{
        getData(7,()=>{
            getData(9)
        })
    })
})
