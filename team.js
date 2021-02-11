function myToggle() {
    const navs = document.querySelectorAll('.NavbarItems') /* Gets the 3 items Home,Login and About Us*/
    navs.forEach(nav => nav.classList.toggle('NavbarToggleShow')); 
  } /* note . is not needed*/
  
  document.querySelector('.NavbarLink-toggle')/*NavbarToggleShow to display on click event*/
    .addEventListener('click', myToggle); /*on clickevent call classToggle fucntion */
  









    
  /*1. element.classList returns a live DOM collection of the class attributes of the element.
  2.Toggle between adding and removing a class name from an element with JavaScript.*/
  /*https://www.w3schools.com/howto/howto_js_toggle_class.asp*/
  