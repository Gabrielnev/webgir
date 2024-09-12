document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('#nav-links a'); // Seleciona todos os links dentro do nav

    // Alterna o menu quando o botão é clicado
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um dos links de navegação
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active'); // Fecha o menu
        });
    });
});
