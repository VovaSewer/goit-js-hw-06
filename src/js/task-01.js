
const listCategoriesEl = document.querySelectorAll('ul#categories li.item');
const numberOfCategoriesEl = listCategoriesEl.length;
console.log(`Number of categories: ${numberOfCategoriesEl}`);

for (let i = 0; i < numberOfCategoriesEl; i += 1){
const headerEl = listCategoriesEl[i].firstElementChild.textContent;
console.log(`Category: ${headerEl}`);

const elementsEl = listCategoriesEl[i].lastElementChild;
const allElementsEl = elementsEl.querySelectorAll('li');
console.log(`Elements: ${allElementsEl.length}`);
}