const array=[]
const array1=Array()
console.log(array)
console.log(array1)


const array2 =Array(6)
console.log(array2.length)

const array3=[1,2,3,4,5]
console.log(array3[0])
console.log(array3[parseInt(array3.length/2)])
let lastIndex=array3.length - 1
console.log(array3[lastIndex])

const array4 =[1,2,3,"maste",true,null]
console.log(array4.length)

const array5=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(array5)
console.log(array5.length)
console.log(array5[0])
console.log(array5[parseInt(array5.length/2)])
let lastIndex1=array5.length -1
console.log(array5[lastIndex1])

let upperCase=array5.toString().toUpperCase()
console.log(upperCase.split(","))

console.log(array5.toString())


if(array5.includes("Google")){
    console.log("Google")
}else{
    console.log("Google is not found")
   
}
let array6=[]
for(let i =0;i<array5.length;i++){
    if(array5[i].includes("oo")){
        array6.push(array5[i])
       
    }
    
} console.log(array6)

console.log(array5.sort())
console.log(array5.reverse())
console.log(array5.slice(0,3))
let last3start=array5.length-3
console.log(array5.slice(last3start,(array5.length)))
console.log(array5[parseInt(array5.length/2)])
array5.shift()
console.log(array5)
console.log(array5.splice(2,2))
console.log(array5.pop())
console.log(array5.splice(0,array5.length))
console.log(array5)

