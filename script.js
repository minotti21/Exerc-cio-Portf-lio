
window.addEventListener('scroll', () => {

    const windowTop = window.pageYOffset;

    const aside = document.getElementsByTagName('aside')[0];

    if (window.matchMedia("(min-width:1367px)").matches) {

        if (windowTop > aside.offsetTop + (window.innerHeight*0.8)) {
            aside.style.left = "50px";
            aside.style.opacity = "1";

        } else {
            aside.style.left = '-50px';
            aside.style.opacity = "0";
        }
        
    } else {

        if (windowTop > aside.offsetTop + (window.innerHeight*0.8)) {
            aside.style.left = "30px";
            aside.style.opacity = "1";

        } else {
            aside.style.left = '-50px';
            aside.style.opacity = "0";
        }
    }
})


