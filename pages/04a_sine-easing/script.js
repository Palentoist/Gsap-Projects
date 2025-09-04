import gsap from "gsap";

let button = document.querySelector('.scroll-to-top');
let isFloating = false;

window.addEventListener("scroll" , () => {
    if(window.scrollY > 500)
    {
        button.classList.add('show');

    if(!isFloating)
    {
        gsap.to(button , {
            y : -10,
            duration : 1.5,
            yoyo : true,
            repeat : -1,
            ease : 'sine.out',
        })

        isFloating = true;
    }
}
    else
    {
        button.classList.remove('show');
    }
})

button.addEventListener("mouseenter" , ()=> {
    gsap.to(button , {
        scale : 1.1,
        duration : 0.2,
    })
})

button.addEventListener("mouseleave" , ()=> {
    gsap.to(button , {
        scale : 1,
        duration : 0.2,
    })
})

button.addEventListener("click" , ()=> {
    window.scrollTo(0 , 0);
})