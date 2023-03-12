function printArray(array) {
  return array;
}
console.log(printArray([1, 2, 3, 4, 5]));

function showDateTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  return `${day}/${month}/${year} ${hour}:${minute}`;
}
console.log(showDateTime());

function swapValue(a, b) {
  return `${b} ${a}`;
}
console.log(swapValue(5, 3));

const arr = [];
function reversArray(array) {
  for (let i = array.length; i > 0; i--) {
    arr.push(i);
  }
  console.log(arr);
}
console.log(reversArray([1, 2, 3, 4, 9]));


function capitalizeArray(array) {
  let cap = array.toString().toUpperCase();
  return cap;
}
console.log(capitalizeArray(['maste', 'kid']));
let sum = 0;
function additem(num1, num2) {
  sum = num1 + num2;

  let array = [];
  array.push(sum);
  return array;
}
console.log(additem(2, 3));
const array1 = [1, 2, 3, 4, 5];
function removeitem(index) {
  array1.splice(index, 1);
  return array1;
}
console.log(removeitem(3));

function sumOfNumbers(numStart, numEnd) {
  let sum = 0;

  for (let i = numStart; i <= numEnd; i++) {
    sum += i;
    console.log(sum);
  }
}
sumOfNumbers(1, 4);
let sum =0
function sumOfOdds (numStart,numEnd){
for(let i =numStart;i<=numEnd;i++){
  if(i%2 !==0){
    sum +=i
  
  }
}  console.log(sum)
}
sumOfOdds(1,5)
let sum =0
function sumOfOdds (numStart,numEnd){
for(let i =numStart;i<=numEnd;i++){
  if(i%2 ==0){
    sum +=i
  
  }
}  console.log(sum)
}
sumOfOdds(1,5)


const even = [];
const odd = [];
function evensAndOdds(num) {
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  console.log(`The number of even are ${even.length} \n
  The number of odds are ${odd.length}`);
}
evensAndOdds();
