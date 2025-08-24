console.log("Nickel👍");

const liensnav = document.querySelectorAll('.bandeau a');

liensnav.forEach(lien => {
    lien.addEventListener('mouseenter', function(ev) {
        ev.currentTarget.style.color = '#0051ffff';
    });
    lien.addEventListener('mouseleave', function(ev) {
        ev.currentTarget.style.color = '';
    });
});