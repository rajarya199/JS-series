
// let error= true;
let error=false;

const promiseExample= new Promise((resolve,reject)=>{
    //perfome serveral work task
    if(error){
        reject('error aayo hai')

    }
    else{
        resolve("data aayo hai")
    }
})
//then --resove data
//catch--reject -eror data
//finally- in every situation either true ya false

promiseExample.then((abc)=>{
    console.log({promisedata:abc})

})
.catch((err)=>{
    console.log({myerror:err})
})
.finally(()=>{
    console.log('kaam vayo hai')
})