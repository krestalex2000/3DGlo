const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn');
  const modal = document.querySelector('.popup');

  let idInterval;
  let count = 0;

  const modalAnimate = display => {
    if (display === 'block') {
      count += 3;
      idInterval = requestAnimationFrame(() => modalAnimate(display));

      if (count >= 0 && count <= 100) {
        modal.style.opacity = count + '%';
        modal.style.display = `${display}`;
      } else {
        cancelAnimationFrame(idInterval);
      }
    }
    if (display === 'none') {
      count -= 3;
      idInterval = requestAnimationFrame(() => modalAnimate(display));

      if (count >= 0 && count <= 100) {
        modal.style.opacity = count + '%';
      } else {
        modal.style.display = `${display}`;
        cancelAnimationFrame(idInterval);
      }
    }
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (document.body.clientWidth >= 768) {
        modalAnimate('block');
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
      modalAnimate('none');
    } else {
      modal.style.display = 'none';
      modal.style.opacity = '0';
    }
  });
};

export default modal;
