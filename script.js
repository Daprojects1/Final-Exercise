let nav = document.querySelector("nav")
// when window size changes, it adds or remove the bootstrap class that expands the navigation
window.addEventListener("resize", ()=>{
    if (window.innerWidth > 768){
        nav.classList.add("navbar-expand")
    }else{
        nav.classList.remove("navbar-expand")
    }
})