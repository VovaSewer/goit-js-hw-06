
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
console.log(valueEl);

let counterValueText = 0;

incrementBtn.addEventListener('click', event => {
    console.log('Click on increment');
    counterValueText += 1;
    valueEl.textContent = counterValueText;
});

decrementBtn.addEventListener('click', event => {
    console.log('Click on decrement');
    counterValueText -= 1;
    valueEl.textContent = counterValueText;
});


