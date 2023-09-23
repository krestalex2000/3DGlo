const pageScroll = () => {
  const menuBtns = document.querySelectorAll('menu>ul>li>a');
  const mouseBtn = document.querySelector('a[href="#service-block"]');

  const scroll = e => {
    const block = document.querySelector(`${e.currentTarget.attributes.href.value}`);
    e.preventDefault();
    block.scrollIntoView(block, { behavior: 'smooth', block: 'start', inline: 'start' });
  };

  menuBtns.forEach(btn => {
    btn.addEventListener('click', scroll);
  });
  mouseBtn.addEventListener('click', scroll);
};

export default pageScroll;
