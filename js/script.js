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
 info.addEventListener('click', function(event){
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')){
       for (let i= 0;i<tabContent.length; i++){
         if (target == tab[i]){
           hideTabContent(0);
           showTabContent(i);
           break;
         }
       }
    }

 });

});