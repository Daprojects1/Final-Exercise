let nav = document.querySelector("nav")
// when window size changes, it adds or remove the bootstrap class that expands the navigation
window.addEventListener("resize", ()=>{
    if (window.innerWidth > 768){
        nav.classList.add("navbar-expand")
    }else{
        nav.classList.remove("navbar-expand")
    }
})
// icons 
let footIcon = document.querySelector(".ft-icon")
let footIcon1 = document.querySelector(".ft-icon1")
let footIcon2 = document.querySelector(".ft-icon2")
let footIcon3 = document.querySelector(".ft-icon3")

// unordered list
let footList = document.querySelector(".foot-ul")
let footList1 = document.querySelector(".foot-ul1")
let footList2 = document.querySelector(".foot-ul2")
let footList3 = document.querySelector(".foot-ul3")

let mainArr = [footIcon, footIcon1, footIcon2, footIcon3]

const mainFunc = ()=>{
 mainArr.forEach((item, array)=>{
   item.addEventListener("click",()=>{
    if (array=== 0){
        footIcon.classList.toggle("rotate-icon")
        footList.classList.toggle("show")
    } else if (array === 1){
        footIcon1.classList.toggle("rotate-icon")
        footList1.classList.toggle("show")
    }else if (array === 2){
        footIcon2.classList.toggle("rotate-icon")
        footList2.classList.toggle("show")
    }else if (array === 3){
        footIcon3.classList.toggle("rotate-icon")
        footList3.classList.toggle("show")
    } 
   })
    })
}

mainFunc();

