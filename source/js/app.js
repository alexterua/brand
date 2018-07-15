"use strict";
window.onload = function () {
    var dropdown = document.querySelector('.dropdown');
    var buttonDropdown = document.querySelector('.btn-dropdown');

    buttonDropdown.addEventListener('click', function (e) {
        e.preventDefault();
        if (dropdown.classList.contains('visually-hidden')) {
            dropdown.classList.remove('visually-hidden');
        } else {
            dropdown.classList.add('visually-hidden');
        }    
    });

    window.addEventListener('keydown', function (e) {
        e.preventDefault();
        if (!dropdown.classList.contains('visually-hidden') || (e.keyCode === '27')) {
            dropdown.classList.add('visually-hidden');
        }
    });
};

