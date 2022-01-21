
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
console.log(valueEl);

let counterValue = 0;

incrementBtn.addEventListener('click', event => {
    console.log('Click on increment');
    counterValue += 1;
    valueEl.textContent = counterValue;
});

decrementBtn.addEventListener('click', event =>  {
    console.log('Click on decrement');
    counterValue -= 1;
    valueEl.textContent = counterValue;
});


