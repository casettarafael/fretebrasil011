// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'animate-on-scroll'
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Opções para o Intersection Observer
    // rootMargin: Adiciona uma margem ao redor da viewport para que a animação comece antes ou depois.
    //             Ex: '0px 0px -100px 0px' significa que o elemento deve estar 100px acima da parte inferior da viewport para ser observado.
    // threshold: Porcentagem de visibilidade do elemento para disparar a observação. 0.1 = 10% do elemento visível.
    const observerOptions = {
        root: null, // O viewport do navegador
        rootMargin: '0px', // Inicia a animação assim que o elemento entra no viewport
        threshold: 0.1 // 10% do elemento visível já dispara
    };

    // Callback que será executado quando um elemento observado muda de visibilidade
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento está visível (intersecção > 0)
            if (entry.isIntersecting) {
                entry.target.classList.add('animated'); // Adiciona a classe para disparar a animação
                observer.unobserve(entry.target); // Deixa de observar o elemento, anima uma vez só
            }
        });
    };

    // Cria uma nova instância do Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa cada elemento animado
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ===============================================
    // Animação para a tagline do cabeçalho (opcional)
    // Se você quiser que a tagline entre com uma animação
    const headerTagline = document.querySelector('header .tagline');
    if (headerTagline) {
        headerTagline.style.opacity = '0';
        headerTagline.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            headerTagline.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            headerTagline.style.opacity = '1';
            headerTagline.style.transform = 'translateY(0)';
        }, 300); // Pequeno atraso para a tagline aparecer depois do carregamento
    }

    // ===============================================
    // Animação para o botão "Ligue Agora" na seção Hero
    // Isso fará com que ele apareça com um atraso.
    const heroCallButton = document.querySelector('.btn-hero-call');
    if (heroCallButton) {
        // Inicialmente oculto com transform e opacidade 0
        heroCallButton.style.opacity = '0';
        heroCallButton.style.transform = 'translateY(30px)';

        // Adiciona a animação depois de um atraso
        setTimeout(() => {
            heroCallButton.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            heroCallButton.style.opacity = '1';
            heroCallButton.style.transform = 'translateY(0)';
        }, 1200); // Atraso de 1.2 segundos para aparecer (ajuste conforme desejar)
    }
});

// Você pode adicionar mais interações JavaScript aqui
// Por exemplo, lógica para um menu hambúrguer, sliders, etc.

// Exemplo simples de como você pode ativar/desativar classes para um menu hambúrguer (precisa do HTML)
/*
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active'); // Adiciona/remove a classe 'active'
        menuToggle.classList.toggle('active'); // Para mudar o ícone
    });
}
*/