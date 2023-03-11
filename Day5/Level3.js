const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log(ages)
console.log(ages[0])
console.log(ages[ages.length -1])
for(let i=0; i<ages.length;i++){

    if(ages.length%2 == 0)
    {
        console.log((ages[ages.length/2] + ages[ages.length/2 -1]) /2)
    }else{
        console.log((ages[Math.floor(ages.length/2)]))
    }
}

let sum =0
for(let i =0 ;i< ages.length;i++)
{
   sum += ages[i] 
   avarage=sum/ages.length
   
}console.log(avarage)

let range=ages[ages.length-1] -ages[0]
console.log(range)
 console.log((ages[0]-avarage))
 console.log(ages[ages.length-1] - avarage)

 console.log(countries.slice(0,10))


 let array1=[]
 let array2=[]

if(countries.length%2 == 0){
array1.push(countries.slice(0,countries.length/2))
array2.push(countries.slice((countries.length/2),countries.length))
console.log(array1)
console.log(array2)
}else{
    array1.push(countries.slice(0,countries.length/2+1))
array2.push(countries.slice(countries.length/2+1,countries.length))
console.log(array1)
console.log(array2)
}