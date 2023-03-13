const obj={}
console.log(obj)
obj.name="dog"
obj.legs=4
obj.color="black"
obj.age=2
obj.bark=function (){
  console.log("woof woof")
}
console.log(obj)
obj.breed="idontknow"
obj.getDogInfo=function(){
  console.log(obj)
}
obj.getDogInfo()