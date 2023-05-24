
const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.getElementsByClassName('nav-menu')[0];
const navBar = document.querySelector('.navigation');
const cross = document.querySelector('#cross-icon')

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navBar.replaceChild(cross, hamburger);
    cross.style.display = "block";
    navBar.style.backgroundColor = "#515151d5"
});


cross.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navBar.style.backgroundColor = "initial";
    navBar.replaceChild(hamburger, cross);
    cross.style.display = "none";
    
    
});
