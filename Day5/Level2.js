let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.split(" "))
console.log(text.split(" ").length)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat' )
shoppingCart.push("Sugar ")
console.log(shoppingCart)

console.log(shoppingCart.splice(4,1))
console.log(shoppingCart)
console.log(shoppingCart.splice(3,1,"Green tea"))
console.log(shoppingCart)

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
let check =countries.toString().includes("Ethiopia")
if(check){
  console.log("ETHIOPIA")
}else{
  countries.push("Ethiopia")
}