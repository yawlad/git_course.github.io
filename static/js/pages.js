function PageConstructor(title, goals, stages) {
  return {
    title: title,
    goals: goals,
    stages: stages,
  };
}

function StagesConstructor(numHead, itms) {
  let stages = [];
  for (let i = 0; i < numHead.length; i++) {
    stages.push(
      StageConstructor(numHead[i].slice(0, 2), numHead[i].slice(3), itms[i])
    );
  }
  return stages;
}

function StageConstructor(number, header, itemsHTML) {
  return {
    number: number,
    header: header,
    itemsHTML: itemsHTML,
  };
}

function ItemConstructor(description, instructions_header, instructions) {
  return {
    description,
    instructions_header,
    instructions,
  };
}

function createPages() {
  let pages = [];
  for (let i = 0; i < titles.length; i++) {
    pages.push(
      PageConstructor(
        titles[i],
        goals[i].split("\n"),
        StagesConstructor(numHead[i], itemsHTML[i])
      )
    );
  }
  pages = pages.sort(
    (curr, next) =>
      Number(curr.title.split(".")[0]) - Number(next.title.split(".")[0])
  );
  let id = 0;
  pages.forEach((page) => {
    Object.assign(page, { id: id });
    id++;
  });
  return pages;
}

const titles = [
  "47. Добавление удаленного репозитория",
  "45. Добавление ветки наблюдения",
  "11. Алиасы",
  "19. Внесение изменений в коммиты",
  "46. Чистые репозитории",
  "41. Изменение оригинального репозитория",
  "26. Изменения в ветке master",
  "9. Изменения, а не файлы",
  "4. Проверка состояния",
  "37. Клонирование репозиториев",
  "8. Коммит изменений",
  "3. Создание проекта",
  "24. Создание ветки",
  "29. Создание конфликта",
  "42. Извлечение изменений",
  "12. Получение старых версий",
  "22. Git внутри: Каталог .git",
  "23. Git внутри: Работа непосредственно с объектами git",
  "10. История",
  "50. Размещение ваших git репозиториев",
  "5. Внесение изменений",
  "28. Слияние",
  "35. Слияние в ветку master",
  "43. Слияние извлеченных изменений",
  "2. Финальные приготовления",
  "21. Подробнее о структуре",
  "20. Перемещение файлов",
  "36. Несколько репозиториев",
  "25. Навигация по веткам",
  "44. Извлечение и слияние изменений",
  "49. Извлечение общих изменений",
  "48. Отправка изменений",
  "34. Перебазирование",
  "31. Перебазирование как альтернатива слиянию",
  "40. Удаленные ветки",
  "18. Удаление тега oops",
  "17. Удаление коммитов из ветки",
  "32. Сброс ветки style",
  "33. Сброс ветки master",
  "30. Разрешение конфликтов",
  "38. Просмотр клонированного репозитория",
  "1. Подготовка",
  "51. Расшаривание репозиториев",
  "7. Индексация и коммит",
  "6. Индексация изменений",
  "13. Создание тегов версий",
  "16. Отмена коммитов",
  "14. Отмена локальных изменений (до индексации)",
  "15. Отмена проиндексированных изменений (перед коммитом)",
  "27. Просмотр отличающихся веток",
  "39. Что такое origin?",
];

const goals = [
  "Добавить чистый репозиторий в качестве удаленного репозитория к нашему оригинальному репозиторию.",
  "Научиться добавлять локальную ветку, которая отслеживает изменения удаленной ветки.",
  "Научиться настраивать алиасы и шорткаты для команд git",
  "Научиться изменять существующие коммиты",
  "Научиться создавать чистые репозитории.",
  "Внести некоторые изменения в оригинальный репозиторий, чтобы затем попытаться извлечь и слить изменения из удаленной ветки в текущую",
  "Научиться работать с несколькими ветками с различными (и, возможно, конфликтующими) изменениями.",
  "Понять, что git работает с изменениями, а не файлами.",
  "Научиться проверять состояние репозитория",
  "Научиться делать копии репозиториев.",
  "Научиться коммитить изменения в репозиторий",
  "Научиться создавать git репозиторий с нуля.",
  "Научиться создавать локальную ветку в репозитории",
  "Создание конфликтующих изменений в ветке master.",
  "Научиться извлекать изменения из удаленного репозитория.",
  "Научиться возвращать рабочий каталог к любому предыдущему состоянию.",
  "Узнать о структуре каталога .git",
  "Исследовать структуру базы данных объектов\nНаучиться использовать SHA1 хэши для поиска содержимого в репозитории",
  "Научиться просматривать историю проекта.",
  "Научиться настраивать git сервер для совместного использования репозиториев.",
  "Научиться отслеживать состояние рабочего каталога",
  "Научиться сливать две отличающиеся ветки для переноса изменений обратно в одну ветку.",
  "Мы поддерживали соответствие ветки style с веткой master (с помощью rebase), теперь давайте сольем изменения style в ветку master.",
  "Научиться перемещать извлеченные изменения в текущую ветку и рабочий каталог.",
  "Установить материалы учебника и подготовить их к работе.",
  "Добавить еще один файл в наш репозиторий",
  "Научиться перемещать файл в пределах репозитория.",
  "Познакомиться с работой с мульти-репозиториями",
  "Научиться перемещаться между ветками репозитория",
  "Узнать о том, что команда git pull эквивалентна комбинации git fetch и git merge.",
  "Научиться извлекать изменения из общего репозитория.",
  "Научиться отправлять изменения в удаленный репозиторий.",
  "Использовать команду rebase вместо команды merge.",
  "Узнать различия между перебазированием и слиянием.",
  "Узнать о локальных и удаленных ветках",
  "Удаление тега oops (уборка)",
  "Научиться удалять самые последние коммиты из ветки",
  "Сброс ветки style до точки перед первым слиянием.",
  "Сбросить ветку master в точку до конфликтующего коммита.",
  "Научиться разрешать конфликты во время слияния",
  "Узнать о ветках в удаленных репозиториях.",
  "Полная готовность к работе с Git.",
  "Научиться расшаривать репозитории по WIFI.",
  "Изучить понятие индексации и коммитов",
  "Научиться индексировать изменения для последующих коммитов",
  "Узнать, как создавать теги для коммитов для использования в будущем",
  "Научиться отменять коммиты\nНаучиться откатывать изменения безвозвратно",
  "Научиться отменять коммиты в локальный репозиторий.",
  "Научиться отменять изменения в рабочем каталоге",
  "Научиться отменять изменения, которые были проиндексированы",
  "Научиться просматривать отличающиеся ветки в репозитории.",
  "Узнать об именах удаленных репозиториев.",
];

const numHead = [
  ["01 Добавьте удаленный репозиторий"],
  ["01 Добавьте локальную ветку, которая отслеживает удаленную ветку."],
  [
    "01 Общие алиасы",
    "02 Задайте алиас hist в файле .gitconfig ",
    "03 Type и Dump",
    "04 Алиасы команд (опционально)",
  ],
  [
    "01 Измените страницу, а затем сделайте коммит",
    "02 Ой... необходим email",
    "03 Измените предыдущий коммит",
    "04 Просмотр истории",
  ],
  ["01 Создайте чистый репозиторий"],
  ["01 Внесите изменения в оригинальный репозиторий hello", "02 Далее"],
  [
    "01 Создайте файл README в ветке master.",
    "02 Сделайте коммит изменений README в ветку master.",
  ],
  [
    "01 Первое изменение: Добавьте стандартные теги страницы",
    "02 Добавьте это изменение",
    "03 Второе изменение: Добавьте заголовки HTML",
    "04 Проверьте текущий статус",
    "05 Коммит",
    "06 Добавьте второе изменение",
    "07 Сделайте коммит второго изменения",
  ],
  ["01 Проверьте состояние репозитория"],
  ["01 Перейдите в рабочий каталог", "02 Создайте клон репозитория hello"],
  ["01 Закоммитьте изменения", "02 Проверьте состояние"],
  [
    "01 Создайте страницу «Hello, World»",
    "02 Создайте репозиторий",
    "03 Добавьте страницу в репозиторий",
  ],
  [
    "01 Создайте ветку",
    "02Добавьте файл стилей style.css",
    "03Измените основную страницу",
    "04Измените index.html",
    "05 Далее",
  ],
  [
    "01 Вернитесь в master и создайте конфликт",
    "02 Просмотр веток",
    "03 Далее",
  ],
  ["01 Проверьте README"],
  [
    "01 Получите хэши предыдущих версий",
    "02 Вернитесь к последней версии в ветке master ",
  ],
  [
    "01 Каталог .git",
    "02 База данных объектов",
    "03 Углубляемся в базу данных объектов",
    "04 Config File",
    "05 Ветки и теги",
    "06 Файл HEAD",
  ],
  [
    "01 Поиск последнего коммита",
    "02 Вывод последнего коммита",
    "03 Поиск дерева",
    "04 Вывод каталога lib",
    "05 Вывод файла hello.html",
    "06 Исследуйте самостоятельно",
  ],
  [
    "01 Однострочная история",
    "02 Контроль отображения записей",
    "03 Изощряемся",
    "04 Конечный формат лога",
    "05 Другие инструменты",
  ],
  ["01 Запуск git сервера", "02 Отправка в Git Daemon"],
  [
    "01 Измените страницу «Hello, World»",
    "02 Проверьте состояние",
    "03 А далее...",
  ],
  ["01 Слияние веток", "02 Далее"],
  ["01 Слияние style в master", "02 Просмотрите логи"],
  [
    "01 Слейте извлеченные изменения в локальную ветку master",
    "02 Еще раз проверьте файл README",
    "03 Далее",
  ],
  ["01 Скачайте учебные материалы", "02 Распакуйте учебные материалы"],
  ["01 Добавление index.html"],
  [
    "01 Переместите файл hello.html в каталог lib",
    "02 Второй способ перемещения файлов",
    "03 Коммит в новый каталог",
  ],
  ["01 Знакомство с мульти-репозиториями"],
  ["01 Переключение на ветку Master", "02 Вернемся к ветке «style»."],
  ["01 Обсудим pull и fetch + merge"],
  ["01 Извлеките изменения"],
  ["01 Отправим внесенные изменения"],
  [
    "01 Слияние VS перебазирование",
    "02 Когда использовать перебазирование, а когда слияние?",
  ],
  ["01 Обсудим"],
  ["01 Список удаленных веток"],
  ["01 Удаление тега oops"],
  [
    "01 Команда reset",
    "02 Проверьте нашу историю",
    "03 Для начала отметьте эту ветку",
    "04 Сброс коммитов к предшествующим коммиту Oops",
    "05 Ничего никогда не теряется",
    "06 Опасность сброса",
  ],
  ["01 Сброс ветки style", "02 Проверьте ветку."],
  ["01 Сброс ветки master"],
  [
    "01 Слияние master с веткой style",
    "02 Решение конфликта",
    "03 Сделайте коммит решения конфликта",
    "04 Расширенные возможности слияния",
  ],
  [
    "01 Посмотрите на клонированный репозиторий",
    "02 Просмотрите историю репозитория",
    "03 Удаленные ветки",
  ],
  [
    "01 Установка имени и электронной почты",
    "02 Параметры установки окончаний строк",
    "03 Установка отображения unicode",
  ],
  ["01 Передача репозиториев по сети"],
  ["01 Обсудим"],
  ["01 Добавьте изменения"],
  [
    "01 Создайте тег первой версии",
    "02 Теги для предыдущих версий ",
    "03 Переключение по имени тега ",
    "04 Просмотр тегов с помощью команды tag",
    "05 Просмотр Тегов в логах ",
  ],
  [
    "01 Отмена коммитов",
    "02 Измените файл и сделайте коммит",
    "03 Сделайте коммит с новыми изменениями, отменяющими предыдущие",
    "04 Проверьте лог",
    "05 Далее",
  ],
  [
    "01 Переключитесь на ветку Master ",
    "02 Измените hello.html ",
    "03 Проверьте состояние ",
    "04 Отмена изменений в рабочем каталоге ",
  ],
  [
    "01 Измените файл и проиндексируйте изменения",
    "02 Проверьте состояние",
    "03 Выполните сброс буферной зоны",
    "04 Переключитесь на версию коммита",
  ],
  ["01 Просмотрите текущие ветки"],
  ["01 Выполните следующий код"],
];

const itemsHTML = [
  [
    '<p>Давайте добавим репозиторий hello.git к нашему оригинальному репозиторию.</p>\r\n\r\n<h4 class="h4-pre">Выполните:</h4>\r\n\r\n<pre class="instructions">cd hello\r\ngit remote add shared ../hello.git</pre>\r\n\r\n<p style="color:red;"><strong><span class="caps">Примечание</span>: Сейчас мы находимся  в репозитории <ins>hello</ins>.</strong></p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git branch --track style origin/style\ngit branch -a\ngit hist --max-count=2</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git branch --track style origin/style\nBranch style set up to track remote branch style from origin.\n$ git branch -a\n  style\n* master\n  remotes/origin/HEAD -&gt; origin/master\n  remotes/origin/style\n  remotes/origin/master\n$ git hist --max-count=2\n* 2faa4ea 2011-03-09 | Changed README in original repo (HEAD, origin/master, origin/HEAD, master) [Alexander Shvets]\n* 6e6c76a 2011-03-09 | Updated index.html (origin/style, style) [Alexander Shvets]</pre>\n\n<p>Теперь мы можем видеть ветку style в списке веток и логе.</p>',
  ],
  [
    '\n<p>Для пользователей Windows:</p>\n<h4 class="h4-pre">Выполнить:</h4>\n<pre class="instructions">git config --global alias.co checkout\ngit config --global alias.ci commit\ngit config --global alias.st status\ngit config --global alias.br branch\ngit config --global alias.hist "log --pretty=format:\'%h %ad | %s%d [%an]\' --graph --date=short"\ngit config --global alias.type \'cat-file -t\'\ngit config --global alias.dump \'cat-file -p\'</pre>\n\n<p>Также, для пользователей Unix/Mac:</p>\n<p><ins>git status</ins>, <ins>git add</ins>, <ins>git commit</ins>, <ins>git checkout</ins> — общие команды, для которых полезно иметь сокращения.</p>\n\n<p>Добавьте следующее в файл .gitconfig в вашем $<span class="caps">HOME</span> каталоге.</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">.gitconfig</em></h4>\n\n<pre class="file">[alias]\n  co = checkout\n  ci = commit\n  st = status\n  br = branch\n  hist = log --pretty=format:\\"%h %ad | %s%d [%an]\\" --graph --date=short\n  type = cat-file -t\n  dump = cat-file -p</pre>\n\n<p>Мы уже успели рассмотреть команды <code>commit</code> и <code>status</code>, в предыдущем уроке рассмотрели команду <code>log</code> и совсем скоро познакомимся с <code>checkout</code>. Главное, что стоит запомнить из этого урока, так это то, что теперь вы можете вводить <code>git st</code> там, где раньше приходилось использовать <code>git status</code>. Аналогичным образом, пишем <code>git co</code> вместо <code>git checkout</code> и <code>git ci</code> вместо <code>git commit</code>. Что лучше всего, команда <code>git hist</code> позволит избежать ввода очень длинной команды <code>log</code>.</p>\n\n<p>Попробуйте использовать новые команды.</p>\n',
    "\n<p>По большей части, я буду продолжать печатать полные команды в этом руководстве. Единственным исключением будет использование алиаса <code>hist</code>, указанного выше, когда мне понадобится посмотреть git лог. Если вы хотите повторять мои действия, убедитесь, что алиас <code>hist</code> установлен в вашем файле <code>.gitconfig</code>.</p>\n",
    "\n<p>Мы добавили несколько алиасов для команд, которых мы еще не рассматривали. С командой <code>git branch</code> разберемся чуть позже, а команда <code>git cat-file</code> используется для исследования git, в чем мы вскоре убедимся.</p>\n",
    "\n<p>Если ваша оболочка поддерживает алиасы или шорткаты, вы можете добавить алиасы и на этом уровне. Я использую:</p>\n\n<h4 class=\"h4-pre\">Файл: <em style=\"text-transform: none\">.profile</em></h4>\n\n<pre class=\"file\">alias gs='git status '\nalias ga='git add '\nalias gb='git branch '\nalias gc='git commit'\nalias gd='git diff'\nalias gco='git checkout '\nalias gk='gitk --all&amp;'\nalias gx='gitx --all'\n\nalias got='git '\nalias get='git '</pre>\n\n<p>Сокращение <code>gco</code> для команды <code>git checkout</code> особенно полезно. Оно позволяет мне вводить:</p>\n\n<pre class=\"instructions\">gco &lt;branch&gt;</pre>\n\n<p>для переключения в отдельную ветку.</p>\n\n<p>И да, я достаточно часто пишу вместо <code>git</code> <code>get</code> или <code>got</code>, поэтому создам алиасы и для них.</p>",
  ],
  [
    '\n<p>Добавьте в страницу комментарий автора.</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">hello.html</em></h4>\n\n<pre class="file"><strong>&lt;!-- Author: Alexander Shvets --&gt;</strong>\n&lt;html&gt;\n  &lt;head&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add hello.html\ngit commit -m "Add an author comment"</pre>\n',
    '\n<p>После совершения коммита вы понимаете, что любой хороший комментарий должен включать электронную почту автора. Обновите страницу hello, включив в нее email.</p>\n\n<h4 class="h4-pre">Файл: <em  style="text-transform: none">hello.html</em></h4>\n\n<pre class="file"><strong>&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;</strong>\n&lt;html&gt;\n  &lt;head&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n',
    '\n<p>Мы действительно не хотим создавать отдельный коммит только ради электронной почты. Давайте изменим предыдущий коммит, включив в него адрес электронной почты.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add hello.html\ngit commit --amend -m "Add an author/email comment"</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git add hello.html\n$ git commit --amend -m "Add an author/email comment"\n[master 6a78635] Add an author/email comment\n 1 files changed, 2 insertions(+), 1 deletions(-)</pre>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist\n* 6a78635 2011-03-09 | Add an author/email comment (HEAD, master) [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Мы можем увидеть, что оригинальный коммит «автор» заменен коммитом «автор/email». Этого же эффекта можно достичь путем сброса последнего коммита в ветке, и повторного коммита новых изменений.</p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cd ..\ngit clone --bare hello hello.git\nls hello.git</pre>\n\n<p style="color:red;"><strong><span class="caps">Примечание</span>: Сейчас мы находимся в рабочем каталоге</strong></p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git clone --bare hello hello.git\nCloning into bare repository hello.git...\ndone.\n$ ls hello.git\nHEAD\nconfig\ndescription\nhooks\ninfo\nobjects\npacked-refs\nrefs</pre>\n\n<p>Как правило, репозитории, оканчивающиеся на «.git» являются чистыми репозиториями. Мы видим, что в репозитории hello.git нет рабочего каталога. По сути, это есть не что иное, как каталог .git нечистого репозитория.</p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cd ../hello\n# (You should be in the original hello repository now)</pre>\n\n<p style="color:red;"><strong><span class="caps">Примечание</span>: Сейчас мы находимся  в репозитории <em>hello</em> </strong></p>\n\n<p>Внесите следующие изменения в файл <span class="caps">README</span>:</p>\n\n<h4 class="h4-pre">Файл: <em><span class="caps">README</span></em></h4>\n\n<pre class="file">This is the Hello World example from the git tutorial.\n(changed in original)</pre>\n\n<p>Теперь добавьте это изменение и сделайте коммит</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add README\ngit commit -m "Changed README in original repo"</pre>\n',
    "\n<p>Теперь в оригинальном репозитории есть более поздние изменения, которых нет в клонированной версии. Далее мы извлечем и сольем эти изменения в клонированный репозиторий.</p>",
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout master</pre>\n\n<h4 class="h4-pre">Файл: <em><span class="caps">README</span></em></h4>\n\n<pre class="file">This is the Hello World example from the git tutorial.</pre>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add README\ngit commit -m "Added README"</pre>',
  ],
  [
    '\n<p>Измените страницу «Hello, World», чтобы она содержала стандартные теги <code>&lt;html&gt;</code> и <code>&lt;body&gt;</code>.</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">hello.html</em></h4>\n\n<pre class="file"><strong>&lt;html&gt;\n  &lt;body&gt;</strong>\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  <strong>&lt;/body&gt;\n&lt;/html&gt;</strong></pre>\n',
    '\n<p>Теперь добавьте это изменение в индекс git.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add hello.html</pre>\n',
    '\n<p>Теперь добавьте заголовки HTML (секцию <code>&lt;head&gt;</code>) к странице «Hello, World».</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">hello.html</em></h4>\n\n<pre class="file">&lt;html&gt;\n<strong>  &lt;head&gt;\n  &lt;/head&gt;</strong>\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git status</pre>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\n# Changes to be committed:\n#   (use "git reset HEAD &lt;file&gt;..." to unstage)\n#\n#\tmodified:   hello.html\n#\n# Changes not staged for commit:\n#   (use "git add &lt;file&gt;..." to update what will be committed)\n#   (use "git checkout -- &lt;file&gt;..." to discard changes in working directory)\n#\n#\tmodified:   hello.html\n#</pre>\n\n<p>Обратите внимание на то, что <code>hello.html</code> указан дважды в состоянии. Первое изменение (добавление стандартных тегов) проиндексировано и готово к коммиту. Второе изменение (добавление заголовков HTML) является непроиндексированным. Если бы вы делали коммит сейчас, заголовки не были бы сохранены в репозиторий.</p>\n\n<p>Давайте проверим.</p>\n',
    '\n<p>Произведите коммит проиндексированного изменения (значение по умолчанию), а затем еще раз проверьте состояние.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git commit -m "Added standard HTML page tags"\ngit status</pre>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git commit -m "Added standard HTML page tags"\n[master 8c32287] Added standard HTML page tags\n 1 files changed, 3 insertions(+), 1 deletions(-)\n$ git status\n# On branch master\n# Changes not staged for commit:\n#   (use "git add &lt;file&gt;..." to update what will be committed)\n#   (use "git checkout -- &lt;file&gt;..." to discard changes in working directory)\n#\n#\tmodified:   hello.html\n#\nno changes added to commit (use "git add" and/or "git commit -a")</pre>\n\n<p>Состояние команды говорит о том, что <code>hello.html</code> имеет незафиксированные изменения, но уже не в буферной зоне.</p>\n',
    '\n<p>Теперь добавьте второе изменение в индекс, а затем проверьте состояние с помощью команды <code>git status</code>.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add .\ngit status</pre>\n\n<p class="note"><strong>Примечание:</strong> В качестве файла для добавления, мы использовали текущий каталог («.»). Это самый краткий и удобный способ добавления всех изменений в файлы текущего каталога и его подкаталоги. Но поскольку он добавляет все, <em>не лишним</em> будет проверить состояние перед запуском <code>add</code>, просто чтобы убедиться, что вы не добавили какой-то файл, который добавлять было не нужно.</p>\n\n<p class="note">Я хотел показать вам трюк с <code>add</code>, далее мы будем на всякий случай продолжать добавлять явные файлы.</p>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\n# Changes to be committed:\n#   (use "git reset HEAD &lt;file&gt;..." to unstage)\n#\n#\tmodified:   hello.html\n#</pre>\n\n<p>Второе изменение было проиндексировано и готово к коммиту.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git commit -m "Added HTML header"</pre>',
  ],
  [
    '\n<p>Используйте команду <code>git status</code>, чтобы проверить текущее состояние репозитория.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git status</pre>\n\n<p>Вы увидите</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\nnothing to commit (working directory clean)</pre>\n\n<p>Команда проверки состояния сообщит, что коммитить нечего. Это означает, что в репозитории хранится текущее состояние рабочего каталога, и нет никаких изменений, ожидающих записи.</p>\n\n<p>Мы будем использовать команду <code>git status</code>, чтобы продолжать отслеживать состояние репозитория и рабочего каталога.</p>',
  ],
  [
    '\n<p>Перейдите в рабочий каталог и сделайте клон вашего репозитория hello.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cd ..\npwd\nls</pre>\n\n<p style="color:red;"><strong><span class="caps">Примечание</span>: Сейчас мы находимся  в рабочем каталоге.</strong></p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ cd ..\n$ pwd\n/Users/alex/Documents/Presentations/githowto/auto\n$ ls\nhello</pre>\n\n<p>В этот момент вы должны находиться в «рабочем» каталоге. Здесь должен быть единственный репозиторий под названием «hello».</p>\n',
    '\n<p>Давайте создадим клон репозитория.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git clone hello cloned_hello\nls</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git clone hello cloned_hello\nCloning into cloned_hello...\ndone.\n$ ls\ncloned_hello\nhello</pre>\n\n<p>В вашем рабочем каталоге теперь должно быть два репозитория: оригинальный репозиторий «hello» и клонированный репозиторий «cloned_hello»</p>',
  ],
  [
    '\n<p>Достаточно об индексации. Давайте сделаем коммит того, что мы проиндексировали, в репозиторий.</p>\n\n<p>Когда вы ранее использовали <code>git commit</code> для коммита первоначальной версии файла <code>hello.html</code> в репозиторий, вы включили метку <code>-m</code>, которая делает комментарий в командной строке. Команда commit позволит вам интерактивно редактировать комментарии для коммита. Теперь давайте это проверим.</p>\n\n<p>Если вы опустите метку <code>-m</code> из командной строки, git перенесет вас в редактор по вашему выбору. Редактор выбирается из следующего списка (в порядке приоритета):</p>\n\n<ul>\n<li>переменная среды <span class="caps">GIT_EDITOR</span></li>\n<li>параметр конфигурации core.editor</li>\n<li>переменная среды <span class="caps">VISUAL</span></li>\n<li>переменная среды <span class="caps">EDITOR</span></li>\n</ul>\n\n<p>У меня переменная <span class="caps">EDITOR</span> установлена в <code>emacsclient</code> (доступен для Linux и Mac).</p>\n\n<p>Сделайте коммит сейчас и проверьте состояние.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git commit</pre>\n\n<p>Вы увидите в вашем редакторе:</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">|\n# Please enter the commit message for your changes. Lines starting\n# with \'#\' will be ignored, and an empty message aborts the commit.\n# On branch master\n# Changes to be committed:\n#   (use "git reset HEAD &lt;file&gt;..." to unstage)\n#\n#\tmodified:   hello.html\n#</pre>\n\n<p>В первой строке введите комментарий: «Added h1 tag». Сохраните файл и выйдите из редактора (для этого в редакторе по умолчанию (Vim) вам нужно нажать клавишу ESC, ввести <code>:wq</code> и нажать Enter). Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">git commit\nWaiting for Emacs...\n[master 569aa96] Added h1 tag\n 1 files changed, 1 insertions(+), 1 deletions(-)</pre>\n\n<p>Строка «Waiting for Emacs…» получена из программы <code>emacsclient</code>, которая посылает файл в запущенную программу emacs и ждет его закрытия. Остальные выходные данные – стандартные коммит-сообщения.</p>\n',
    '\n<p>В конце давайте еще раз проверим состояние.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git status</pre>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\nnothing to commit (working directory clean)</pre>\n\n<p>Рабочий каталог чистый, можете продолжить работу.</p>',
  ],
  [
    '\n<p>Начните работу в пустом рабочем каталоге (например Work, если вы скачали архив с предыдущего шага) с создания пустого каталога с именем «hello», затем войдите в него и создайте там файл с именем <code>hello.html</code> с таким содержанием.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">mkdir hello\ncd hello\ntouch hello.html</pre>\n\n<!-- have no acess to css, so, this way for right file paths is valid too -->\n<h4 class="h4-pre">Файл: <em style="text-transform: none">hello.html</em></h4>\n\n<pre class="file">Hello, World</pre>\n',
    '\n<p>Теперь у вас есть каталог с одним файлом. Чтобы создать git репозиторий из этого каталога, выполните команду git init.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git init</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git init\nInitialized empty Git repository in /Users/alex/Documents/Presentations/githowto/auto/hello/.git/\n</pre>\n',
    '\n<p>Теперь давайте добавим в репозиторий страницу «Hello, World».</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add hello.html\ngit commit -m "First Commit"</pre>\n\n<p>Вы увидите …</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git add hello.html\n$ git commit -m "First Commit"\n[master (root-commit) 911e8c9] First Commit\n 1 files changed, 1 insertions(+), 0 deletions(-)\n create mode 100644 hello.html</pre>',
  ],
  [
    '\n<p>Давайте назовем нашу новую ветку «style».</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout -b style\ngit status</pre>\n\n<p class="note"><strong><span class="caps">Примечание</span>: </strong><code>git checkout -b &lt;имяветки&gt;</code> является шорткатом для <code>git branch &lt;имяветки&gt;</code> за которым идет <code>git checkout &lt;имяветки&gt;</code>.</p>\n\n<p>Обратите внимание, что команда <code>git status</code> сообщает о том, что вы находитесь в ветке «style».</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">touch lib/style.css</pre>\n\n<h4 class="h4-pre">Файл: <em  style="text-transform: none">lib/style.css</em></h4>\n\n<pre class="file">h1 {\n  color: red;\n}</pre>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add lib/style.css\ngit commit -m "Added css stylesheet"</pre>\n',
    '\n<p>Обновите файл hello.html, чтобы использовать стили style.css.</p>\n\n<h4 class="h4-pre">Файл: <em  style="text-transform: none">lib/hello.html</em></h4>\n\n<pre class="file">&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;\n&lt;html&gt;\n  &lt;head&gt;\n<strong>    &lt;link type="text/css" rel="stylesheet" media="all" href="style.css" /&gt;</strong>\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add lib/hello.html\ngit commit -m "Hello uses style.css"</pre>\n',
    '\n<p>Обновите файл index.html, чтобы он тоже использовал style.css</p>\n\n<h4 class="h4-pre">Файл: <em  style="text-transform: none">index.html</em></h4>\n\n<pre class="file">&lt;html&gt;\n<strong>  &lt;head&gt;\n    &lt;link type="text/css" rel="stylesheet" media="all" href="lib/style.css" /&gt;\n  &lt;/head&gt;</strong>\n  &lt;body&gt;\n    &lt;iframe src="lib/hello.html" width="200" height="200" /&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add index.html\ngit commit -m "Updated index.html"</pre>\n',
    "\n<p>Теперь у нас есть новая ветка под названием <strong>style</strong> с 3 новыми коммитами. Далее мы узнаем, как осуществлять навигацию и переключаться между ветками.</p>",
  ],
  [
    '\n<p>Вернитесь в ветку master и внесите следующие изменения:</p>\n\n<pre class="instructions">git checkout master</pre>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">lib/hello.html</em></h4>\n\n<pre class="file">&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    <strong>&lt;!-- no style --&gt;</strong>\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World! <strong>Life is great!</strong>&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add lib/hello.html\ngit commit -m \'Life is great!\'</pre>\n\n<p><b>Внимание:</b> используйте для этого коммита одинарные кавычки, дабы избежать проблем с символом <code>!</code>. В bash он считается служебным.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist --all\n* 454ec68 2011-03-09 | Life is great! (HEAD, master) [Alexander Shvets]\n| * 5813a3f 2011-03-09 | Merge branch \'master\' into style (style) [Alexander Shvets]\n| |\\  \n| |/  \n|/| \n* | 6c0f848 2011-03-09 | Added README [Alexander Shvets]\n| * 07a2a46 2011-03-09 | Updated index.html [Alexander Shvets]\n| * 649d26c 2011-03-09 | Hello uses style.css [Alexander Shvets]\n| * 1f3cbd2 2011-03-09 | Added css stylesheet [Alexander Shvets]\n|/  \n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>После коммита «Added <span class="caps">README</span>» ветка master была объединена с веткой style, но в настоящее время в master есть дополнительный коммит, который не был  слит с style.</p>\n',
    "\n<p>Последнее изменение в master конфликтует с некоторыми изменениями в style. На следующем шаге мы решим этот конфликт.</p>",
  ],
  [
    '\n<p>Мы можем продемонстрировать, что клонированный файл <span class="caps">README</span> не изменился.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cat README</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ cat README\nThis is the Hello World example from the git tutorial.</pre>\n\n<p>Как видите, никаких изменений.</p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist</pre>\n\n<p class="note"><strong>Примечание:</strong> Вы не забыли задать <code>hist</code> в вашем файле <code>.gitconfig</code>? Если забыли, посмотрите еще раз урок по <a href="/ru/aliases">алиасам</a>.</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist\n* fa3c141 2011-03-09 | Added HTML header (HEAD, master) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Изучите данные лога и найдите хэш для первого коммита. Он должен быть в последней строке данных <code>git hist</code>. Используйте этот хэш-код (достаточно первых 7 знаков) в команде ниже.  Затем проверьте содержимое файла <code>hello.html</code>.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout &lt;hash&gt;\ncat hello.html</pre>\n\n<p class="note"><strong>Примечание:</strong> Многие команды зависят от хэшевых значений в репозитории. Поскольку ваши хеш-значения будут отличаться от моих, когда вы видите что-то вроде <code>&lt;hash&gt;</code> или <code>&lt;treehash&gt;</code> в команде, подставьте необходимое значение хэш для вашего репозитория.</p>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout 911e8c9\nNote: checking out \'911e8c9\'.\n\nYou are in \'detached HEAD\' state. You can look around, make experimental\nchanges and commit them, and you can discard any commits you make in this\nstate without impacting any branches by performing another checkout.\n\nIf you want to create a new branch to retain commits you create, you may\ndo so (now or later) by using -b with the checkout command again. Example:\n\n  git checkout -b new_branch_name\n\nHEAD is now at 911e8c9... First Commit\n$ cat hello.html\nHello, World</pre>\n\n<p>Выходные данные команды <code>checkout</code> очень хорошо объясняют ситуацию. Старые версии git будут ругаться, что не расположены в локальной ветке. В любом случае, сейчас об этом не беспокойтесь.</p>\n\n<p>Обратите внимание на то, что содержимое файла hello.html является значением по умолчанию.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout master\ncat hello.html</pre>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout master\nPrevious HEAD position was 911e8c9... First Commit\nSwitched to branch \'master\'\n$ cat hello.html\n&lt;html&gt;\n  &lt;head&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</pre>\n\n<p>«master» — имя ветки по умолчанию. Переключая имена веток, вы попадаете на последнюю версию выбранной ветки.</p>',
  ],
  [
    '\n<p>Настало время провести небольшое исследование. Для начала, из корневого каталога вашего проекта…</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">ls -C .git</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ ls -C .git\nCOMMIT_EDITMSG\tMERGE_RR\tconfig\t\thooks\t\tinfo\t\tobjects\t\trr-cache\nHEAD\t\tORIG_HEAD\tdescription\tindex\t\tlogs\t\trefs</pre>\n\n<p>Это магический каталог, в котором хранятся все «материалы» git. Давайте заглянем в каталог объектов.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">ls -C .git/objects</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ ls -C .git/objects\n09\t24\t28\t45\t59\t6a\t77\t80\t8c\t97\taf\tc4\te7\tinfo\n11\t27\t43\t56\t69\t6b\t78\t84\t91\t9c\tb5\te4\tfa\tpack</pre>\n\n<p>Вы должны увидеть кучу каталогов, имена которых состоят из 2 символов. Имена каталогов являются первыми двумя буквами хэша sha1 объекта, хранящегося в git.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">ls -C .git/objects/&lt;dir&gt;</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ ls -C .git/objects/09\n6b74c56bfc6b40e754fc0725b8c70b2038b91e\t9fb6f9d3a104feb32fcac22354c4d0e8a182c1</pre>\n\n<p>Смотрим в один из каталогов с именем из 2 букв. Вы увидите файлы с именами из 38 символов. Это файлы, содержащие объекты, хранящиеся в git. Они сжаты и закодированы, поэтому просмотр их содержимого нам мало чем поможет.\nРассмотрим  далее каталог .git внимательно</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cat .git/config</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ cat .git/config\n[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true\n\tignorecase = true\n[user]\n\tname = Alexander Shvets\n\temail = alex@githowto.com</pre>\n\n<p>Это файл конфигурации, создающийся для каждого конкретного проекта. Записи в этом файле будут перезаписывать записи в файле <code>.gitconfig</code> вашего главного каталога, по крайней мере в рамках этого проекта.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">ls .git/refs\nls .git/refs/heads\nls .git/refs/tags\ncat .git/refs/tags/v1</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ ls .git/refs\nheads\ntags\n$ ls .git/refs/heads\nmaster\n$ ls .git/refs/tags\nv1\nv1-beta\n$ cat .git/refs/tags/v1\nfa3c1411aa09441695a9e645d4371e8d749da1dc</pre>\n\n<p>Вы должны узнавать файлы в подкаталоге тегов. Каждый файл соответствует тегу, ранее созданному с помощью команды <code>git tag</code>. Его содержание – это всего лишь хэш коммита, привязанный к тегу.</p>\n\n<p>Каталог <em>heads</em> практически аналогичен, но используется для веток, а не тегов. На данный момент у нас есть только одна ветка, так что все, что вы увидите в этом каталоге – это ветка <em>master</em>.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cat .git/HEAD</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ cat .git/HEAD\nref: refs/heads/master</pre>\n\n<p>Файл <span class="caps">HEAD</span> содержит ссылку на текущую ветку, в данный момент это должна быть ветка master.</p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist --max-count=1</pre>\n\n<p>Эта команда должна показать последний коммит в репозиторий. SHA1 хэш в вашей системе, вероятно, отличается от моего, но вы увидите что-то наподобие этого.</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist --max-count=1\n* 8029c07 2011-03-09 | Added index.html. (HEAD, master) [Alexander Shvets]</pre>\n',
    '\n<p>С помощью SHA1 хэша из коммита,  указанного выше…</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git cat-file -t &lt;hash&gt;\ngit cat-file -p &lt;hash&gt;</pre>\n\n<p>Вот что выходит у меня…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git cat-file -t 8029c07\ncommit\n$ git cat-file -p 8029c07\ntree 096b74c56bfc6b40e754fc0725b8c70b2038b91e\nparent 567948ac55daa723807c0c16e34c76797efbcbed\nauthor Alexander Shvets &lt;alex@githowto.com&gt; 1299684476 -0500\ncommitter Alexander Shvets &lt;alex@githowto.com&gt; 1299684476 -0500\n\nAdded index.html.</pre>\n\n<p class="note"><strong><span class="caps">Примечание</span>:</strong> Если вы задали алиасы «type» и «dump», как описано в <a href="aliases">уроке об алиасах</a>, можете вводить команды <code>git type</code> и <code>git dump</code> вместо длинных команд (которые я никогда не запоминаю).</p>\n\n<p>Это вывод объекта коммита, который находится во главе ветки master.</p>\n',
    '\n<p>Мы можем вывести дерево каталогов, ссылка на который идет в коммите. Это должно быть описание файлов (верхнего уровня) в нашем проекте (для конкретного коммита). Используйте SHA1 хэш из строки «дерева», из списка выше.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git cat-file -p &lt;treehash&gt;</pre>\n\n<p>Вот как выглядит мое дерево…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git cat-file -p 096b74c\n100644 blob 28e0e9d6ea7e25f35ec64a43f569b550e8386f90\tindex.html\n040000 tree e46f374f5b36c6f02fb3e9e922b79044f754d795\tlib</pre>\n\n<p>Да, я вижу index.html и каталог lib.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git cat-file -p &lt;libhash&gt;</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git cat-file -p e46f374\n100644 blob c45f26b6fdc7db6ba779fc4c385d9d24fc12cf72\thello.html</pre>\n\n<p>Существует файл <code>hello.html</code>.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git cat-file -p &lt;hellohash&gt;</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git cat-file -p c45f26b\n&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;\n&lt;html&gt;\n  &lt;head&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<p>А вот и он. Мы вывели объекты коммитов, объекты деревьев и объекты блобов непосредственно из репозитория git. Это все, что есть – блобы, деревья и коммиты.</p>\n',
    "\n<p>Исследуйте git репозиторий вручную самостоятельно. Смотрите, удастся ли вам найти оригинальный файл hello.html с самого первого коммита вручную по ссылкам SHA1 хэша в последнем коммите.</p>",
  ],
  [
    '\n<p>Вы полностью контролируете то, что отображает <code>log</code>. Мне, например, нравится однострочный формат:</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git log --pretty=oneline</pre>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git log --pretty=oneline\nfa3c1411aa09441695a9e645d4371e8d749da1dc Added HTML header\n8c3228730ed03116815a5cc682e8105e7d981928 Added standard HTML page tags\n43628f779cb333dd30d78186499f93638107f70b Added h1 tag\n911e8c91caeab8d30ad16d56746cbd6eef72dc4c First Commit</pre>\n',
    "\n<p>Есть много вариантов выбора, какие элементы отображаются в логе. Поиграйте со следующими параметрами:</p>\n\n<pre class=\"instructions\">git log --pretty=oneline --max-count=2\ngit log --pretty=oneline --since='5 minutes ago'\ngit log --pretty=oneline --until='5 minutes ago'\ngit log --pretty=oneline --author=&lt;your name&gt;\ngit log --pretty=oneline --all</pre>\n\n<p>В unix-системах доступна справочная страница <code>man git log</code>.</p>\n",
    '\n<p>Вот что я использую для просмотра изменений, сделанных за последнюю неделю. Я добавлю <code>--author=alex</code>, если я хочу увидеть только изменения, которые сделал я.</p>\n\n<pre class="instructions">git log --all --pretty=format:"%h %cd %s (%an)" --since=\'7 days ago\'</pre>\n',
    '\n<p>Со временем, я решил, что для большей части моей работы мне подходит следующий формат лога.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short</pre>\n\n<p>Выглядит это примерно так:</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short\n* fa3c141 2011-03-09 | Added HTML header (HEAD, master) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Давайте рассмотрим его в деталях:</p>\n\n<ul>\n<li><code>--pretty="..."</code> — определяет формат вывода.</li>\n<li><code>%h</code> — укороченный хэш коммита</li>\n<li><code>%d</code> — дополнения коммита («головы» веток или теги)</li>\n<li><code>%ad</code> — дата коммита</li>\n<li><code>%s</code> — комментарий</li>\n<li><code>%an</code> — имя автора</li>\n<li><code>--graph</code> — отображает дерево коммитов в виде <span class="caps">ASCII</span>-графика</li>\n<li><code>--date=short</code> — сохраняет формат даты коротким и симпатичным</li>\n</ul>\n\n<p>Таким образом, каждый раз, когда вы захотите посмотреть лог, вам придется много печатать. К счастью, мы узнаем о git алиасах в следующем уроке.</p>\n',
    "\n<p>Оба <code>gitx</code> (для Mac) и <code>gitk</code> (для любой платформы) полезны в изучении истории изменений.</p>",
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions"># (From the work directory)\ngit daemon --verbose --export-all --base-path=.</pre>\n\n<p>Теперь в отдельном окне терминала перейдите в ваш рабочий каталог</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions"># (From the work directory)\ngit clone git://localhost/hello.git network_hello\ncd network_hello\nls</pre>\n\n<p>Вы увидите копию проекта hello.</p>\n',
    "\n<p>Если вы хотите разрешить отправку (<code>push</code>) в репозиторий Git Daemon, добавьте метку <code>--enable=receive-pack</code>  к команде git daemon. Будьте осторожны, этот сервер не производит аутентификацию, поэтому любой сможет отправлять изменения в ваш репозиторий.</p>",
  ],
  [
    '\n<p>Добавим кое-какие HTML-теги к нашему приветствию. Измените содержимое файла на:</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">hello.html</em></h4>\n\n<pre class="file"><strong>&lt;h1&gt;</strong>Hello, World!<strong>&lt;/h1&gt;</strong></pre>\n',
    '\n<p>Теперь проверьте состояние рабочего каталога.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git status</pre>\n\n<p>Вы увидите …</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\n# Changes not staged for commit:\n#   (use "git add &lt;file&gt;..." to update what will be committed)\n#   (use "git checkout -- &lt;file&gt;..." to discard changes in working directory)\n#\n#\tmodified:   hello.html\n#\nno changes added to commit (use "git add" and/or "git commit -a")</pre>\n\n<p>Первое, что нужно заметить, это то, что git знает, что файл <code>hello.html</code> был изменен, но при этом эти изменения еще не зафиксированы в репозитории.</p>\n\n<p>Также обратите внимание на то, что сообщение о состоянии дает вам подсказку о том, что нужно делать дальше. Если вы хотите добавить эти изменения в репозиторий, используйте команду <code>git add</code>. В противном случае используйте команду <code>git сheckout</code> для отмены изменений.</p>\n',
    "\n<p>Давайте проиндексируем изменения.</p>",
  ],
  [
    '\n<p>Слияние переносит изменения из двух веток в одну. Давайте вернемся к ветке style и сольем master с style.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout style\ngit merge master\ngit hist --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout style\nSwitched to branch \'style\'\n$ git merge master\nMerge made by recursive.\n README |    1 +\n 1 files changed, 1 insertions(+), 0 deletions(-)\n create mode 100644 README\n$ git hist --all\n*   5813a3f 2011-03-09 | Merge branch \'master\' into style (HEAD, style) [Alexander Shvets]\n|\\  \n| * 6c0f848 2011-03-09 | Added README (master) [Alexander Shvets]\n* | 07a2a46 2011-03-09 | Updated index.html [Alexander Shvets]\n* | 649d26c 2011-03-09 | Hello uses style.css [Alexander Shvets]\n* | 1f3cbd2 2011-03-09 | Added css stylesheet [Alexander Shvets]\n|/  \n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Путем периодического слияния ветки master с веткой style вы можете переносить из master любые изменения и поддерживать совместимость изменений style с изменениями в основной ветке.</p>\n\n<p>Однако, это делает графики коммитов действительно уродливыми. Позже мы рассмотрим возможность перебазирования, как альтернативы слиянию.</p>\n',
    "\n<p>Но что если изменения в ветке master конфликтуют с изменениями в style?</p>",
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout master\ngit merge style</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout master\nSwitched to branch \'master\'\n$\n$ git merge style\nUpdating 6c0f848..6e6c76a\nFast-forward\n index.html       |    2 +-\n lib/style.css |    8 ++++++++\n lib/hello.html   |    6 ++++--\n 3 files changed, 13 insertions(+), 3 deletions(-)\n create mode 100644 lib/style.css</pre>\n\n<p>Поскольку последний коммит ветки master прямо предшествует последнему коммиту ветки style, git может выполнить ускоренное слияние-перемотку. При быстрой перемотке вперед, git просто передвигает указатель вперед, таким образом указывая на тот же коммит, что и ветка style.</p>\n\n<p>При быстрой перемотке конфликтов быть не может.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist\n* 6e6c76a 2011-03-09 | Updated index.html (HEAD, master, style) [Alexander Shvets]\n* 1436f13 2011-03-09 | Hello uses style.css [Alexander Shvets]\n* 59da9a7 2011-03-09 | Added css stylesheet [Alexander Shvets]\n* 6c0f848 2011-03-09 | Added README [Alexander Shvets]\n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Теперь ветки style и master идентичны.</p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git merge origin/master</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git merge origin/master\nUpdating 6e6c76a..2faa4ea\nFast-forward\n README |    1 +\n 1 files changed, 1 insertions(+), 0 deletions(-)</pre>\n',
    '\n<p>Сейчас мы должны увидеть изменения.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cat README</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ cat README\nThis is the Hello World example from the git tutorial.\n(changed in original)</pre>\n\n<p>Вот и изменения. Хотя команда «git fetch» не сливает изменения, мы можем вручную слить изменения из удаленного репозитория.</p>\n',
    "\n<p>Теперь давайте рассмотрим объединение fetch &amp; merge в одну команду.</p>",
  ],
  [
    '\n<p>Скачайте учебные материалы здесь:</p>\n\n<ul>\n<li><a href="https://raw.githubusercontent.com/yawlad/git_course.github.io/develop/static/files/GIT_Course_Materials.zip" target="_blank" prefetch="0">вот здесь</a></li>\n</ul>\n',
    "\n<p>Пакет учебных материалов должен иметь главную папку «git_tutorial» с двумя подпапками:</p>\n\n<ul>\n<li>work — пустой рабочий каталог.  Здесь будут лежать ваши репозитории.</li>\n<li>files — заранее упакованные файлы для того, чтобы вы могли продолжить работать с учебными материалами на любом этапе.  Если вы застрянете, просто скопируйте нужный урок в свою рабочую папку.</li>\n</ul>",
  ],
  [
    '\n<p>Давайте добавим файл index.html в наш репозиторий. Следующий файл отлично подойдет для этой цели.</p>\n\n<h4 class="h4-pre">Файл: <em  style="text-transform: none">index.html</em></h4>\n\n<pre class="file">&lt;html&gt;\n  &lt;body&gt;\n    &lt;iframe src="lib/hello.html" width="200" height="200" /&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<p>Добавьте файл и сделайте коммит.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add index.html\ngit commit -m "Added index.html."</pre>\n\n<p>Теперь при открытии index.html, вы должны увидеть кусок страницы hello в маленьком окошке.</p>',
  ],
  [
    '\n<p>Сейчас мы собираемся создать структуру нашего репозитория. Давайте перенесем страницу в каталог lib.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">mkdir lib\ngit mv hello.html lib\ngit status</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ mkdir lib\n$ git mv hello.html lib\n$ git status\n# On branch master\n# Changes to be committed:\n#   (use "git reset HEAD &lt;file&gt;..." to unstage)\n#\n#\trenamed:    hello.html -&gt; lib/hello.html\n#</pre>\n\n<p>Перемещая файлы с помощью git, мы информируем git о 2 вещах</p>\n\n<ol>\n<li>Что файл <code>hello.html</code> был удален.</li>\n<li>Что файл <code>lib/hello.html</code> был создан.</li>\n</ol>\n<p>Оба эти факта сразу же проиндексированы и готовы к коммиту. Команда git status сообщает, что файл был перемещен.</p>\n',
    '\n<p>Позитивной чертой git является то, что вы можете забыть о версионном контроле до того момента, когда вы готовы приступить к коммиту кода. Что бы случилось, если бы мы использовали командную строку операционной системы для перемещения файлов вместо команды git?</p>\n\n<p>Оказывается, следующий набор команд идентичен нашим последним действиям. Работы здесь побольше, но результат тот же.</p>\n\n<p class="command"> Мы могли бы выполнить:</p>\n\n<pre class="instructions">mkdir lib\nmv hello.html lib\ngit add lib/hello.html\ngit rm hello.html</pre>\n',
    '\n<p>Давайте сделаем коммит этого перемещения.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git commit -m "Moved hello.html to lib"</pre>',
  ],
  [
    '<p>До сих пор мы работали с одним git репозиторием. Однако, git удается отлично работать с несколькими репозиториями. Эти дополнительные репозитории могут храниться локально, или доступ к ним может осуществляться через сетевое подключение.</p>\r\n\r\n<p>В следующем разделе мы создадим новый репозиторий с именем «cloned_hello». Мы покажем, как перемещать изменения из одного репозитория в другой и как разрешать конфликты, возникающие в результате работы с двумя репозиториями.</p>\r\n\r\n<img src="https://githowto.com/git_clone_ru.png" alt="git_clone" />\r\n\r\n<p>А пока что поработаем с локальными репозиториями (т.е. репозиториями, хранящимися на вашем локальном жестком диске), однако практически все, что вы узнаете в этом разделе, будет применяться к нескольким репозиториям, несмотря на то,  хранятся ли они локально или являются публичными.</p>\r\n\r\n<p><strong><span class="caps">Примечание</span>:</strong>  Мы будем вносить изменения в обе копии наших репозиториев. Обращайте внимание на то, в каком репозитории вы находитесь на каждом шаге в следующих уроках.</p>',
  ],
  [
    '\n<p>Просто используйте команду <code>git checkout</code> для переключения между ветками.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout master\ncat lib/hello.html</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout master\nSwitched to branch \'master\'\n$ cat lib/hello.html\n&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;\n&lt;html&gt;\n  &lt;head&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<p>Сейчас мы находимся  на ветке Master. Это заметно по тому, что файл hello.html не использует стили <code>style.css</code>.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout style\ncat lib/hello.html</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout style\nSwitched to branch \'style\'\n$ cat lib/hello.html\n&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;link type="text/css" rel="stylesheet" media="all" href="style.css" /&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<p>Содержимое <code>lib/hello.html</code> подтверждает, что мы вернулись в ветку <strong>style</strong>.</p>',
  ],
  [
    '\n<p>Мы не собираемся опять проходить весь процесс создания нового изменения и его извлечения, но мы хотим, чтобы вы знали, что выполнение:</p>\r\n\r\n<pre class="instructions">git pull</pre>\r\n\r\n<p>действительно эквивалентно двум следующим шагам:</p>\r\n\r\n<pre class="instructions">git fetch\r\ngit merge origin/master</pre>',
  ],
  [
    '<p>Быстро переключитесь в клонированный репозиторий и извлеките изменения, только что отправленные в общий репозиторий.</p>\r\n\r\n<h4 class="h4-pre">Выполните:</h4>\r\n\r\n<pre class="instructions">cd ../cloned_hello</pre>\r\n\r\n<p style="color:red;"><strong><span class="caps">Примечание</span>: Сейчас мы находимся  в репозитории <em>cloned_hello</em>.</strong></p>\r\n\r\n<p>Продолжите с…</p>\r\n\r\n<h4 class="h4-pre">Выполните:</h4>\r\n\r\n<pre class="instructions">git remote add shared ../hello.git\r\ngit branch --track shared master\r\ngit pull shared master\r\ncat README</pre>',
  ],
  [
    '<p>Так как чистые репозитории, как правило, расшариваются на каком-нибудь сетевом сервере, нам необходимо отправить наши изменения в другие репозитории.</p>\r\n\r\n<p>Начнем с создания изменения для отправки. Отредактируйте файл <span class="caps">README</span> и сделайте коммит</p>\r\n\r\n<h4 class="h4-pre"> Файл: <em><span class="caps"> README </span></em></h4>\r\n\r\n<pre class="file">This is the Hello World example from the git tutorial.\r\n(Changed in the original and pushed to shared)</pre>\r\n\r\n<h4 class="h4-pre">Выполните:</h4>\r\n\r\n<pre class="instructions">git checkout master\r\ngit add README\r\ngit commit -m "Added shared comment to readme"</pre>\r\n\r\n<p>Теперь отправьте изменения в общий репозиторий.</p>\r\n\r\n<h4 class="h4-pre">Выполните:</h4>\r\n\r\n<pre class="instructions">git push shared master</pre>\r\n\r\n<p><em>Общим</em> называется репозиторий, получающий отправленные нами изменения. (Помните, мы добавили его в качестве удаленного репозитория в предыдущем уроке.)</p>\r\n\r\n<h4 class="h4-pre">Результат:</h4>\r\n\r\n<pre class="sample">$ git push shared master\r\nTo ../hello.git\r\n   2faa4ea..79f507c  master -&gt; master</pre>\r\n\r\n<p class="note"><strong><span class="caps">Примечание</span>:</strong>  Мы должны были явно указать ветку master для отправки изменений. Это можно настроить автоматически, но я все время забываю нужные команды. Для более простого управления удаленными ветками переключитесь в «Git Remote Branch».</p>',
  ],
  [
    "\n<p>Конечный результат перебазирования очень похож на результат слияния. Ветка style в настоящее время содержит все свои изменения, а также все изменения ветки master. Однако, дерево коммитов значительно отличается. Дерево коммитов ветки style было переписано таким образом, что ветка master является частью истории коммитов. Это делает цепь коммитов линейной и гораздо более читабельной.</p>\n",
    "\n<p>Не используйте перебазирование …</p>\n\n<ol>\n<li>Если ветка является публичной и расшаренной. Переписывание общих веток будет мешать работе других членов команды.</li>\n<li>Когда важна <em>точная</em> история коммитов ветки (так как команда rebase переписывает историю коммитов).</li>\n</ol>\n<p>Учитывая приведенные выше рекомендации, я предпочитаю использовать rebase для кратковременных, локальных веток, а слияние для веток в публичном репозитории.</p>",
  ],
  [
    "<p>Давайте рассмотрим различия между слиянием и перебазированием. Для того, чтобы это сделать, нам нужно вернуться в репозиторий в момент до первого слияния, а затем повторить те же действия, но с использованием перебазирования вместо слияния.</p>\r\n\r\n<p>Мы будем использовать команду <code>reset</code> для возврата веток к предыдущему состоянию.</p>",
  ],
  [
    '\n<p>Для того, чтобы увидеть все ветки, попробуйте следующую команду:</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git branch -a</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git branch -a\n* master\n  remotes/origin/HEAD -&gt; origin/master\n  remotes/origin/style\n  remotes/origin/master</pre>\n\n<p>Git выводит все коммиты в оригинальный репозиторий, но ветки в удаленном репозитории не рассматриваются как локальные. Если мы хотим иметь собственную ветку <strong>style</strong>, мы должны сами ее создать. Через минуту вы увидите, как это делается.</p>',
  ],
  [
    '\n<p>Тег oops свою функцию выполнил. Давайте удалим его и коммиты, на которые он ссылался, сборщиком мусора.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git tag -d oops\ngit hist --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git tag -d oops\nDeleted tag \'oops\' (was 45fa96b)\n$ git hist --all\n* fa3c141 2011-03-09 | Added HTML header (HEAD, v1, master) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Тег «oops» больше не будет отображаться в репозитории.</p>',
  ],
  [
    '\n<p>Мы уже видели команду <code>reset</code> и использовали ее для согласования буферной зоны и выбранного коммита (мы использовали коммит <span class="caps">HEAD</span> в нашем предыдущем уроке).</p>\n<p>При получении ссылки на коммит (т.е. хэш, ветка или имя тега), команда <code>reset</code>…</p>\n\n<ol>\n<li>Перепишет текущую ветку, чтобы она указывала на нужный коммит</li>\n<li>Опционально сбросит буферную зону для соответствия с указанным коммитом</li>\n<li>Опционально сбросит рабочий каталог для соответствия с указанным коммитом</li>\n</ol>\n',
    '\n<p>Давайте сделаем быструю проверку нашей истории коммитов.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist\n* 45fa96b 2011-03-09 | Revert "Oops, we didn\'t want this commit" (HEAD, master) [Alexander Shvets]\n* 846b90c 2011-03-09 | Oops, we didn\'t want this commit [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Мы видим, что два последних коммита в этой ветке - «Oops» и «Revert Oops». Давайте удалим их с помощью сброса.</p>\n',
    '\n<p>Но прежде чем удалить коммиты, давайте отметим последний коммит тегом, чтобы потом можно было его найти.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git tag oops</pre>\n',
    '\n<p>Глядя на историю лога (см. выше), мы видим, что коммит с тегом «v1» является коммитом, предшествующим ошибочному коммиту. Давайте сбросим ветку до этой точки. Поскольку ветка имеет тег, мы можем использовать имя тега в команде сброса (если она не имеет тега, мы можем использовать хэш-значение).</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git reset --hard v1\ngit hist</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git reset --hard v1\nHEAD is now at fa3c141 Added HTML header\n$ git hist\n* fa3c141 2011-03-09 | Added HTML header (HEAD, v1, master) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Наша ветка master теперь указывает на коммит v1, а коммитов Oops и Revert Oops в ветке уже нет. Параметр <code>--hard</code> указывает, что рабочий каталог должен быть обновлен в соответствии с новым head ветки.</p>',
    '\n<p>Что же случается с ошибочными коммитами? Оказывается, что коммиты все еще находятся в репозитории. На самом деле, мы все еще можем на них ссылаться. Помните, в начале этого урока мы создали для отмененного коммита тег «oops». Давайте посмотрим на <em>все</em> коммиты.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist --all\n* 45fa96b 2011-03-09 | Revert "Oops, we didn\'t want this commit" (oops) [Alexander Shvets]\n* 846b90c 2011-03-09 | Oops, we didn\'t want this commit [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (HEAD, v1, master) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Мы видим, что ошибочные коммиты не исчезли. Они все еще находятся в репозитории. Просто они отсутствуют в ветке <code>master</code>. Если бы мы не отметили их тегами, они по-прежнему находились бы в репозитории, но не было бы никакой возможности ссылаться на них, кроме как при помощи их хэш имен. Коммиты, на которые нет ссылок, остаются в репозитории до тех пор, пока не будет запущен сборщик мусора.</p>\n',
    "\n<p>Сброс в локальных ветках, как правило, безопасен. Последствия любой «аварии» как правило, можно восстановить простым сбросом с помощью нужного коммита.</p>\n\n<p>Однако, если ветка «расшарена» на удаленных репозиториях, сброс может сбить с толку других пользователей ветки.</p>",
  ],
  [
    '\n<p>Давайте вернемся во времени на ветке style к точке <em>перед</em> тем, как мы слили ее с веткой master. Мы можем <strong>сбросить</strong> ветку к любому коммиту. По сути, это изменение указателя ветки на любую точку дерева коммитов.</p>\n\n<p>В этом случае мы хотим вернуться в ветке style в точку перед слиянием с master. Нам необходимо найти последний коммит перед слиянием.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout style\ngit hist</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout style\nAlready on \'style\'\n$ git hist\n*   645c4e6 2011-03-09 | Merged master fixed conflict. (HEAD, style) [Alexander Shvets]\n|\\  \n| * 454ec68 2011-03-09 | Life is great! (master) [Alexander Shvets]\n* |   5813a3f 2011-03-09 | Merge branch \'master\' into style [Alexander Shvets]\n|\\ \\  \n| |/  \n| * 6c0f848 2011-03-09 | Added README [Alexander Shvets]\n* | 07a2a46 2011-03-09 | Updated index.html [Alexander Shvets]\n* | 649d26c 2011-03-09 | Hello uses style.css [Alexander Shvets]\n* | 1f3cbd2 2011-03-09 | Added css stylesheet [Alexander Shvets]\n|/  \n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Это немного трудно читать, но, глядя на данные, мы видим, что коммит «Updated index.html» был последним на ветке style перед слиянием. Давайте сбросим ветку style к этому коммиту.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git reset --hard &lt;hash&gt;</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git reset --hard 07a2a46\nHEAD is now at 07a2a46 Updated index.html</pre>\n',
    '\n<p>Поищите лог ветки style. У нас в истории больше нет коммитов слияний.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist --all\n* 454ec68 2011-03-09 | Life is great! (master) [Alexander Shvets]\n* 6c0f848 2011-03-09 | Added README [Alexander Shvets]\n| * 07a2a46 2011-03-09 | Updated index.html (HEAD, style) [Alexander Shvets]\n| * 649d26c 2011-03-09 | Hello uses style.css [Alexander Shvets]\n| * 1f3cbd2 2011-03-09 | Added css stylesheet [Alexander Shvets]\n|/  \n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>',
  ],
  [
    '\n<p>Добавив интерактивный режим в ветку master, мы внесли изменения, конфликтующие с изменениями в ветке style. Давайте вернемся в ветке master в точку перед внесением конфликтующих изменений. Это позволяет нам продемонстрировать работу команды rebase, не беспокоясь о конфликтах.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout master\ngit hist</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist\n* 454ec68 2011-03-09 | Life is great! (HEAD, master) [Alexander Shvets]\n* 6c0f848 2011-03-09 | Added README [Alexander Shvets]\n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Коммит «Added <span class="caps">README</span>» идет непосредственно перед коммитом конфликтующего интерактивного режима. Мы сбросим ветку master к коммиту «Added <span class="caps">README</span>».</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git reset --hard &lt;hash&gt;\ngit hist --all</pre>\n\n<p>Просмотрите лог. Он должен выглядеть, как будто  репозиторий был перемотан назад во времени к точке до какого-либо слияния.</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git reset --hard 6c0f848\n$ git hist --all\n* 6c0f848 2011-03-09 | Added README (HEAD, master) [Alexander Shvets]\n| * 07a2a46 2011-03-09 | Updated index.html (style) [Alexander Shvets]\n| * 649d26c 2011-03-09 | Hello uses style.css [Alexander Shvets]\n| * 1f3cbd2 2011-03-09 | Added css stylesheet [Alexander Shvets]\n|/  \n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>',
  ],
  [
    '\n<p>Теперь вернемся к ветке style и попытаемся объединить ее с новой веткой master.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout style\ngit merge master</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout style\nSwitched to branch \'style\'\n$ git merge master\nAuto-merging lib/hello.html\nCONFLICT (content): Merge conflict in lib/hello.html\nAutomatic merge failed; fix conflicts and then commit the result.</pre>\n\n<p>Если вы откроете lib/hello.html, вы увидите:</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">lib/hello.html</em></h4>\n\n<pre class="file">&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;\n&lt;html&gt;\n  &lt;head&gt;\n&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD\n    &lt;link type="text/css" rel="stylesheet" media="all" href="style.css" /&gt;\n=======\n    &lt;!-- no style --&gt;\n&gt;&gt;&gt;&gt;&gt;&gt;&gt; master\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello,World! Life is great!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</pre>\n\n<p>Первый раздел - версия во главе текущей ветки (style). Второй раздел - версия ветки master.</p>\n',
    '\n<p>Вам необходимо вручную разрешить конфликт. Внесите изменения в  <code>lib/hello.html</code> для достижения следующего результата.</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">lib/hello.html</em></h4>\n\n<pre class="file">&lt;!-- Author: Alexander Shvets (alex@githowto.com) --&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;link type="text/css" rel="stylesheet" media="all" href="style.css" /&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World! Life is great!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add lib/hello.html\ngit commit -m "Merged master fixed conflict."</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git add lib/hello.html\n$ git commit -m "Merged master fixed conflict."\nRecorded resolution for \'lib/hello.html\'.\n[style 645c4e6] Merged master fixed conflict.</pre>\n',
    '\n<p>Git не предоставляет никаких графических инструментов слияния, но будет с удовольствием работать с любыми сторонними инструментами слияния, которые вы хотите использовать (<a href="http://stackoverflow.com/questions/137102/whats-the-best-visual-merge-tool-for-git">обсуждение таких инструментов на StackOverflow</a>).</p>',
  ],
  [
    '\n<p>Давайте взглянем на клонированный репозиторий.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">cd cloned_hello\nls</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ cd cloned_hello\n$ ls\nREADME\nindex.html\nlib</pre>\n\n<p>Вы увидите список всех файлов на верхнем уровне оригинального репозитория <code>README</code>, <code>index.html</code> и <code>lib</code>).</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist --all\n* 6e6c76a 2011-03-09 | Updated index.html (HEAD, origin/master, origin/style, origin/HEAD, master) [Alexander Shvets]\n* 1436f13 2011-03-09 | Hello uses style.css [Alexander Shvets]\n* 59da9a7 2011-03-09 | Added css stylesheet [Alexander Shvets]\n* 6c0f848 2011-03-09 | Added README [Alexander Shvets]\n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Вы увидите список всех коммитов в новый репозиторий, и он должен (более или менее) совпадать с историей коммитов в оригинальном репозитории. Единственная разница должна быть в названиях веток.</p>\n',
    '\n<p>Вы увидите ветку <strong>master</strong> (<strong><span class="caps">HEAD</span></strong>) в списке истории. Вы также увидите ветки со странными именами (<strong>origin/master</strong>, <strong>origin/style</strong> и <strong>origin/<span class="caps">HEAD</span></strong>). Мы поговорим о них чуть позже.</p>',
  ],
  [
    '\n<p>Если вы никогда ранее не использовали git, для начала вам необходимо осуществить установку. Выполните следующие команды, чтобы git узнал ваше имя и электронную почту. Если git уже установлен, можете переходить к разделу <a href="http://ru.wikipedia.org/wiki/Перевод_строки">окончания строк</a>.</p>\n\n<h4 class="h4-pre">Выполнить:</h4>\n\n<pre class="instructions">git config --global user.name "Your Name"\ngit config --global user.email "your_email@whatever.com"</pre>\n',
    '\n<p>Для пользователей Unix/Mac:</p>\n\n<h4 class="h4-pre">Выполнить:</h4>\n\n<pre class="instructions">git config --global core.autocrlf input\ngit config --global core.safecrlf warn</pre>\n\n<p>Для пользователей Windows:</p>\n\n<h4 class="h4-pre">Выполнить:</h4>\n\n<pre class="instructions">git config --global core.autocrlf true\ngit config --global core.safecrlf warn</pre>\n\n',
    '\n<p>По умолчанию, git будет печатать не-<a href="https://unicode-table.com/ru/#basic-latin">ASCII символы</a> в именах файлов в виде восьмеричных последовательностей <code>\\nnn</code>. Чтобы избежать нечитаемых строк, установите соответствующий флаг:</p>\n\n<pre class="instructions">git config --global core.quotepath off</pre>',
  ],
  [
    "<p>Посмотрите, запущен ли git daemon у вашего соседа. Обменяйтесь IP-адресами и проверьте, сможете ли вы извлекать изменения из репозиториев друг друга.</p>",
  ],
  [
    '<p>Отдельный шаг индексации в git позволяет вам продолжать вносить изменения в рабочий каталог, а затем, в момент, когда вы захотите взаимодействовать с версионным контролем, git позволит записать изменения в малых коммитах, которые фиксируют то, что вы сделали.</p>\r\n\r\n<p>Предположим, что вы отредактировали три файла (<code>a.html</code>, <code>b.html</code>, и <code>c.html</code>). Теперь вы хотите закоммитить все изменения, при этом чтобы изменения в <code>a.html</code> и <code>b.html</code> были одним коммитом, в то время как изменения в <code>c.html</code> логически не связаны с первыми двумя файлами и должны идти отдельным коммитом.</p>\r\n\r\n<p>В теории, вы можете сделать следующее:</p>\r\n\r\n<pre class="instructions">git add a.html\r\ngit add b.html\r\ngit commit -m "Changes for a and b"</pre>\r\n\r\n<pre class="instructions">git add c.html\r\ngit commit -m "Unrelated change to c"</pre>\r\n\r\n<p>Разделяя индексацию и коммит, вы имеете возможность с легкостью настроить, что идет в какой коммит.</p>',
  ],
  [
    '\n<p>Теперь дайте команду git проиндексировать изменения. Проверьте состояние</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add hello.html\ngit status</pre>\n\n<p>Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git add hello.html\n$ git status\n# On branch master\n# Changes to be committed:\n#   (use "git reset HEAD &lt;file&gt;..." to unstage)\n#\n#\tmodified:   hello.html\n#</pre>\n\n<p>Изменения файла <code>hello.html</code> были проиндексированы. Это означает, что git теперь знает об изменении, но изменение пока не <em>перманентно</em> (читай, <em>навсегда</em>) записано в репозиторий. Следующий коммит будет включать в себя проиндексированные изменения.</p>\n\n<p>Если вы решили, что <em>не</em> хотите коммитить изменения, команда состояния напомнит вам о том, что с помощью команды <code>git reset</code> можно снять индексацию этих изменений.</p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git tag v1</pre>\n\n<p>Теперь текущая версия страницы называется <em>v1</em>.</p>\n',
    '\n<p>Давайте создадим тег для версии, которая идет перед текущей версией и назовем его <em>v1-beta</em>. В первую очередь нам надо переключиться на предыдущую версию. Вместо поиска по хэшу, мы будем использовать <code>^</code>, обозначающее «родитель v1».</p>\n\n<p class="note">Если обозначение <code>v1^</code> вызывает у вас какие-то проблемы, попробуйте также <code>v1~1</code>, указывающее на ту же версию.  Это обозначение можно определить как «первую версию предшествующую v1».</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout v1^\ncat hello.html</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout v1^\nNote: checking out \'v1^\'.\n\nYou are in \'detached HEAD\' state. You can look around, make experimental\nchanges and commit them, and you can discard any commits you make in this\nstate without impacting any branches by performing another checkout.\n\nIf you want to create a new branch to retain commits you create, you may\ndo so (now or later) by using -b with the checkout command again. Example:\n\n  git checkout -b new_branch_name\n\nHEAD is now at 8c32287... Added standard HTML page tags\n$ cat hello.html\n&lt;html&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<p>Это версия c тегами <code>&lt;html&gt;</code> и <code>&lt;body&gt;</code>, но еще <em>пока</em> без  <code>&lt;head&gt;</code>. Давайте сделаем ее версией <em>v1-beta</em>.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git tag v1-beta</pre>\n',
    '\n<p>Теперь попробуйте попереключаться между двумя отмеченными версиями.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout v1\ngit checkout v1-beta</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout v1\nPrevious HEAD position was 8c32287... Added standard HTML page tags\nHEAD is now at fa3c141... Added HTML header\n$ git checkout v1-beta\nPrevious HEAD position was fa3c141... Added HTML header\nHEAD is now at 8c32287... Added standard HTML page tags</pre>\n',
    '\n<p>Вы можете увидеть, какие теги доступны, используя команду <code>git tag</code>.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git tag</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git tag\nv1\nv1-beta</pre>\n',
    '\n<p>Вы также можете посмотреть теги в логе.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist master --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist master --all\n* fa3c141 2011-03-09 | Added HTML header (v1, master) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (HEAD, v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Вы можете видеть теги (<code>v1</code> и <code>v1-beta</code>) в логе вместе с именем ветки (<code>master</code>). Кроме того <code>HEAD</code> показывает коммит, на который вы переключились (на данный момент это <code>v1-beta</code>).</p>',
  ],
  [
    "\n<p>Иногда вы понимаете, что новые коммиты являются неверными, и хотите их отменить. Есть несколько способов решения этого вопроса, здесь мы будем использовать самый безопасный.</p>\n\n<p>Мы отменим коммит путем создания нового коммита, отменяющего нежелательные изменения.</p>\n",
    '\n<p>Измените файл <code>hello.html</code> на следующий.</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">hello.html</em></h4>\n\n<pre class="file">&lt;html&gt;\n  &lt;head&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n    <strong>&lt;!-- This is an unwanted but committed change --&gt;</strong>\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add hello.html\ngit commit -m "Oops, we didn\'t want this commit"</pre>\n',
    '\n<p>Чтобы отменить коммит, нам необходимо сделать коммит, который удаляет изменения, сохраненные нежелательным коммитом.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git revert HEAD</pre>\n\n<p>Перейдите в редактор, где вы можете отредактировать коммит-сообщение по умолчанию или оставить все как есть. Сохраните и закройте файл. Вы увидите…</p>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git revert HEAD --no-edit\n[master 45fa96b] Revert "Oops, we didn\'t want this commit"\n 1 files changed, 1 insertions(+), 1 deletions(-)</pre>\n\n<p>Так как мы отменили самый последний произведенный коммит, мы смогли использовать <code>HEAD</code> в качестве аргумента для отмены. Мы можем отменить любой произвольной коммит в истории, указав его хэш-значение.</p>\n\n<p class="note"><strong>Примечание:</strong> Команду <code>--no-edit</code> можно проигнорировать. Она была необходима для генерации выходных данных без открытия редактора.</p>\n',
    '\n<p>Проверка лога показывает нежелательные и отмененные коммиты в наш репозиторий.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist\n* 45fa96b 2011-03-09 | Revert "Oops, we didn\'t want this commit" (HEAD, master) [Alexander Shvets]\n* 846b90c 2011-03-09 | Oops, we didn\'t want this commit [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Эта техника будет работать с любым коммитом (хотя, возможно, возникнут конфликты). Она безопасна в использовании даже в публичных ветках удаленных репозиториев.</p>\n',
    "\n<p>Далее давайте посмотрим на технику, которая может быть использована для удаления последних коммитов из истории репозитория.</p>",
  ],
  [
    '\n<p>Убедитесь, что вы находитесь на последнем коммите ветки master, прежде чем продолжить работу.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout master</pre>\n',
    '\n<p>Иногда случается, что вы изменили файл в рабочем каталоге, и хотите отменить последние коммиты. С этим справится команда <code>checkout</code>.</p>\n\n<p>Внесите изменение в файл hello.html в виде нежелательного комментария.</p>\n\n<h4 class="h4-pre">Файл: <em style="text-transform: none">hello.html</em></h4>\n\n<pre class="file">&lt;html&gt;\n  &lt;head&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n    <strong>&lt;!-- This is a bad comment.  We want to revert it. --&gt;</strong>\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n',
    '\n<p>Сначала проверьте состояние рабочего каталога.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git status</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\n# Changes not staged for commit:\n#   (use "git add &lt;file&gt;..." to update what will be committed)\n#   (use "git checkout -- &lt;file&gt;..." to discard changes in working directory)\n#\n#\tmodified:   hello.html\n#\nno changes added to commit (use "git add" and/or "git commit -a")</pre>\n\n<p>Мы видим, что файл <code>hello.html</code> был изменен, но еще не проиндексирован.</p>\n',
    '\n<p>Используйте команду <code>checkout</code> для переключения в версию файла <code>hello.html</code> в репозитории.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout hello.html\ngit status\ncat hello.html</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git checkout hello.html\n$ git status\n# On branch master\nnothing to commit (working directory clean)\n$ cat hello.html\n&lt;html&gt;\n<strong>  &lt;head&gt;\n  &lt;/head&gt;</strong>\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<p>Команда <code>status</code> показывает нам, что не было произведено никаких изменений, не зафиксированных в рабочем каталоге. И «нежелательный комментарий» больше не является частью содержимого файла.</p>',
  ],
  [
    '\n<p>Внесите изменение в файл <code>hello.html</code> в виде нежелательного комментария</p>\n\n<h4 class="h4-pre">Файл: <em>hello.html</em></h4>\n\n<pre class="file">&lt;html&gt;\n  &lt;head&gt;\n    <strong>&lt;!-- This is an unwanted but staged comment --&gt;</strong>\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;h1&gt;Hello, World!&lt;/h1&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</pre>\n\n<p>Проиндексируйте это изменение.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git add hello.html</pre>\n',
    '\n<p>Проверьте состояние нежелательного изменения.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git status</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\n# Changes to be committed:\n#   (use "git reset HEAD &lt;file&gt;..." to unstage)\n#\n#\tmodified:   hello.html\n#</pre>\n\n<p>Состояние показывает, что изменение было проиндексировано и готово к коммиту.</p>\n',
    '\n<p>К счастью, вывод состояния показывает нам именно то, что мы должны сделать для отмены индексации изменения.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git reset HEAD hello.html</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git reset HEAD hello.html\nUnstaged changes after reset:\nM\thello.html</pre>\n\n<p>Команда <code>reset</code> сбрасывает буферную зону к <span class="caps">HEAD</span>. Это очищает буферную зону от изменений, которые мы только что проиндексировали.</p>\n\n<p>Команда <code>reset</code> (по умолчанию) не изменяет рабочий каталог. Поэтому рабочий каталог все еще содержит нежелательный комментарий. Мы можем использовать команду <code>checkout</code> из предыдущего урока, чтобы удалить нежелательные изменения в рабочем каталоге.</p>\n',
    '\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git checkout hello.html\ngit status</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git status\n# On branch master\nnothing to commit (working directory clean)</pre>\n\n<p>Наш рабочий каталог опять чист.</p>',
  ],
  [
    '\n<p>Теперь у нас в репозитории есть две отличающиеся ветки. Используйте следующую лог-команду для просмотра веток и их отличий.</p>\n\n<h4 class="h4-pre">Выполните:</h4>\n\n<pre class="instructions">git hist --all</pre>\n\n<h4 class="h4-pre">Результат:</h4>\n\n<pre class="sample">$ git hist --all\n* 6c0f848 2011-03-09 | Added README (HEAD, master) [Alexander Shvets]\n| * 07a2a46 2011-03-09 | Updated index.html (style) [Alexander Shvets]\n| * 649d26c 2011-03-09 | Hello uses style.css [Alexander Shvets]\n| * 1f3cbd2 2011-03-09 | Added css stylesheet [Alexander Shvets]\n|/\n* 8029c07 2011-03-09 | Added index.html. [Alexander Shvets]\n* 567948a 2011-03-09 | Moved hello.html to lib [Alexander Shvets]\n* 6a78635 2011-03-09 | Add an author/email comment [Alexander Shvets]\n* fa3c141 2011-03-09 | Added HTML header (v1) [Alexander Shvets]\n* 8c32287 2011-03-09 | Added standard HTML page tags (v1-beta) [Alexander Shvets]\n* 43628f7 2011-03-09 | Added h1 tag [Alexander Shvets]\n* 911e8c9 2011-03-09 | First Commit [Alexander Shvets]</pre>\n\n<p>Это наша первая возможность увидеть в действии <code>--graph</code> в <code>git hist</code>. Добавление опции <code>--graph</code> в <code>git log</code> вызывает построение дерева коммитов с помощью простых <span class="caps">ASCII</span> символов. Мы видим обе ветки (style и master), и то, что ветка master является текущей <span class="caps">HEAD</span>. Общим предшественником обеих веток является коммит «Added index.html».</p>\n\n<p>Метка <code>--all</code> гарантированно означает, что мы видим все ветки. По умолчанию показывается только текущая ветка.</p>',
  ],
  [
    '\n<h4 class="h4-pre">Выполните:</h4>\r\n\r\n<pre class="instructions">git remote</pre>\r\n\r\n<h4 class="h4-pre">Результат:</h4>\r\n\r\n<pre class="sample">$ git remote\r\norigin</pre>\r\n\r\n<p>Мы видим, что клонированный репозиторий знает об имени по умолчанию удаленного репозитория. Давайте посмотрим, можем ли мы получить более подробную информацию об имени по умолчанию:</p>\r\n\r\n<h4 class="h4-pre">Выполните:</h4>\r\n\r\n<pre class="instructions">git remote show origin</pre>\r\n\r\n<h4 class="h4-pre">Результат:</h4>\r\n\r\n<pre class="sample">$ git remote show origin\r\n* remote origin\r\n  Fetch URL: /Users/alex/Documents/Presentations/githowto/auto/hello\r\n  Push  URL: /Users/alex/Documents/Presentations/githowto/auto/hello\r\n  HEAD branch (remote HEAD is ambiguous, may be one of the following):\r\n    style\r\n    master\r\n  Remote branches:\r\n    style  tracked\r\n    master tracked\r\n  Local branch configured for \'git pull\':\r\n    master merges with remote master\r\n  Local ref configured for \'git push\':\r\n    master pushes to master (up to date)</pre>\r\n\r\n<p>Мы видим, что «имя по умолчанию»(«origin») удаленного репозитория – оригинальное <strong>hello</strong>. Удаленные репозитории обычно размещаются на отдельной машине, возможно, централизованном сервере. Однако, как мы видим здесь,  они могут с тем же успехом указывать на репозиторий на той же машине. Нет ничего особенного в имени «origin», однако существует традиция  использовать «origin» в качестве имени первичного централизованного репозитория (если таковой имеется).</p>',
  ],
];

function formatPages(){
  for(let page of PAGES){
    for(let stage of page.stages) {
    
        let searchStr = "Alexander Shvets";
        let searchStr2 = "alex";
        let searchStr3 = "@githowto.com";
        let replaceStr = "Vladislav";
        let replaceStr2 = "Vladislav";
        let replaceStr3 = "@gmail.com";
        stage.itemsHTML = stage.itemsHTML.replace(new RegExp(searchStr, "g"), replaceStr);
        stage.itemsHTML = stage.itemsHTML.replace(new RegExp(searchStr2, "g"), replaceStr2);
        stage.itemsHTML = stage.itemsHTML.replace(new RegExp(searchStr3, "g"), replaceStr3);

    }
  }
}

const PAGES = createPages();
formatPages();
let current_id = 0;