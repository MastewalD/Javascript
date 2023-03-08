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