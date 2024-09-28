const hamburgerButton = document.querySelector('.hamburgerknop');
console.log(hamburgerButton)
        const hamburgerMenu = document.querySelector('.hamburgeruit');

        
        hamburgerButton.addEventListener('click', () => {
            
            if (hamburgerMenu.style.display === 'block') {
                hamburgerMenu.style.display = 'none';
            } else {
                hamburgerMenu.style.display = 'block';
            }
        });