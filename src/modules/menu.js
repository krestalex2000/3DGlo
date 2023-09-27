const menu = () => {
  const menu = document.querySelector('menu');
  const body = document.body;

  const handleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  body.addEventListener('click', e => {
    if (
      e.target.closest('.menu') ||
      e.target.closest('.close-btn') ||
      e.target.closest('menu>ul>li>a') ||
      (!e.target.closest('menu') && menu.classList.contains('active-menu'))
    ) {
      handleMenu();
    }
  });
};

export default menu;
