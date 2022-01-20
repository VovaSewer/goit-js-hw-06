const validationRef = document.querySelector('#validation-input')

function handleValidation(event){
    if (event.target.value.length === Number(validationRef.getAttribute('data-length')))
    {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
}

validationRef.addEventListener('blur', handleValidation)