
//menu button
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".menus");

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
});


//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
     speedAsDuration: true
    });