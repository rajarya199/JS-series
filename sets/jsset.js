let data= new Set([2,5,3,2,7,5,1,1,1])
let arr=[2,5,3,2,7,5,1,1,1,1]
console.log(data)  //set-2,5,3,7,1  remove duplicate 

console.log(arr) // 2,5,3,2,7,5,1,1,1,1

data.add("earth") //Set(6) { 2, 5, 3, 7, 1, 'earth' }
console.log(data)

data.add({name:'hari'})
console.log(data) // Set(7) { 2, 5, 3, 7, 1, 'earth', { name: 'hari' } }

data.delete(7)
console.log(data)  

// data.clear()
// console.log(data)  //0->{}

for(x of data){
    console.log(x)
}


let item=new Set([2,5,6,"a","gh"])
console.log(data)


// convert set to arry--using spread  operator
let myarr=[...data]
console.log(myarr)