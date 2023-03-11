console.log(countries)
console.log(webTechs)
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let array=text.split(" ")
console.log(array.length)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")

shoppingCart.splice(4,1)

shoppingCart.splice(3,1,"Geen Tea")
console.log(shoppingCart)

if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
}else{
    console.log(
        countries.push("Ethiopia")
    )
}

if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprocess")
}else{
    webTechs.push("Sass")
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

































