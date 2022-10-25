const form = document.getElementById('form-valid');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const A = document.getElementById('valueA');
    const B = document.getElementById('valueB');
    const mensagemSucesso = `Seu formulário é VÁLIDO, pois o valor <b>${B.value}</b> é MAIOR que o valor <b>${A.value}</b>`
    const mensagemNegativa = `Seu formulário é INVÁLIDO, pois o valor <b>${B.value}</b> é MENOR que o valor <b>${A.value}</b>`
    const msgNegativa = document.querySelector('.msgNegativa')
    const msgSucesso = document.querySelector('.msgSucesso')

    formEValido = B.value > A.value

    if (formEValido) {
        document.querySelector('.msgSucesso').innerHTML = mensagemSucesso;
        msgSucesso.style.display = 'block';
        msgNegativa.style.display = 'none';
    } else {
        document.querySelector('.msgNegativa').innerHTML = mensagemNegativa;
        msgNegativa.style.display = 'block';
        msgSucesso.style.display = 'none';
    }

    A.value = ' ';
    B.value = ' ';

})

console.log(form);