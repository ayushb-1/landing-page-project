// Change background header
const scrollHeader = () =>{
    
    const header =document.getElementById('header');

    this.scrollY >=50 ? header.classList.add('scrollHeader')
                      : header.classList.remove('scrollHeader')  
}
window.addEventListener('scroll',scrollHeader)



// slider 
let swiperProducts = new Swiper(".productsContainer", {
    spaceBetween: 32,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



// scroll active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY=window.pageYOffset

    sections.forEach(current =>{
      const sectionHeight=current.offsetHeight,
            sectionTop=current.offsetTop-58,
            sectionId=current.getAttribute('id'),
            sectionClass=document.querySelector('.navMenu a[href*=' + sectionId+ ']')
      
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        sectionClass.classList.add('active-Link')
      }      
      else{
        sectionClass.classList.remove('active-Link')
      }
    })
}
window.addEventListener('scroll', scrollActive)



// show scrollup
const scrollUp = () =>{
  const scrollUp=document.getElementById('scroll-up')
  // when the scroll is higher than the viewpoint Height,add show-scroll class
  this.scrollY >= 350? scrollUp.classList.add('show-scroll')
                      :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)




// dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})