let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const navopener = document.getElementById('navopener');
const fixednav = document.getElementsByClassName('fixednav');
const itemtoopen = document.getElementById('itemtoopen');

let boolopen = false;
let bool = false;

function navopen() {
    if (window.innerWidth >= 1024) {
        if (bool === false) {
            navopener.style.left = '65%';
            bool = true;
        } else {
            navopener.style.left = '100%';
            bool = false;
        }
    } else if (window.innerWidth > 765 && window.innerWidth < 1024) {
        if (bool === false) {
            navopener.style.left = '50%';
            bool = true;
        } else {
            navopener.style.left = '100%';
            bool = false;
        }
    } else {
        if (bool === false) {
            navopener.style.left = '0%';
            bool = true;
        } else {
            navopener.style.left = '100%';
            bool = false;
        }
    }
}


function itemopen(){
    if(boolopen === false) { 
        itemtoopen.style.display = 'flex';
        boolopen = true;
    } else {
        itemtoopen.style.display = 'none';
        boolopen = false;
    }
}
/*
window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-10.5vh';
    } else {
        navbar.style.top = '0vh';
    }

      
       
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);*/


