/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике на кнопке с надписью "space", элемету btn
  должен присвоиться класс keyboard__btn--active. 
 
 - При следующем клике этот класс должен удаляться, 
  и так поочереди. Рекомендуется использовать classList.toggle.
 
 - Элементу pressed должно присваиваться значение
  textContent элемента btn.
*/

const btn = document.querySelector(".keyboard__btn--space");
const pressed = document.querySelector(".pressed");

btn.addEventListener("click", function(){
  btn.classList.toogle("keyboard__btn--active");
  let text = btn.textContent;
  pressed.textContent = text;
});