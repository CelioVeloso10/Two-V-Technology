// Scroll para a seção "Sobre" ao clicar no botão "Saiba Mais"
document.getElementById('learnMore').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Adiciona sombra na NavBar ao rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
