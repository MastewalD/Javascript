let month = prompt("Enter a month:","")
let Month = month.toLowerCase()

switch(Month){
 case "january": 
 case "may": 
 case "march": 
 case "july": 
 case "october": 
 case "december": 
 case "august": 

 console.log(`${Month} has 31 days`)
break
case "february": 
console.log(`${Month} has 28 days`)
 break
case "april": 
case "september":
case "november": 
console.log(`${Month} has 30 days`)
  break
}