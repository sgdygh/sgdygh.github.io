function showMenu(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);

    if(toggle && menu ){
        toggle.addEventListener('click', function(){
            menu.classList.toggle('active');
        })
    }
}
showMenu('burger', 'menu');


const heroSlider = new Swiper('.hero_container', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
    effect: 'coverflow',

    keyboard: {
        enable: true,
    },

   navigation: {
       prevEl: ".arrow-left",
       nextEl: ".arrow-right"
   },
});

const brawlStars = ScrollReveal({
    reset: true,
     distance: '100px',
     duration: 800,
})

brawlStars.reveal('.item-shop', {
    origin: 'bottom',
    interval: 200,
})