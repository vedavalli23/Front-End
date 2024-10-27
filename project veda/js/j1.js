document.addEventListener('DOMContentLoaded', () => {
  const speakerCards = document.querySelectorAll('.speaker-card__button');
  const modal = document.getElementById('speakerModal');
  const modalBody = document.querySelector('.speaker-modal__body');
  const closeModal = document.querySelector('.speaker-modal__close');

  function setBackgroundImage(imageSrc) {
    document.body.style.backgroundImage = `url('${imageSrc}')`;
  }

  function clearBackgroundImage() {
    document.body.style.backgroundImage = "none";
  }

  speakerCards.forEach((button) => {
    button.addEventListener('click', () => {
      const speakerCard = button.closest('.speaker-card');
      const speakerName = speakerCard.querySelector('.speaker-card__name').textContent.trim();
      const { bio, imageSrc, backgroundImage } = getSpeakerDetails(speakerName);

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
      setBackgroundImage(backgroundImage);
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    clearBackgroundImage();
  });

  function getSpeakerDetails(name) {
    switch (name) {
      case 'M.S. Dhoni':
        return {
          bio: 'Mahendra Singh Dhoni is an Indian professional cricketer who plays as a right-handed batter and a wicket-keeper.',
          imageSrc: 'Doni.jpg',
          backgroundImage: 'cricket.jpg'
        };
      case 'Viswanathan Anand':
        return {
          bio: 'Viswanathan "Vishy" Anand is an Indian chess grandmaster and a former five-time World Chess Champion.',
          imageSrc: 'vis.jpg',
          backgroundImage: 'ches.jpg'
        };
      case 'Usain Bolt':
        return {
          bio: 'Usain Bolt is a Jamaican retired sprinter who is widely considered to be the greatest sprinter of all time.',
          imageSrc: 'bolt.jpg',
          backgroundImage: 'runn.jpg'
        };
      default:
        return {
          bio: 'Biography not available.',
          imageSrc: 'default.jpg',
          backgroundImage: 'default-background.jpg'
        };
    }
  }
});
