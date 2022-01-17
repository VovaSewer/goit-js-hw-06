
const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

function handleChangeSize (event){
    return spanRef.style.fontSize = event.target.value + 'px';
}

inputRef.addEventListener('input', handleChangeSize);