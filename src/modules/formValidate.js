const formValidate = () => {
  const inputsText = document.querySelectorAll('input[type="text"]:not(.calc-item)');
  const inputMessage = document.querySelector('input[placeholder="Ваше сообщение"]');
  const inputsEmail = document.querySelectorAll('input[type="email"]');
  const inputsPhone = document.querySelectorAll('input[type="tel"]');

  const INPUT_TEXT_PATTERN = /[^-\sа-яА-ЯЁё]/;
  const INPUT_EMAIL_PATTERN = /[^\w@\-_.!~*`]/;
  const INPUT_PHONE_PATTERN = /[^\d()-]/;

  const validateInput = (e, pattern) => {
    e.target.value = e.target.value.replace(pattern, '');
  };

  inputsText.forEach(input => input.addEventListener('input', e => validateInput(e, INPUT_TEXT_PATTERN)));
  inputMessage.addEventListener('input', e => validateInput(e, INPUT_TEXT_PATTERN));
  inputsEmail.forEach(input => input.addEventListener('input', e => validateInput(e, INPUT_EMAIL_PATTERN)));
  inputsPhone.forEach(input => input.addEventListener('input', e => validateInput(e, INPUT_PHONE_PATTERN)));
};

export default formValidate;
