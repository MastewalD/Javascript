function printArray (array){
  return array
  }
  console.log(printArray([1,2,3,4,5]))
  
  
  function showDateTime (){
    let date = new Date()
    let year=date.getFullYear()
    let month=date.getMonth()
    let day=date.getDate()
    let hour=date.getHours()
    let minute=date.getMinutes()
    return `${day}/${month}/${year} ${hour}:${minute}`
  }
  console.log(showDateTime())
  
  function swapValue (a,b){
  return `${b} ${a}`
  }
  console.log(swapValue(5,3))