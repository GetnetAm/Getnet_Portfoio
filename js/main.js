let menu=document.querySelector('#menu-bars i');
let header=document.querySelector('header');

menu.onclick=()=>{
    menu.classList.toggle('fa-x');
    header.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-x');
    header.classList.remove('active');
}