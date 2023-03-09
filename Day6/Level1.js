let n=4
for(let i=0; i<=n; i++){
    console.log(i)
}
let symbol=""
for(let i=0; i<=6;i++){
    symbol=symbol+"#"
    console.log(symbol)
}
let sqr=0
for(let i=0; i<=10;i++){
    sqr=i*i
    console.log(`${i} x ${i} = ${sqr}`)
}
let num=0
let sqr=0
let cub=0
for(let i=0;i<=10;i++){
    num=i
    sqr=i*i
    cub=i*i*i
    console.log(`${num}  ${sqr}  ${cub}`)
}

for(let i=0; i<=100;i++){
    if(i%2 == 0){
        console.log(i)
    }
}
for(let i=0; i<=100;i++){
    if(i%2 !== 0){
        console.log(i)
    }
}
let sum=0
for(let i=0;i<=100;i++){
 sum +=i
 
 console.log(`The sum of all numbers from 0 to 100 is ${sum}`) 
}
let sum=0
let even=0
let odd=0
for(let i=0;i<=100;i++){
if(i%2 ==0)
{
    even=even+i
}else{
    odd=odd+i
}
 
 console.log(`The sum of all evens for o to 100 is${even}. And the sum of all odds from o to 100 is ${odd}.`) 
}