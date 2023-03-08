const array = Array()
const array1 = []
console.log(array)
console.log(array1)
const array2 = [1,2,3,4,5,6]
console.log(array2)
console.log(array2.length)
console.log(array2[0])
const mixedDataTypes =[1,2,3,true,"yaa",null]
console.log(mixedDataTypes.length)
const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)
let lastIndex=itCompanies.length -1 
console.log(itCompanies.length)
let first =itCompanies[0]
let middle=itCompanies.slice(1,lastIndex)
let last=itCompanies[lastIndex]
console.log(first)
console.log(middle)
console.log(last)

console.log(itCompanies)
let Upercase =itCompanies.toString().toUpperCase()
console.log(Upercase.split(","))
console.log(itCompanies.toString())

let companyName=prompt("Enter the company name","")
let chack =itCompanies.toString().includes(companyName)
if(chack){
  console.log(companyName)
}else{
  console.log("company is not found")
}
const array=[1,3,5,7,9,8,6]
array.sort()
console.log(array)

array.reverse()
console.log(array)
const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
let lastIndex=itCompanies.length -1 
console.log(itCompanies.length)
let first =itCompanies[0]
let middle=itCompanies.slice(1,lastIndex)
let last=itCompanies[lastIndex]
console.log(itCompanies.slice(0-3 ))


console.log(itCompanies.slice(3-7))
console.log(itCompanies.slice(1-6))
itCompanies.shift()
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
console.log(itCompanies.splice(" "))