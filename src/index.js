import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import pageScroll from './modules/pageScroll';
import calc from './modules/calc';
import slider from './modules/slider';
import tabs from './modules/tabs';
import sendForm from './modules/sendForm';

timer('19 september 2023');
menu();
modal();
pageScroll();
calc(100);
slider();
tabs();
sendForm({
  formId: 'form1',
  someElement: [
    {
      type: 'block',
      id: 'total'
    }
  ]
});
sendForm({ formId: 'form2' });
sendForm({ formId: 'form3' });
