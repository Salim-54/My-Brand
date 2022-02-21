'use strict'


document.querySelectorAll('.scrolls').forEach(function(el) {
    el.addEventListener('click', function(e){
        e.preventDefault();
        const id = this.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior : 'smooth'});

    });
});



