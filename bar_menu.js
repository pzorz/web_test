
//for the animation of the burger to 'X'
const menuBtn = document.querySelector('.menu_button');
const menuAboutMe = document.querySelector('.menu_1');
const menuEducation = document.querySelector('.menu_2');
const menuCareer = document.querySelector('.menu_3');

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