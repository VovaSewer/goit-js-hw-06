
const numberInputEl = document.querySelector("input[type='number']");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("div#boxes");

function onCreateBtnClickHandler() {
  createBoxes(numberInputEl.value);
}

function onDestroyBtnClickHandler() {
  destroyBoxes();
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    const boxElSize = (30 + 10 * i) + 'px';
    boxEl.style.width = boxElSize;
    boxEl.style.height = boxElSize;
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesEl.append(boxEl);
  }
}

function destroyBoxes(boxes) {
  boxesEl.innerHTML = "";
}

createBtnEl.addEventListener("click", onCreateBtnClickHandler);
destroyBtnEl.addEventListener("click", onDestroyBtnClickHandler);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.


// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.