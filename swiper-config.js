
document.addEventListener("DOMContentLoaded", function () {
   const swiper = new Swiper(".mySwiper", {
      direction: "vertical",      // Вертикальный слайдер
      pagination: {
         el: ".swiper-pagination",
         clickable: true,           // Пагинация кликабельная
      },
      effect: "fade",               // Эффект слайдера
      speed: 600,                   // Скорость перехода
   });
});