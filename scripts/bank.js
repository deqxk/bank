document.querySelector('.withdraw-button-js').addEventListener
('click',()=>{
    const overaly = document.querySelector('.overaly-first');
    const popup = document.querySelector('.popup-one');
    overaly.classList.add('show')
    popup.classList.add('show')
});

document.querySelector('.deposit-button-js').addEventListener
('click',()=>{
    const overaly = document.querySelector('.overaly-second');
    const popup = document.querySelector('.popup-two');
    overaly.classList.add('show')
    popup.classList.add('show')
});
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Find the popup containing this button
    const popup = button.closest('.popup-one, .popup-two');
    // Find the overlay (parent of popup)
    const overlay = popup.parentElement;

    overlay.classList.remove('show');
    popup.classList.remove('show');
  });
});
