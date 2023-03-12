// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>one</h1>`;
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach(num=>console.log(num.toUpperCase()))
const number=names.map(n=>n.toUpperCase())
console.log(number)