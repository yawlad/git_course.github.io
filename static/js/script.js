function mainDisplay() {
  window.scrollTo(0, 0);
  const mainWrapper = document.querySelector("main .wrapper");
  mainWrapper.innerHTML = "";
  mainWrapper.id = current_id;
  const page = PAGES[current_id];
  const buttonsHTML = createButtonsHTML(PAGES[current_id-1], PAGES[current_id+1]);
  const mainHeaderHTML = createMainHeaderHTML(page.title);
  const goalsHTML = createGoalsHTML(page.goals);
  const stepsListHTML = createStepsListHTML(page.stages);
  mainWrapper.insertAdjacentHTML("beforeend", buttonsHTML);
  mainWrapper.insertAdjacentHTML("afterbegin", stepsListHTML);
  mainWrapper.insertAdjacentHTML("afterbegin", goalsHTML);
  mainWrapper.insertAdjacentHTML("afterbegin", mainHeaderHTML);

  addEvents();
}
function addEvents(){
  const prevButton = document.getElementById("nav_button_prev");
  prevButton.addEventListener("click",()=>{
    current_id--;
    mainDisplay(current_id);
  })
  const nextButton = document.getElementById("nav_button_next");
  nextButton.addEventListener("click", ()=>{
    current_id++;
    mainDisplay(current_id);
  })
  const logo = document.querySelector(".header .logo");
  logo.addEventListener("click", ()=>{
    current_id=0;
    mainDisplay(current_id);
  })
}

function createMainHeaderHTML(header) {
  return `
  <h1 class="main_header">${header}</h1>`;
}

function createButtonsHTML(prev, next) {
  let result = `
  <div class="nav_buttons">
    <button class="nav_button `
  if(!prev) result += `disabled_element" id="nav_button_prev"></button>`
  else result+=`" id="nav_button_prev"><i class="fa fa-arrow-left" aria-hidden="true"></i>${prev.title}</button>`
  result+= `<button class="nav_button `
  if(!next) result += `disabled_element" id="nav_button_next"></button>`
  else result+=`" id="nav_button_next">${next.title}<i class="fa fa-arrow-right" aria-hidden="true"></i></button>`
  result+=`</div>`
  return result;
}

function createGoalsHTML(goals) {
  let result = `<div class="goals">
    <h3 class="goals_header">Цели</h3>
    <ul class="goals_list">`;
  for (let goal of goals) {
    result += `<li class="goals_list_item">${goal}</li>`;
  }
  result += `
    </ul>
  </div>`;
  return result;
}

function createStepsListHTML(stages) {
  let result = `<div class="steps_list">`;
  console.log(stages);
  for (let stage of stages) {
    result += `
    <div class="step">
    <div class="step_number">${stage.number}</div>
    <div class="step_content">
      <h2 class="step_header">${stage.header}</h2>
      ${stage.itemsHTML}
    </div>
    </div>
    `;
  }
  return result;
}

mainDisplay(current_id);
