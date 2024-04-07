const navBtn=document.getElementById("mobile_nav_button");
const closeMenu=document.getElementById("mobile_nav_close_button");
const navLinks=document.getElementById("nav_mobile_link_section");

navBtn.addEventListener("click", function openMenu(){
 
    navBtn.style.display="none";
    closeMenu.style.display="block";
    navLinks.style.display="block";
});

closeMenu.addEventListener("click", function exitMenu(){

 closeMenu.style.display="none";
 navBtn.style.display="block";
 navLinks.style.display="none";


});
