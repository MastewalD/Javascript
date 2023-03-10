function fullName (){
  console.log('mastewal degu')
}
fullName()

function fullName (firstName,lastName){
  let  Name =firstName + lastName
    return Name
 }
 console.log(fullName('Mastewal','Degu'))
 function add(num1,num2){
  let sum = num1 + num2
  return sum
}
console.log(add(2,5))

function area(length,width){
  let rectangleArea= length*width
  return rectangleArea
}
console.log(area(4,3))


function perimeter(length,width){
  let P=2*length*width
  return P
  }console.log(perimeter(3,5))



  function volume (length,width,height){
      let volume = length*width*height
      return volume 
      }
      console.log(volume(1,2,3))


      function circleArea(radius){
          let area= Math.PI *radius*radius
          return area
       }
       console.log(circleArea(2))

       function circumfrance(radius){
          let circumfranceOfCircle=2*Math.PI*radius
          return circumfranceOfCircle
       }console.log(circumfrance(4))




       function density(mass,volume){
          let Density=mass/volume
          return Density
       }console.log(density(9,3))



       function speed(distance,time){
          let Speed= distance/time
          return Speed
       
       }console.log(speed(50,5))




       function weight(mass){
          let gravity= 9.8
          let Weight= mass*gravity
          return Weight
       }
       console.log(weight(10))




       function converter(oC){
          let oF=(oC*9/5) +32
          return oF
       }
       console.log(converter(100))




       function BMI(weight,height){
          let bmi = weight/(height*height)
       
       if(bmi<18.5){
          console.log('Underweight')
       }else if(bmi<24.9){
          console.log('Normal weight')
       }else if(bmi<29.9){
          console.log('Overweight')
       }else if(bmi>30){
       console.log('Obese')
       }
       
       
       
       
       
          return bmi
       }
       console.log(BMI(30,1.52))