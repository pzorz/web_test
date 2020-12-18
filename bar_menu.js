
//for the animation of the burger to 'X'
const menuBtn = document.querySelector('.menu_button');
const menuList = document.querySelector('.test');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuList.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuList.classList.remove('open');
        menuOpen = false;
    }
});



function menu(){
  
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}

