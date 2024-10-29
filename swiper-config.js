
document.addEventListener("DOMContentLoaded", function () {
   swiper = new Swiper(".mySwiper", {
      direction: "vertical",      // Вертикальный слайдер
      pagination: {
         el: ".swiper-pagination",
         clickable: true,           // Пагинация кликабельная
      },
      effect: "fade",               // Эффект слайдера
      speed: 600,                   // Скорость перехода
   });

   document.getElementById('buyButton').addEventListener('click', function () {
      console.log('Кнопка "Купить" нажата'); // Отладочное сообщение
      swiper.slideTo(1); // Переход к слайду 2 (индекс 1)
   });
});

function animateCountUp(elementId, targetNumber, duration = 2000) {
   const element = document.getElementById(elementId);
   let currentNumber = 0;

   const totalSteps = duration / 10; // Общее количество шагов
   const increment = (targetNumber - currentNumber) / totalSteps; // Изменение за шаг

   const counter = setInterval(() => {
      currentNumber += increment; // Увеличиваем текущее число

      // Проверка на достижение целевого значения
      if (currentNumber >= targetNumber) {
         currentNumber = targetNumber; // Устанавливаем текущее число в целевое
         clearInterval(counter); // Останавливаем интервал
      }

      // Обновляем текст элемента
      element.innerText = currentNumber.toFixed(1); // Форматируем до одного знака после запятой
   }, 10); // Интервал обновления
}

window.onload = function () {
   animateCountUp("counter", 192, 2500); // Анимация для первого счётчика
   animateCountUp("counter2", 3.2, 2500); // Отдельная анимация для второго счётчика
};





const buttonNew = document.querySelector('.buttonNew');
const overlay = document.getElementById('overlay');
const blurredBackground = document.getElementById('blurredBackground');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('closeButton');
const swiperPagination = document.querySelector('.swiper-pagination'); // Кнопки пагинации
const carModel = document.getElementById('carModel'); // Элемент модели машины

buttonNew.addEventListener('click', () => {
   overlay.classList.add('active'); // Активировать фон
   blurredBackground.style.display = 'block'; // Показать размытый фон
   menu.classList.add('active'); // Показать меню
   carModel.classList.add('blurred'); // Добавить размытие к модели
   swiperPagination.style.display = 'none'; // Скрыть кнопки пагинации
   document.body.style.overflow = 'hidden'; // Запретить прокрутку
   swiper.allowTouchMove = false; // Отключить перелистывание слайдов
});

closeButton.addEventListener('click', () => {
   overlay.classList.remove('active'); // Деактивировать фон
   menu.classList.remove('active'); // Скрыть меню
   blurredBackground.style.display = 'none'; // Убрать размытый фон
   carModel.classList.remove('blurred'); // Убрать размытие с модели
   swiperPagination.style.display = 'block'; // Показать кнопки пагинации
   document.body.style.overflow = ''; // Разрешить прокрутку
   swiper.allowTouchMove = true; // Включить перелистывание слайдов
});

// Закрытие меню при нажатии на фон
overlay.addEventListener('click', () => {
   overlay.classList.remove('active');
   menu.classList.remove('active');
   blurredBackground.style.display = 'none'; // Убрать размытый фон
   carModel.classList.remove('blurred'); // Убрать размытие с модели
   swiperPagination.style.display = 'block'; // Показать кнопки пагинации
   document.body.style.overflow = ''; // Разрешить прокрутку
   swiper.allowTouchMove = true; // Включить перелистывание слайдов
});

const dropdownHeaders = document.querySelectorAll('.dropdown-header');
dropdownHeaders.forEach(header => {
   header.addEventListener('click', () => {
      const content = header.nextElementSibling; // Получаем содержимое под заголовком

      // Переключаем классы для анимации
      content.classList.toggle('active'); // Переключаем активный класс
   });
});