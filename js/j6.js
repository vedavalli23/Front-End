document.addEventListener('DOMContentLoaded', () => {
    const speakerCards = document.querySelectorAll('.speaker-card__button');
    const modal = document.getElementById('speakerModal');
    const modalBody = document.querySelector('.speaker-modal__body');
    const closeModal = document.querySelector('.speaker-modal__close');

    speakerCards.forEach((button) => {
        button.addEventListener('click', () => {
            const speakerCard = button.closest('.speaker-card');
            const speakerName = speakerCard.querySelector('.speaker-card__name').textContent.trim();
            const { bio, imageSrc } = getSpeakerDetails(speakerName);

           
            modalBody.innerHTML = `
                <div class="speaker-modal__content-wrapper">
                    <img src="${imageSrc}" alt="${speakerName}" class="speaker-modal__image">
                    <div class="speaker-modal__text">
                        <h3>${speakerName}</h3>
                        <p>${bio}</p>
                    </div>
                </div>
            `;
            modal.style.display = 'block'; 
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });

    function getSpeakerDetails(name) {
        switch (name) {
            case 'M.S. Dhoni':
                return {
                    bio: 'Mahendra Singh Dhoni is an Indian professional cricketer who plays as a right-handed batter and a wicket-keeper. He is widely regarded as one of the most prolific wicket-keeper batsmen and captains.',
                    imageSrc: 'Doni.jpg'
                };
            case 'Viswanathan Anand':
                return {
                    bio: 'Viswanathan "Vishy" Anand is an Indian chess grandmaster and a former five-time World Chess Champion. He was the first grandmaster from India in 1988 and has the eighth-highest peak FIDE rating of all time.',
                    imageSrc: 'vis.jpg'
                };
            case 'Bolt':
                return {
                    bio: 'Usain Bolt is a Jamaican retired sprinter who is widely considered to be the greatest sprinter of all time. He is an eight-time Olympic gold medalist and the world record holder in the 100 meters, 200 meters, and 4 × 100 meters relay.',
                    imageSrc: 'bolt.jpg'
                };
            default:
                return {
                    bio: 'Biography not available.',
                    imageSrc: 'default.jpg'
                };
        }
    }
});
