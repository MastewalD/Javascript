let base =prompt('Enter base:' ,20)
let height =prompt('Enter height:',10)

alert(`The area of the triangle is ${base*height*0.5 } `)

let a = prompt('Enter side a:',5)
let b = prompt('Enter side b:',4)
let c =prompt('Enter side c:', 3)
let perimeter = +a + +b + +c
console.log(perimeter)
alert(`The perimeter of the triangle is ${perimeter}`)


let length = prompt('Enter the length',0)
let height = prompt('Enter the height',0)
let area = +length * +height
let perimeter = 2*(+length + +height)
alert(`The area of reactangle is ${area} and the perimeter is ${perimeter}`)

let radius = prompt('Enter the radius ',0)
let PI =Math.PI
let area = +PI * +radius * +radius
let circumference = 2* +radius* +PI

alert(`The area of the circle is ${area} and the circumference is ${circumference}`)
