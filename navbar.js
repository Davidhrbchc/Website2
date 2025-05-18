let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const navopener = document.getElementById('navopener');
const fixednav = document.getElementsByClassName('fixednav');
const itemtoopen = document.getElementById('itemtoopen');

let boolopen = false;
let bool = false;

function navopen() {
    if (window.innerWidth >= 768) {
        if (bool === false) {
            navopener.style.left = '65%';
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

