document.getElementById('formButton').addEventListener('click', function(event) {
    //garnate que a pagina nao seja recarregada
    event.preventDefault();
    //pega o valor do form
    let input = document.getElementById('form').elements[0].value;

    let lista = [input];

    let div = document.getElementById('saida');
    div.innerHTML = ''; // Clear previous content

    let output = document.createElement('p');
    output.textContent = fibonacci(lista);

    div.appendChild(output);
});

//sequencia de fibonacci
function fibonacci(n) {
    if (n[0] <= 1) {
        n.push(n[0]);
        return n
    }
    let nr = n.slice();
    nr[0] = nr[0] - 1;

    let nl = n.slice();
    nl[0] = nl[0] - 2;
    
    n.push(fibonacci(nr) + fibonacci(nl));
    return n;
}

