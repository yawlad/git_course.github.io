function headerDisplay() {
  const header = document.createElement("header");
  const wrapper = document.createElement("div");
  const logo = document.createElement("div");
  const headerButtons = document.createElement("div");
  const themeButton = document.createElement("div");
  const menuButton = document.createElement("div");
  const headerMenu = document.createElement("div");

  // Добавляем классы элементам
  header.classList.add("header");
  wrapper.classList.add("wrapper");
  logo.classList.add("logo");
  headerButtons.classList.add("header_buttons");
  themeButton.classList.add("button");
  menuButton.classList.add("button");
  headerMenu.classList.add("header_menu");

  // Добавляем id элементам
  themeButton.id = "theme";
  menuButton.id = "menu";

  // Добавляем иконку в меню
  menuButton.innerHTML = '<i class="fa fa-gear" aria-hidden="true"></i>';

  // Добавляем текст в лого
  logo.textContent = "GIT Course";

  // Добавляем элементы на страницу в нужном порядке
  header.appendChild(wrapper);
  wrapper.appendChild(logo);
  wrapper.appendChild(headerButtons);
  headerButtons.appendChild(themeButton);
  headerButtons.appendChild(menuButton);
  menuButton.appendChild(headerMenu);

  // FOR

  for(const page of PAGES){
    const menuItem = document.createElement('div');
    menuItem.classList.add("header_menu_item");
    menuItem.textContent = page.title;
    menuItem.addEventListener(("click"), ()=>{
      current_id = page.id;
      mainDisplay();
    })
    headerMenu.appendChild(menuItem);
  }

  // Добавляем header на страницу
  document.body.insertBefore(header, document.body.firstChild);
}

headerDisplay();
