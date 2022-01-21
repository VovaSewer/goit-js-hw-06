
const listRef = document.querySelector('#categories');
const itemRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemRef.length}`);


itemRef.forEach(node => {
    const title = node.firstElementChild.textContent;
    const item = node.lastElementChild.children.length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${item}`);
});
