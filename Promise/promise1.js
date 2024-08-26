const getData=()=>{
    return new Promise((resolve,reject)=>{
console.log('i am promise ')
     resolve('it is successful')
    // reject('some error has occured')
    })
}
let mypromise=getData()
.then((res)=>{
    console.log("promised fulfilled",res)
})
.catch((err)=>{
    console.log('promise rejected',err)

})