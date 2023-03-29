function footerDisplay() {
  // Создаем элементы footer и div с классом wrapper
  const footer = document.createElement("footer");
  const wrapper = document.createElement("div");
  footer.classList.add("footer");

  // Добавляем классы элементам
  wrapper.classList.add("wrapper");

  // Добавляем div с классом wrapper в footer
  footer.appendChild(wrapper);

  // Добавляем footer на страницу
  document.body.appendChild(footer);
}

footerDisplay();
