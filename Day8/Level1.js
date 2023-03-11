// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>one</h1>`;
const Dog={}
console.log(Dog)

Dog.name="BOB"
Dog.legs=4
Dog.color="black"
Dog.age=2
Dog.bark=function(){
  console.log("woof woof")
}
console.log(Object.values(Dog))
Dog.breed="german shepherd"
Dog.getDogInfo=function(){
  console.log(Object.values(this))
}
console.log(Dog.getDogInfo)
