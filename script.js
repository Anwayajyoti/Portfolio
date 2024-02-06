let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav  a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY - 100;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

        let header= document.querySelector('header');


        

    header.classList.toggle('sticky',window.scrollY > 100);
}