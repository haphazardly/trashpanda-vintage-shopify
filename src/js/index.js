import '../sass/main.scss';
import feather from 'feather-icons';

function determineNavbarEnd() {
    if (window.innerWidth <= 1023) { 
        var e = document.querySelector('.navbar-end');
        document.querySelector('.navbar-brand .navbar-item').parentNode.insertBefore(e, document.querySelector('.navbar-brand .navbar-item').nextSibling);
    } else {
        var e = document.querySelector('.navbar-end');
        document.querySelector('.navbar-menu').parentNode.insertBefore(e, document.querySelector('.navbar-menu').nextSibling);
    }
}

function addMenuToggle() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {

        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                const target = el.dataset.target;
                const $target = document.getElementById(target);

                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    determineNavbarEnd();
    addMenuToggle();
    feather.replace();
});

window.addEventListener('resize', function (event) {
    determineNavbarEnd();
})