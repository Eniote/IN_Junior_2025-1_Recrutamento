// Elementos html
const promEl = document.getElementById('prompt');
const outEl = document.getElementById('saida');

//fatoria
function fatorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * fatorial(num - 1);
}
  

document.getElementById('numButton').addEventListener('click', function(event) {
    //garante que a pagina nao seja recarregada
    event.preventDefault();
    //verifica se o valor do formulario é um numero e se é positivo
    let num = document.getElementById('numberForm').elements[0].value;
    if (isNaN(num) || num < 0) {
        outEl.textContent = "Digite um número válido";
        return;
    }
    //faz fatorial do numero
    outEl.textContent = fatorial(num);
    

    //some com o form numberForm e fas o form stringForm aparecer
    document.getElementById('numberForm').style.display = 'none';
    document.getElementById('stringForm').style.display = 'block';
    //esvasia a caixa de testo
    document.getElementById('stringForm').reset();
    promEl.textContent = "Quer continuar? (s/n):";
});

document.getElementById('stringButton').addEventListener('click', function(event) {
    //faz a mesma coisa que o de cima mas ao contrario
    event.preventDefault(event);
    //pega a respota do formulario e verifica se é sim ou nao
    let resp = document.getElementById('stringForm').elements[0].value;
    //deixa a entrada em lower case
    resp = resp.toLowerCase();
    if (resp === 's') {
        document.getElementById('stringForm').style.display = 'none';
        document.getElementById('numberForm').style.display = 'block';
        document.getElementById('numberForm').reset();
        promEl.textContent = "Digite um número:";
    } else if(resp === 'n') {
        document.getElementById('stringForm').style.display = 'none';
        document.getElementById('numberForm').style.display = 'none';
        promEl.textContent = "Fim";
        //limpa a resposta
        outEl.textContent = "";
    }else{
        outEl.textContent = "Digite uma resposta válida";
        //limpa a caixa de texto
        document.getElementById('stringForm').reset();

    }
    //Muda o prompt para o proximo formulario
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        if (document.getElementById('numberForm').style.display === 'block') {
            document.getElementById("numberForm").dispatchEvent(new Event("submit"));
        } else if (document.getElementById('stringForm').style.display === 'block') {
            document.getElementById("stringForm").dispatchEvent(new Event("submit"));
        }
    }
});