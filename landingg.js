// const hamburger = document.querySelector('.hamburger-icon');
// const navMenu = document.querySelector('.nav-menu');

// let flag = 0;
// const navBar = document.querySelector('.navigation');

// const cross = document.querySelector('#cross-icon');

// hamburger.addEventListener('click', () => {
//     flag = 1;
//     hamburger.classList.toggle('active');
//     navMenu.classList.toggle('active');
//     navBar.replaceChild(cross, hamburger);
//     cross.style.display = "block";
//     // navBar.style.backgroundColor = "#262626fd";
// })

// console.log(flag);
// document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
//     hamburger.classList.remove('active');
//     navMenu.classList.remove('active');
//     navBar.style.backgroundColor = "initial";
// }));


const hamburger = document.getElementById('hamburger-icon');
const navMenu = document.getElementsByClassName('nav-menu')[0];
const navBar = document.querySelector('.navigation');
const cross = document.querySelector('#cross-icon')

hamburger.addEventListener('click', () => {
    // hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navBar.replaceChild(cross, hamburger);
     cross.style.display = "block";
    navBar.style.backgroundColor = "#515151d5"
});


cross.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navBar.style.backgroundColor = "initial";
    navBar.replaceChild(hamburger, cross);
    cross.style.display = "none";
    
    
});
