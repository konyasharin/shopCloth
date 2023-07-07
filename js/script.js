document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger"),
          headerLinks = document.querySelector('.header__links')
    burger.addEventListener('click', () => {
        headerLinks.classList.toggle('header__links_active')
    })
})