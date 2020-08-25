import '../sass/main.scss';
import feather from 'feather-icons';

function searchToggle() {
    const searchToggable = [
        document.querySelector('.search-close'),
        document.querySelector('.search-open')
    ];

    searchToggable.forEach((toggle, i) => {
        toggle.addEventListener('click', (event) => {
            document.querySelector('#searchModal').classList.toggle('is-hidden');
        });
    });
}

function determineNavbarEnd() {
    if (window.innerWidth <= 1023) { 
        var e = document.querySelector('.navbar-end');
        document.querySelector('.navbar-brand .navbar-item').parentNode.insertBefore(e, document.querySelector('.navbar-brand .navbar-item').nextSibling);
    } else {
        var e = document.querySelector('.navbar-end');
        document.querySelector('.navbar-menu').parentNode.insertBefore(e, document.querySelector('.navbar-menu').nextSibling);
    }
}

function menuToggle() {
    const primaryNavigation = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if (primaryNavigation.length > 0) {

        primaryNavigation.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target,
                      elementTarget = document.getElementById(target);

                el.classList.toggle('is-active');
                elementTarget.classList.toggle('is-active');
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    determineNavbarEnd();
    menuToggle();
    searchToggle();
    feather.replace();
});

window.addEventListener('resize', function (event) {
    determineNavbarEnd();
})
