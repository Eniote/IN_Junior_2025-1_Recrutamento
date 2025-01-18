const State = {
    NUMERO: 0,
    RESPOSTA: 1,
    FIM: 2
};

let state = State.NUMERO;

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

function numberInput(num) {
    let promEl = document.getElementById("prompt");
    let respEl = document.getElementById("resposta");

    if (isNaN(num)) {
        promEl.textContent = "Você digitou uma string, digite um número";
        return State.NUMERO;
    }

    if (num < 0) {
        promEl.textContent = "Digite um número maior que 0";
    } else {
        respEl.textContent = "O fatorial de " + num + " é " + factorial(num);
    }
    return State.RESPOSTA;
}

function stringInput(response) {
    let promEl = document.getElementById("prompt");
    promEl.textContent = "Gostaria de calcular um novo fatorial? Responda S para sim e N para não:";

    switch (response.toLowerCase()) {
        case "s":
            return State.NUMERO;
        case "n":
            return State.FIM;
        default:
            promEl.textContent = "Resposta inválida. Responda S para sim e N para não:";
            return State.RESPOSTA;
    }
}

function executeFunction(input) {
    switch (state) {
        case State.NUMERO:
            state = numberInput(input);
            toggleForms();
            break;
        case State.RESPOSTA:
            state = stringInput(input);
            toggleForms();
            break;
        default:
            state = State.FIM;
            break;
    }
}

function toggleForms() {
    const numberForm = document.getElementById("numberForm");
    const stringForm = document.getElementById("stringForm");
    const promptEl = document.getElementById("prompt");

    if (state === State.NUMERO) {
        numberForm.style.display = "block";
        stringForm.style.display = "none";
        promptEl.textContent = "Digite um numero inteiro positivo para receber o seu fatorial";
        document.getElementById("num").value = "";
    } else if (state === State.RESPOSTA) {
        numberForm.style.display = "none";
        stringForm.style.display = "block";
        promptEl.textContent = "Gostaria de calcular um novo fatorial? Responda S para sim e N para não:";
        document.getElementById("response").value = "";
    }
}

document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let num = parseInt(document.getElementById("num").value);
    executeFunction(num);
});

document.getElementById("stringForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let response = document.getElementById("response").value;
    executeFunction(response);
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        if (state === State.NUMERO) {
            document.getElementById("numberForm").dispatchEvent(new Event("submit"));
        } else if (state === State.RESPOSTA) {
            document.getElementById("stringForm").dispatchEvent(new Event("submit"));
        }
    }
});