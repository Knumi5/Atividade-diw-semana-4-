// validation.js (ou dentro de <script> no HTML)

const form = document.getElementById('form-pesquisa');
const termo = document.getElementById('termo');
const categoria = document.getElementById('categoria');
const tema = document.getElementById('tema');

form.addEventListener('submit', function(event) {
    // Previne envio se houver erro
    event.preventDefault();
    
    let erro = '';
    
    // Validação: termo obrigatório
    if (!termo.value.trim()) {
        erro = 'Por favor, digite um termo de pesquisa.';
    }
    
    // Validação: categoria obrigatória
    if (!categoria.value) {
        erro = 'Por favor, selecione uma categoria.';
    }
    
    // Validação: tema obrigatório
    if (!tema.value) {
        erro = 'Por favor, selecione um tema.';
    }
    
    // Se tem erro, mostra e não envia
    if (erro) {
        alert(erro);
        return;
    }
    
    // Se tudo OK, envia o formulário
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