
const timesOfDayBlock = document.querySelector('.times-of-day');
const todayBlock = document.querySelector('.today');
const currentTimeBlock = document.querySelector('.current-time');
const timeRemainingBlock = document.querySelector('.time-remaining');

const getTimeRemaining = deadline => {
  const dateStop = new Date(deadline).getTime();
  const dateNow = new Date().getTime();
  const timeRemaining = (dateStop - dateNow) / 1000;
  const hours = Math.floor(timeRemaining / 60 / 60);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  return {
    timeRemaining,
    hours,
    minutes,
    seconds,
  };
};

const getCurrentDate = () => {
  const dateNow = new Date();
  const hours = dateNow.getHours()
  const minutes = dateNow.getMinutes();
  const seconds = dateNow.getSeconds();
  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const day = daysOfWeek[dateNow.getDay()];

  return {
    hours,
    minutes,
    seconds,
    day
  };
};

const greeting = time => {
  let greeting;

  if (time >= 0 && time < 6) {
    greeting = 'Доброй ночи';
  }
  if (time >= 6 && time < 12) {
    greeting = 'Доброе утро';
  }
  if (time >= 12 && time < 18) {
    greeting = 'Доброый день';
  }
  if (time >= 18 && time <= 23) {
    greeting = 'Добрый вечер';
  }

  return greeting;
};

const showDate = () => {
  const currentDate = getCurrentDate();
  const getTime = getTimeRemaining('1 january 2024');
  const greetingStr = greeting(currentDate.hours);
  const currentTime = `${currentDate.hours}:${currentDate.minutes}:${currentDate.seconds}`;
  let timesOfDay;
  let str;

  if (currentDate.hours >= 0 && currentDate.hours < 12) {
    timesOfDay = 'AM';
  } else {
    timesOfDay = 'PM';
  }

  timesOfDayBlock.textContent = greetingStr;
  todayBlock.textContent = `Сегодня: ${currentDate.day}`;
  currentTimeBlock.textContent = `Текущее время: ${currentTime} ${timesOfDay}`;
  timeRemainingBlock.textContent = `До нового года осталось ${Math.floor(getTime.hours / 24)} дней`;
};

showDate();

