const button = document.querySelector(".hamburger");
const list = document.querySelector(".menuHamburger");

const nav = document.querySelectorAll(".hamNav");
const head = document.querySelector(".header")
button.addEventListener("click",()=>{
    list.classList.toggle("display");
    head.classList.toggle("active")
    if(list.classList.contains("display")){
        button.value="☰";
    }
    else{
        button.value="X";


    }
    
})


function remove(){
    list.classList.remove("display");
    button.value=button.value="☰";
}


nav.forEach((navi) =>{
    navi.addEventListener("click",()=>{
        remove()
    })
})