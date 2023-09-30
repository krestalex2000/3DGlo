import { animate } from './helpers';

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (document.body.clientWidth >= 768) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.display = 'block';
            modal.style.opacity = (progress * 100) + '%';
          },
        });
      } else {
        modal.style.display = 'block';
        modal.style.opacity = '100%';
      }
    });
  });

  modal.addEventListener('click', e => {
    if (
      !e.target.closest('.popup-content') ||
      (e.target.classList.contains('popup-close') &&
        document.body.clientWidth >= 768)
    ) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = 100 - (progress * 100) + '%';
          setTimeout(() => modal.style.display = 'none', 1000);
        },
      });
    } else {
      modal.style.display = 'none';
      modal.style.opacity = '0';
    }
  });
};

export default modal;
