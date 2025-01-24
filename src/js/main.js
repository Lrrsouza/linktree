document.addEventListener('DOMContentLoaded', () => {
    // Adiciona efeito de ondulação aos cards
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            let ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            let rect = this.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}); 