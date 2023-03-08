const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
let lastIndex=ages.length - 1
let minAge =ages[0]
let maxAge =ages[lastIndex]
let median =ages[Math.floor(ages.length/2)]
 
console.log(minAge)
console.log(maxAge)

console.log(median)
let range=ages[lastIndex] -ages[0]
console.log(range)
if( i=0,i <= ages.length,i++){
let sum=0
sum+= ages[i]
console.log(sum)
}