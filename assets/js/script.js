'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });







// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const clickedLink = this;
    
    // Remove active class from all navigation links and pages
    for (let k = 0; k < navigationLinks.length; k++) {
      navigationLinks[k].classList.remove("active");
    }
    for (let j = 0; j < pages.length; j++) {
      pages[j].classList.remove("active");
    }
    
    // Add active class to clicked link and corresponding page
    clickedLink.classList.add("active");
    for (let j = 0; j < pages.length; j++) {
      if (clickedLink.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        break;
      }
    }
    
    window.scrollTo(0, 0);
  });
}