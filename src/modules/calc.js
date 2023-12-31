
const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');
  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');
  const total = document.getElementById('total');

  const validateInput = e => {
    if (!e.target.matches('.calc-type')) {
      e.target.value = e.target.value.replace(/\D/, '');
    }
  };

  const animateTotalValue = (number, elem, step, time) => {
    let count = 0;
    const interval = setInterval(() => {

      if (count >= number) {
        clearInterval(interval);
      }

      elem.textContent = count;
      count += step;
    }, time);
  };

  const countCalc = () => {
    const calcTypeValue = calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcType.value && calcSquare.value) {
      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    animateTotalValue(totalValue, total, 100, 10);
  };

  calcBlock.addEventListener('input', e => {
    validateInput(e);

    if (e.target === calcType || e.target === calcSquare ||
        e.target === calcCount || e.target === calcDay) {
      countCalc();
    }
  });
};

export default calc;
