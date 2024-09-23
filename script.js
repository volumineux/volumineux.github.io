
/* HAMBURGER MENU TOGGLE */
  function toggleMenu() {
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      menu.classList.toggle("open");
      icon.classList.toggle("open");

      // Close menu when clicking outside the menu area
      document.addEventListener("click", (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnIcon = icon.contains(event.target);
        if (!isClickInsideMenu && !isClickOnIcon) {
            menu.classList.remove("open");
            icon.classList.remove("open");
        }
    });

      // Close menu when clicking a link inside the menu
      const menuLinks = document.querySelectorAll(".menu-links a");
      menuLinks.forEach(link => {
          link.addEventListener("click", () => {
              menu.classList.remove("open");
              icon.classList.remove("open");
          });
      });
  }

/* SLIDESHOW */
  // Initialize slideIndex for each slideshow
  let slideIndexes = {};
  let slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach(function(slideshow, index) {
      slideIndexes[index] = 0;
      showSlides(index);
  });

  function showSlides(slideshowIndex) {
      let slides = slideshows[slideshowIndex].getElementsByClassName("mySlides");

      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      slideIndexes[slideshowIndex]++;
      if (slideIndexes[slideshowIndex] > slides.length) {
          slideIndexes[slideshowIndex] = 1;
      }

      slides[slideIndexes[slideshowIndex] - 1].style.display = "block";

      setTimeout(function() { showSlides(slideshowIndex); }, 5000);
  }





/* MENU BAR SHRINK EXPAND ON SCROLL */  
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("desktop-nav").style.height = "40px";
    Array.from(document.getElementsByClassName("logo")).forEach(
        (element) => (element.style.height = "20px")
      );
    
  } else {
    document.getElementById("desktop-nav").style.height = "60px";
    Array.from(document.getElementsByClassName("logo")).forEach(
        (element) => (element.style.height = "30px")
      );
    
  }
}


/* BRANDS SCROLLER */
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
