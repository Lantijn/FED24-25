const hamburgerButton = document.querySelector('.hamburgerknop');
console.log(hamburgerButton)
        const hamburgerMenu = document.querySelector('.hamburgeruit');

        // Voeg een event listener toe voor de klik op de knop
        hamburgerButton.addEventListener('click', () => {
            // Wissel tussen display: none en display: block
            if (hamburgerMenu.style.display === 'block') {
                hamburgerMenu.style.display = 'none';
            } else {
                hamburgerMenu.style.display = 'block';
            }
        });