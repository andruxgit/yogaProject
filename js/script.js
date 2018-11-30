window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

  //скрыть все элементы начиная с orderNum
  function hideTabContent(orderNum) {
    for (let i = orderNum; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  //показать таб с порядковым номером orderNum
  function showTabContent(orderNum) {
    if (tabContent[orderNum].classList.contains('hide')) {
      tabContent[orderNum].classList.remove('hide');
      tabContent[orderNum].classList.add('show');
    }
  }
  //при событии клик на табе происходит отображение нужного контента
  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')) {
      for (let i = 0; i < tabContent.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }

    }

  });
  //таймер обратного отсчета 

  let deadLine = '2018-12-01';

  // console.log(Date.parse(new Date()))
  //Получение обьекта с небходимыми параметрами времени определяющими временной отрезок до события
  function getTimeRemaning(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.round((t / 1000) % 60),
      minutes = Math.round((t / 1000 / 60) % 60),
      hours = Math.round(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  // тело таймера (отображение на странице и изменение каждую секунду сколко времени до события)
  //id - контейнер таймера и endTime - время события
  function setClock(id, endTime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaning(endTime);
      if (t.total > 0) {
        hours.textContent = (t.hours < 10) ? '0' + t.hours : t.hours;
        minutes.textContent = (t.minutes < 10) ? '0' + t.minutes : t.minutes;
        seconds.textContent = (t.seconds < 10) ? '0' + t.seconds : t.seconds;
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      } else {
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('timer', deadLine);
  //модальное окно

  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    closeMod = document.querySelector('.popup-close'),
    know = document.querySelectorAll('.description-btn');
  // infoContent = document.querySelector('.info');


  more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });
  closeMod.addEventListener('click', function () {
    overlay.style.display = '';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });


  //Привязка вызова мод окна к кнопкам в табах
  know.forEach(function (i) {
    i.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });
  });




});