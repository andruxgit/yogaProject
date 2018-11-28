window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  let hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    startBtn = document.querySelector('.start'),
    finishBtn = document.querySelector('.finish');
    // content = document.querySelector('.content');

  function timerAnimated() {
    function frame() {
      let dateNow = new Date(),
        hourNow = dateNow.getHours(),
        minutesNow = dateNow.getMinutes(),
        secondsNow = dateNow.getSeconds();
      hours.innerHTML = (hourNow < 10) ? '0' + hourNow : '*' + hourNow;
      minutes.innerHTML = (minutesNow < 10) ? '0' + minutesNow : minutesNow;
      seconds.innerHTML = (secondsNow < 10) ? '0' + secondsNow : secondsNow;
    }
    let id = setInterval(frame, 1000);
    finishBtn.addEventListener('click', () => {
      return clearInterval(id);
    });
  }
  startBtn.addEventListener('click', timerAnimated);
});