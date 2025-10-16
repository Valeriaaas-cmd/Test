document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedbackForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // В архивной версии — только уведомление
      alert('Спасибо за ваш отзыв!\n(В архивной версии отправка отключена.)');

      // Опционально: очистить форму после отправки
      // form.reset();
    });
  }
});
