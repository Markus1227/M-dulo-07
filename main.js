
const form = document.getElementById('form-exercício');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = document.getElementById('valor-A').value;
    const valorB = document.getElementById('valor-B').value;
    

    const numA = Number(valorA);
    const numB = Number(valorB);

    
    if (numB > numA) {
        mensagem.textContent = (`Tudo certo! O valor B: ${numB} é maior que o valor A: ${numA}.`);
        mensagem.style.color = "green";
        valorA.value = '';
        valorB.value = '';
    } else {
        mensagem.textContent = (`Erro! O valor B: ${numB} deve ser maior que o valor A: ${numA}.`);
        mensagem.style.color = "red";
    }
});
