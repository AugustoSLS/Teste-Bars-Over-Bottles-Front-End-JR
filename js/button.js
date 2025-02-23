function setActive(button) {
    const buttons = document.querySelectorAll('.color-button');
    
    buttons.forEach(b => b.classList.remove('active'));
    
    button.classList.add('active');
}