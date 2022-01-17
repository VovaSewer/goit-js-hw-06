
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function handleInput (){
    inputRef.value === '' ? outputRef.textContent = 'Anonymous' : outputRef.textContent = inputRef.value;

    // if (inputRef.value === ''){
    //     return outputRef.textContent = 'Anonymous';
    // }
    // return outputRef.textContent = inputRef.value;
}

inputRef.addEventListener('input', handleInput);





// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>