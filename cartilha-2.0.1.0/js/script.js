// filepath: c:\Users\ferna\OneDrive\Área de Trabalho\Cartilha-2.01.0\cartilha-2.0.1.0\js\script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mapeamento do toggle para tema claro/escuro
    const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', toggleSwitch.checked);
    });
    
    // Mapeamento do botão e do container de boas práticas
    const toggleBoasButton = document.getElementById('toggle-boas-praticas');
    const boasContent = document.querySelector('.boas-content');
    
    if (toggleBoasButton && boasContent) {
        toggleBoasButton.addEventListener('click', () => {
            boasContent.classList.toggle('expanded');
            if (boasContent.classList.contains('expanded')) {
                toggleBoasButton.textContent = 'Recolher';
            } else {
                toggleBoasButton.textContent = 'Expandir';
            }
        });
    }
    
    // Fixar a navbar ao rolar o scroll após o header desaparecer
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        const headerHeight = header.offsetHeight;
        if (window.pageYOffset >= headerHeight) {
            navbar.classList.add('fixed-navbar');
        } else {
            navbar.classList.remove('fixed-navbar');
        }
    });
});
