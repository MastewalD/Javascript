let firstp=document.querySelector("p")
console.log(firstp)
let firstpid=document.querySelector("#two")
console.log(firstpid)
let allp=document.querySelectorAll("p")
console.log(allp)
for(let i=0;i<=allp.length;i++){
    console.log(allp[i])
}
let four=document.querySelector("#four")
four.textContent="Four Paragraph"
console.log(four)
four.className="class-four"
four.setAttribute("id","five")
