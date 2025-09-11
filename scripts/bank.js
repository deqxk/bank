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


document.querySelector('.user-button').addEventListener('click',()=>{
      const account = document.querySelector('.dashboard-box');
      account.classList.add('show');
    });
    // ACCOUNT USER 
     // Add some interactive functionality
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Animate transaction items on load
        setTimeout(() => {
            document.querySelectorAll('.transaction-item').forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    item.style.transition = 'all 0.5s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
        }, 500);
        document.querySelector('.close-user').addEventListener('click',()=>{
           const dashboard = document.querySelector('.dashboard-box');
           dashboard.classList.remove('show');
        });