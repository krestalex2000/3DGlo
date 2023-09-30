const sendForm = ({ formId, someElement = [] }) => {
  const form = document.getElementById(formId);

  const statusBlock = document.createElement('div');
  const preloader = document.createElement('div');
  preloader.style.width = '64px';
  preloader.style.height = '64px';
  preloader.style.margin = 'auto';
  preloader.style.background = 'url(../../images/icons/preloader.gif) no-repeat';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется';

  const sendData = data => fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());

  const validate = list => {
    let success = true;
    const PATTERN_PHONE = /[^\d()+-]/;
    const PATTERN_NAME = /[^\sа-яА-ЯЁё]/;
    const PATTERN_MESSAGE = /[^\sа-яА-ЯЁё\d,.]/;

    list.forEach(input => {
      if (input.name === "user_phone" && PATTERN_PHONE.test(input.value)) success = false;
      if (input.name === "user_name" && PATTERN_NAME.test(input.value)) success = false;
      if (input.name === "user_message" && PATTERN_MESSAGE.test(input.value)) success = false;
    });

    return success;
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.append(preloader);
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElement.forEach(elem => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = successText;
          formElements.forEach(input => {
            input.value = '';
          });
        })
        .catch(() => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert('Данные не валидны');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место');
    }

    form.addEventListener('submit', e => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
