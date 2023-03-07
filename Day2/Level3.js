let sentence = '\'Love is the best thing in this world. Some found their love and some are still looking for their love.\''
let sentence1 = /love/g
console.log(sentence.match(sentence1).length)
let sentence3='\'You cannot end a sentence with because because because is a conjunction\''

console.log(sentence3.match('because'))
let pattern = /because/g
console.log(sentence3.match(pattern).length)


let salary =5000* 12
let online_course = 15000 *12
let bonus = 10000
 let anual_income = salary + online_course +bonus
 console.log(anual_income)