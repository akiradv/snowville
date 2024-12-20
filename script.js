// Loader atualizado
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    
    // Aguarda a animação da logo
    setTimeout(() => {
        // Fade out do loader
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            // Remove as animações iniciais
            document.querySelectorAll('.step').forEach(step => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            });
            document.querySelector('h1').style.opacity = '1';
            document.querySelectorAll('.card').forEach(card => {
                card.style.opacity = '1';
            });
        }, 500);
    }, 2000);
});

// Animação ao scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.step:not(.slide-up)');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            element.classList.add('slide-up');
        }
    });
});

// Resto do código existente
document.getElementById('discord-btn').addEventListener('click', function() {
    // Substitua este link pelo link do seu servidor Discord
    window.location.href = "https://discord.gg/rve67tepVv";
});
