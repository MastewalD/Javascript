const arry=[]
const array= Array()
console.log(arry)
console.log(array)


const array = Array(6)
console.log(array)

const arry1= Array(9)
console.log(arry1.length)

const array1 =[1,2,3,4,5,6,7,8]
const firstItem = array1[0]
const middleItem =array1[4]
const lastItem =array1[7]
console.log(firstItem,middleItem,lastItem)


const mixedDataTypes =[1,2,3,"maste",null,true]
console.log(mixedDataTypes.length)
const itCompanies=["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle",  "Amazon" ]
console.log(itCompanies)
console.log(itCompanies.length)
const firstItem = itCompanies[0]
const middleItem =itCompanies[4]
const lastItem =itCompanies[6]
console.log(firstItem,middleItem,lastItem)


const Uppercase=String(itCompanies).toUpperCase().split(" ")
console.log(Uppercase)
console.log(String(itCompanies))
console.log(itCompanies.toString())
console.log(itCompanies.join(" "))
console.log(itCompanies[2])
console.log(itCompanies[8])

itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)
console.log(itCompanies.slice(0,3))
let lastIndex = itCompanies.length 
console.log(itCompanies.slice(4,lastIndex))
console.log(itCompanies[3])
itCompanies.shift()
console.log(itCompanies)
itCompanies.shift("")
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
console.log(itCompanies.splice())