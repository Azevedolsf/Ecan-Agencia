const linksInternos = document.querySelectorAll('.header__nav a[href^="#"]');
function initScrollSuave(){
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();
