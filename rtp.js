const navlinks = document.querySelectorAll(".nav-menu .nav-link");

navlinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
  }
    
  )
  
  //initalize swiper 
  const swiper = new Swiper('.slider-wrapper ', {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });