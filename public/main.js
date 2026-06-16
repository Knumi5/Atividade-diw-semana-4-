const form = document.getElementById('form-pesquisa');
const termo = document.getElementById('termo');
const categoria = document.getElementById('categoria');
const tema = document.getElementById('tema');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let erro = '';

    if (!termo.value.trim()) {
        erro = 'Por favor, digite um termo de pesquisa.';
    }

    if (!categoria.value) {
        erro = 'Por favor, selecione uma categoria.';
    }

    if (!tema.value) {
        erro = 'Por favor, selecione um tema.';
    }

    if (erro) {
        alert(erro);
        return;
    }

    form.submit();
});

const formNewsletter = document.getElementById('form-newsletter');
const consentimento = document.getElementById('consentimento');

formNewsletter.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!consentimento.checked) {
        alert('Por favor, aceite receber newsletters para continuar.');
        return;
    }

    formNewsletter.submit();
});