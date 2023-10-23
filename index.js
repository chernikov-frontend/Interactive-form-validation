const form = document.querySelector('form');
const inputArray = document.querySelectorAll('input');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRetype = document.getElementById('password-retype');

form.addEventListener('submit', event => {
// Проверка поля имя
    if (name.value === '') {
        if (!name.classList.contains('error')) {
            name.classList.add('error');
            name.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form-control__error">
                    Поле 'Имя' обязательно для заполнения
                </div>`
		);
    }

    event.preventDefault();
    }
// Проверка поля Email
    if (emailTest(email) || email.value === '') {
        if (!email.classList.contains('error')) {
            email.classList.add('error');
            email.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form-control__error">
                    Введите корректный адрес электронной почты
                </div>`
            );
        }

    event.preventDefault();
    }
// Проверка поля пароль
    if (password.value === '' || password.value.length < 6) {
        if (!password.classList.contains('error')) {
            password.classList.add('error');
            password.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form-control__error">
                    Поле 'Пароль' должно содержать не менее 6 символов
                </div>`
            );
        }

    event.preventDefault();
    }
// Проверка поля повтор пароля
    if (passwordRetype.value !== password.value) {
        if (!passwordRetype.classList.contains('error')) {
            passwordRetype.classList.add('error');
            passwordRetype.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form-control__error">
                    Пароли не совпадают
                </div>`
            );
        }

    event.preventDefault();
    }

    if (!passwordRetype.classList.contains('error') && !password.classList.contains('error') && !email.classList.contains('error') && !name.classList.contains('error')) {
        alert("Успешная регистрация")
    }
});

// удаление поля error
inputArray.forEach(element => {
    element.addEventListener("focus", event => {
        if (element.nextElementSibling) {
            element.nextElementSibling.remove();
            element.classList.remove('error');
        }
    });
});

// Функция теста email
function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

ПРОВЕРКА СВЯЗКИ

