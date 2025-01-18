function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

function executeFunction(num) {
    let promEl = document.getElementById("prompt");
    let respEl = document.getElementById("resposta");

    if (isNaN(num)) {
        promEl.textContent = "Você digitou uma string, digite um número";
        return;
    }

    if (num < 0) {
        promEl.textContent = "Digite um número maior que 0";
    } else {
        respEl.textContent = "O fatorial de " + num + " é " + factorial(num);
        promEl.textContent = "Gostaria de calcular um novo fatorial? Responda S para sim e N para não:";
    }
    
}


document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let num = parseInt(document.getElementById("num").value);
    executeFunction(num);
});