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

// Fonction qui permet que losque l'on clique sur un bouton, la page défile jusqu'à la section correspondante

const coursButton = document.getElementById('#cours-section');

coursButton.addEventListener('click', function() {
    window.scrollTo({
        top: document.getElementById('cours').offsetTop,
        behavior: 'smooth'
    });
}); 