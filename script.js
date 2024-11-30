document.getElementById("lead-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
});

document.getElementById("telefone").addEventListener("input", function (event) {
    let input = event.target;
    input.value = formatPhoneNumber(input.value);
});

document.getElementById("telefone-mobile").addEventListener("input", function (event) {
    let input = event.target;
    input.value = formatPhoneNumber(input.value);
});

function formatPhoneNumber(value) {
    value = value.replace(/\D/g, ""); // Remove qualquer caractere que não seja dígito
    
    if (value.length > 11) {
        value = value.slice(0, 11); // Limita o valor a 11 dígitos
    }
    
    if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses no DDD
    }
    
    if (value.length > 8) {
        value = value.replace(/(\d{5})(\d{4})$/, "$1-$2"); // Adiciona o traço entre os últimos quatro dígitos
    }

    return value;
}

// Botão para abrir o modal no tablet e mobile
document.getElementById("mobile-signup-btn").addEventListener("click", function () {
    const modal = document.getElementById("mobile-form-modal");
    modal.classList.remove("hidden"); // Mostra o modal do formulário
});

// Botão para fechar o modal no tablet e mobile
document.getElementById("close-modal-btn").addEventListener("click", function () {
    const modal = document.getElementById("mobile-form-modal");
    modal.classList.add("hidden"); // Esconde o modal do formulário
});

// Submissão do formulário no modal mobile
document.getElementById("mobile-lead-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulário enviado com sucesso!");
});
