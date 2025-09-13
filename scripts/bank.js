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
        let money = 5000;
        let withinput = document.querySelector('.withdraw-input');
        let WithdrawInput = (withinput.value);
        document.querySelector('.wid-butt').addEventListener('click',()=>{
            const para =document.querySelector('.withdraw-trans');
            const inputdet = Number(inputUser('withdraw-input'));
            if (money < inputdet){
                para.innerHTML = `Transcation:  Your amount is higher the your bank balance :$${money}`;
            }
            else {
                money -= inputdet;
                para.innerHTML = `Transcation: $${inputdet} Debited from Account Bal Remain $${money}`;
            }
            
        });
        document.querySelector('.dep-butt').addEventListener('click',()=>{
            const para =document.querySelector('.deposit-trans');
            const inputdet = Number(inputUser('deposit-input'));
                money += inputdet;
                para.innerHTML = `Transcation: $${inputdet} Credited from Account Bal is $${money}`

            
        });
        function inputUser(link){
            let withinput = document.querySelector(`.${link}`);
            let WithdrawInput = (withinput.value);
           return WithdrawInput;
            
        };
        console.log(money)        