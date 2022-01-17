
// Напиши скрипт управления формой логина.
// 1. Обработка отправки формы form.login-form должна быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const refs = {
    form: document.querySelector('.login-form'),
}

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    console.log(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail ==='' || password === '') {
        alert ('Заполни все поля перед отправкой')
    }

    const formData = {
        mail,
        password,
    }
    console.log(formData);
    refs.form.reset();
}

refs.form.addEventListener('submit', onFormSubmit);