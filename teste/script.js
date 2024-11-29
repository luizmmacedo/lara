// Seleção dos elementos
const navLinks = document.querySelectorAll('.nav-link');
const vanImg = document.querySelector('.van-img');
const menuIcon = document.getElementById('menu-icon');
const navBar = document.getElementById('nav-bar');

// Marca o item de menu ativo
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active')); // Remove a classe active de todos
        link.classList.add('active'); // Adiciona a classe active ao item clicado
    });
});

 
// Rolagem suave para os links do menu
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para ficar um pouco acima do topo
            behavior: 'smooth'
        });
    });
});


