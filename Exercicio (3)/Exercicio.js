document.getElementById('formButton').addEventListener('click', function(event) {
    //garnate que a pagina nao seja recarregada
    event.preventDefault();
    //inicialisa uma lista de anos
    let anoAtual = document.getElementById('form').elements[0].value;

    let listaAnos = [1999, 2013, 1998, 2020, 2005, 1965, 2010];

    let isAdult = verificarIdade(listaAnos, anoAtual);

    let div = document.getElementById('saida');
    div.innerHTML = ''; // Clear previous content
    for (let i = 0; i < isAdult.length; i++) {
        let li = document.createElement('li');
        li.textContent = "Pessoa " + (i + 1) + ": " + isAdult[i] + " de idade";
        div.appendChild(li);
    }

});

function verificarIdade(lista, anoAtual){
    //lista de output
    let idades = [];
    let output = [];

    

    lista.forEach(e => {
        idades.push(anoAtual- e);
        if(anoAtual - e >= 18){
            output.push("Maior");
        }else{
            output.push("Menor");
        }
    });
    return output;
}