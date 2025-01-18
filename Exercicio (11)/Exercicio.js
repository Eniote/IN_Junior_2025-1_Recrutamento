document.getElementById('formButton').addEventListener('click', function(event) {
    //garnate que a pagina nao seja recarregada
    event.preventDefault();
    //pega o valor do form
    let input = document.getElementById('form').elements[0].value;


    let div = document.getElementById('saida');
    div.innerHTML = ''; // Clear previous content

    let output = document.createElement('p');

    div.appendChild(output);
});


