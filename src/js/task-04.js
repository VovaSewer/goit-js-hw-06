
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
console.log(valueEl);

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    }
}

incrementBtn.addEventListener('click', function() {
    console.log('Click on increment');
    counter.increment();
    valueEl.textContent = counter.value;
});

decrementBtn.addEventListener('click', function() {
    console.log('Click on decrement');
    counter.decrement();
    valueEl.textContent = counter.value;
});


