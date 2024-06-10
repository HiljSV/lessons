/*


Задача №1
Отримати в константу елемент <body>

Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений.

Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки

Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний


*/

// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body;
// console.log(bodyElement);

//------------------------------------------------------------

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)

//Перший варіант

const page = document.querySelector(".page");

function addList(parentElement, elementCount = 5) {
  // Проверка на наличие ключевого элемента внутри функции.
  // Если его нет, то можно спокойно выходить из функции.
  if (!parentElement) return;
  // А тут уже продолжение кода

  let elementList = ``;

  for (let i = 1; i <= elementCount; ++i) {
    elementList += `<li>Item №${i}</li>`;
  }
  const list = `<ul>${elementList}</ul>`;
  parentElement.insertAdjacentHTML("afterbegin", list);
}

addList(page, 12);

// Другий варіант

// const page = document.querySelector(".page");

// function addList(parentElement, elementCount = 5) {
//   if (!parentElement) return;

//   const list = document.createElement("ul");
//   for (let i = 1; i <= elementCount; ++i) {
//     const elementList = document.createElement("li");
//     elementList.textContent = `Item №${i}`;
//     list.append(elementList);
//   }
//   parentElement.prepend(list);
// }

// addList(page, 8);

//-----------------------------------------------------------

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зедлений.

bodyElement.classList.add("loaded");
if (bodyElement.classList.contains("loaded")) {
  bodyElement.style.color = "green";
}

//-------------------------------------------------------------

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const elements = document.querySelectorAll(".item");
if (elements.length) {
  elements.forEach((element, index) => {
    element.classList.add("active");
    element.textContent = `Елемент №${index + 1}`;
  });
}

//---------------------------------------------------------------

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

const buttonElement = document.querySelector(".button");
function scrollToElement(element) {
  if (element) {
    element.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
  }
}

scrollToElement(buttonElement);

//-------------------------------------------------------------------

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

const link = document.querySelector(".link");
if (link) {
  link.setAttribute("data-value", "100");
}
let value = link.dataset.value;
if (value < 200) {
  link.style.color = "red";
}