function setActiveS(button) {
    const buttons = document.querySelectorAll('.btn-size-a');
    
    buttons.forEach(b => b.classList.remove('size-active'));
    
    button.classList.add('size-active');
}