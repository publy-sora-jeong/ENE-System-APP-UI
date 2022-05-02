(() => {

    const body = document.querySelector('body');
    const openMenu = document.querySelector('.btn-menu');
    const closenMenu = document.querySelector('.btn-close-menu');
    const menuContainer = document.querySelector('.menu-container');
    const closeModal = document.querySelector('.btn-close-modal');
    const modalContainer = document.querySelector('.modal')
    let vh;
    
    openMenu.addEventListener('click', function (e) {
        e.preventDefault();
        menuContainer.style.display = "block";
    })
    closenMenu.addEventListener('click', function (e) {
        e.preventDefault();
        menuContainer.style.display = "none";
    })

     closeModal.addEventListener('click', function (e) {
        e.preventDefault();
        modalContainer.style.display = "none";
    })

    
    window.addEventListener('load', () => {
        setViewHeight();
    });
    window.addEventListener('resize', () => {
        setViewHeight();
    });

    jQuery.exists = function (selector) {return ($(selector).length > 0);}
    //서브(해당클래스를 가진 페이지는 웨이브배경추가)
    if ($.exists('.bg-wavebox')) body.classList.add('wave') 
})();


//common - set VH
function setViewHeight() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}