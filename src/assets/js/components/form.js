let form = document.querySelector('#form');
let inputForm = document.querySelectorAll('._rq');
let inputFormTel = document.querySelector('._rq-tel');
let sending = document.querySelector('.form__sending');
let success = document.querySelector('.form__success');
let err = document.querySelector('.form__err');
let minSymbol = 3;
let minTel = 16;
form.addEventListener('submit', formSend);
let error = 0;

async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
    if (error === validationErr(e)) {
        sending.classList.add('_load');
        let response = await fetch('form.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            sending.classList.remove('_load');
            success.classList.add('_success');
            inputFormTel.value = '';
            inputForm.forEach(input => {
                input.value = '';
            })
            setTimeout(e => success.classList.remove('_success'), 2000)
        } else {
            sending.classList.remove('_load');
            err.classList.add('_err');
            inputForm.forEach(input => {
                input.value = '';
            })
            inputFormTel.value = '';
            setTimeout(e => err.classList.remove('_err'), 2000)
        }
    } else {

    }
}

function validationErr(e) {
    let err = 0;

    for (let i = 0; i < inputForm.length; i++) {
        if (inputForm[i].value.length < minSymbol) {
            inputForm[i].classList.add('_rq-err')
            err++
        } else {
            inputForm[i].classList.remove('_rq-err')
        }

    }
    if (inputFormTel.value.length < minTel) {
        inputFormTel.classList.add('_rq-err')
        err++
    } else {
        inputFormTel.classList.remove('_rq-err')
    }
    return err
}

