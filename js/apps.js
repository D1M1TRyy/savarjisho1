const nav_links=document.getElementById("nav_links");
const burger=document.getElementById("burger");

function togglebutton(burger){
    nav_links.classList.toggle("active_nav");
}

burger.onclick=togglebutton;


const button = document.getElementById("btn")
const modal_wrapper=document.getElementById("modal__wrapper")
const modal_close=document.getElementById("close__button")



function modalOpener(){
    modal_wrapper.classList.add("modal__active")
    console.log("hello");
}

function modalCloser(){
    modal_wrapper.classList.remove("modal__active")
    console.log("lehoo");
}

button.addEventListener("click", modalOpener)
modal_close.addEventListener("click", modalCloser)


// modal_Close.addEventListener("click", modalClose)



// function modalActive(){
//     modal_wraper.classList.add("modal__active")
//     console.log(hi)
// }





