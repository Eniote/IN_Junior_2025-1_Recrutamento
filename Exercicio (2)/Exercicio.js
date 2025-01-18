document.getElementById("execute").addEventListener("click", executeFunction);

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

function executeFunction(num) {
    let promEl = document.getElementById("prompt");
    let respEl = document.getElementById("resposta");
    let formLabEl = document.getElementById("formLabel");
    let formImpEl = document.getElementById("num");


    do {
        if (num < 0) {
            promEl.textContent = "Digite um número maior que 0";
        }else{
            respEl.textContent = "O fatorial de " + num + " é " + factorial(num);
            promEl.textContent = "Gostaria de calcular um novo fatorial?";
            formLabEl.textContent = "Responda S para sim e N para não:";
            formImpEl.setAttribute("type", "String");
        }
    } while (false);

    return;
}


