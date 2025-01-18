document.getElementById('formButton').addEventListener('click', function(event) {
    //garnate que a pagina nao seja recarregada
    event.preventDefault();
    //pega o valor do form
    let input = document.getElementById('form').elements[0].value;

    let div = document.getElementById('saida');
    div.innerHTML = ''; // Clear previous content
       
    
    let output = document.createElement('p');
    output.textContent = frazeMaluca(input);
    

    div.appendChild(output);
});

function frazeMaluca(input){
    let output = '';
    //verifica se é um numeor (numa deve acontecer)
    if(isNaN(input)){
        return 'O valor informado não é um número';
    }

    //verufuca se o numero é interio
    if(!Number.isInteger(input)){
        return 'O valor informado não é um número inteiro';
    }

    if(input % 3 == 0){
        output = 'fizz';
    }
    if(input % 5 == 0){
        output += 'buzz';
    }
    return output;
}