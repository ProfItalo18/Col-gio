
// Adiciona um evento ao formulário para prevenir o envio padrão e exibir uma mensagem de sucesso
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
