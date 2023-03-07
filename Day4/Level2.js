let score = prompt('Enter the score',)
if( score >= 80)
{
  console.log('A')
} else if(  score >=70)
{
  console.log('B')
} else if( score >= 60)
{
  console.log('C')
} else if( score >= 50)
{
  console.log('D')
} else if( score < 50)
{
  console.log('F')
}



let month = prompt('Enter the month','')
console.log(month)
switch(month)
{
  
  case 'September':
  
  case 'October':
  
  case 'November':
  console.log('Autumn')
break
case 'December':
  
  case 'January':
  
  case 'February':
  console.log('Winter')
break 
case 'March':
  
  case 'April':
  
  case 'May':
  console.log('Spring')
break 
case 'June':
  
  case 'July':
  
  case 'August':
  console.log('Summer')
break

}
let day = prompt('What is the day  today?','')
switch(day)
{
  
  case 'Saturday':
  
  case 'Sunday':
  
  
  console.log(`${day} is a weekend`)
break
case 'Monday':
case 'Friday':
  case 'Thusday':
  case 'Thersday':
  case 'Wendsday':
  console.log(`${day} is a working day`)
break 


}