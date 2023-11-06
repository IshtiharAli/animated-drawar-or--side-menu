const toggler=document.querySelector(".toggle");

const nav=document.querySelector(".navigation")

toggler.onclick=function () {
    nav.classList.toggle("active")
}