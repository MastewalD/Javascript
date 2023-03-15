const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let max=0
let name
for(const user of Object.keys(users)){
  if(users[user].skills.length > max)
{
  max=users[user].skills.length
  name=user
}}
console.log(`${name} ${max}`)


let count =0
for(const user of Object.keys(users)){
  if(users[user].isLoggedIn == true){
    count++
  }
}
console.log(count)

let count =0
for(const user of Object.keys(users)){
  if(users[user].points > 50){
    count++
  }
}
console.log(count)


let array=[]
for(const user of Object.keys(users)){

  if(users[user].skills.toString().includes("MongoDB")){
    if(users[user].skills.toString().includes("Express")){
      if(users[user].skills.toString().includes("React")){
        if(users[user].skills.toString().includes("Node")){
             array.push(user)
        }
      }
    }
  }
}
console.log(array)
let copy=Object.assign({},users)
copy["maste"]={
  
}
console.log(Object.keys(users))
console.log(Object.values(users))