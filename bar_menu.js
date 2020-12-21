
//for the animation of the burger to 'X'
const menuBtn = document.querySelector('.menu_button');
const menuAboutMe = document.querySelector('#about_menu');
const menuEducation = document.querySelector('#education_menu');
const menuCareer = document.querySelector('#career_menu');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuAboutMe.classList.add('open');
        menuEducation.classList.add('open');
        menuCareer.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuAboutMe.classList.remove('open');
        menuEducation.classList.remove('open');
        menuCareer.classList.remove('open');
        menuOpen = false;
    }
});