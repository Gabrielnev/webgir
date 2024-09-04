

// Inicializando o ScrollReveal para todos os elementos dentro do main
ScrollReveal().reveal('main *', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    reset: true
});

// Aplicando efeito em botões específicos
ScrollReveal().reveal('.button, .btn, .btn-agendar', {
    duration: 1200,
    origin: 'right',
    distance: '30px',
    easing: 'ease-in-out',
    reset: true,
    delay: 200
});






const themeIcon = document.getElementById("theme-icon");
document.addEventListener('DOMContentLoaded', function() {
const themeToggleButton = document.getElementById('theme-toggle');

// Verifica se o tema foi previamente definido
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
}

themeToggleButton.addEventListener('click', function() {
    // Alterna entre os temas
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }
});
});




function toggleMenu() {
var navLinks = document.querySelector('.nav-links');
navLinks.classList.toggle('active');
}





document.addEventListener('DOMContentLoaded', function() {
function updatePartnerImages() {
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    
    document.querySelectorAll('.partner-image').forEach(img => {
        const baseSrc = img.src.split('/').slice(-1)[0];
        const newSrc = baseSrc.replace(/-(light|dark)/, `-${theme}`);
        img.src = `../public/${newSrc}`;
    });
}

// Inicializa as imagens quando a página carrega
updatePartnerImages();

// Atualiza as imagens ao alternar o tema
document.getElementById('theme-toggle').addEventListener('click', updatePartnerImages);
});