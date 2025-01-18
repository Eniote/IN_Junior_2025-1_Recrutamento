document.getElementById('formButton').addEventListener('click', function(event) {
    //garnate que a pagina nao seja recarregada
    event.preventDefault();
    //pega o valor do form
    let reais = document.getElementById('form').elements[0].value;

    let div = document.getElementById('saida');
    div.innerHTML = ''; // Clear previous content
        
    let reaisEl = document.createElement('h4');
    let dolarEl = document.createElement('li');
    let euroEl = document.createElement('li');

    reaisEl.textContent = "R$ " + parseFloat(reais).toFixed(2) + " valem:";
    dolarEl.textContent = "Dolar: " + convertTo(reais, 5.70).toFixed(2);
    euroEl.textContent = "Euro: " + convertTo(reais, 6.10).toFixed(2);

    div.appendChild(reaisEl);
    div.appendChild(dolarEl);
    div.appendChild(euroEl);
});

//converte reais para qualquer modeda
function convertTo(reais, cambio){
    return reais / cambio;
}