let lastScroll = 0;
const defualOffSet = 60;
const defualwindow = 115;
const nav = document.querySelector('.nav');

const scrollPosition = () => window.pageYOffset || document.documentElement.scroll.top;
const containeHide = () => nav.classList.contains('hide');

window.addEventListener('scroll', () =>{
    
    if(scrollPosition() > lastScroll && !containeHide() && scrollPosition() > defualwindow){
        // scroll down
        nav.classList.add('hide');
        nav.clas
    }
    else if(scrollPosition() < lastScroll && containeHide() && scrollPosition() < defualwindow){
        // scroll up
        nav.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})