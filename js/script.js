document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger"),
          header = document.querySelector(".header")
          burgerSticks = document.querySelectorAll(".burger__stick");
    let sticksList = [],
        allTime,
        start,
        end,
        counterBurger = 0;
    burgerSticks.forEach((stick) => {
        sticksList.push(stick);
    })
    function burgerClose(){
        sticksList[1].classList.toggle("burger__stick_show");
        sticksList[1].classList.toggle("burger__stick_hide");
        start = new Date();
        allTime = 10*45
        animationCloseTimer = setInterval(animationClose, 10);
        burger.removeEventListener("click", burgerClose);
        burger.addEventListener("click", clickBurger);
    }
    function animationClose(){
        counterBurger -= 1
        sticksList[0].style.transform = `rotate(${counterBurger}deg)`;
        sticksList[2].style.transform = `rotate(-${counterBurger}deg)`;
        sticksList[2].style.bottom = "0px";
        end = new Date;
        if(end - start >= allTime){
            clearInterval(animationCloseTimer);
        }
    }
    function clickBurger(){
        sticksList[1].classList.toggle("burger__stick_show");
        sticksList[1].classList.toggle("burger__stick_hide");
        start = new Date();
        allTime = 10*45
        animationBurgerTimer = setInterval(animationBurger, 10);
        burger.removeEventListener("click", clickBurger);
        burger.addEventListener("click", burgerClose);
    }
    function animationBurger(){
        counterBurger += 1
        sticksList[0].style.transform = `rotate(${counterBurger}deg)`;
        sticksList[2].style.transform = `rotate(-${counterBurger}deg)`;
        sticksList[2].style.bottom = "14px";
        end = new Date;
        if(end - start >= allTime){
            clearInterval(animationBurgerTimer);
        }
    }
    burger.addEventListener("click", clickBurger);
})