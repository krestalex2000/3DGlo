const calc = () => {
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');

  const validateInput = e => {
    e.target.value = e.target.value.replace(/\D/, '');
  };

  calcSquare.addEventListener('input', validateInput);
  calcCount.addEventListener('input', validateInput);
  calcDay.addEventListener('input', validateInput);
};

export default calc;
