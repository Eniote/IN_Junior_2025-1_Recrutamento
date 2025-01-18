document.getElementById("execute").addEventListener("click", executeFunction);


function executeFunction(a, b, c) {
    var delta = b*b - 4*a*c;
    var output = "";

    switch (true) {
        case (delta > 0):
            var x1 = (-b + Math.sqrt(delta)) / (2*a);
            var x2 = (-b - Math.sqrt(delta)) / (2*a);
            output += "X1: " + x1 + "\nX2: " + x2;
            break;
        case (delta == 0):
            var x1 = -b / (2*a);
            output += "X1: " + x1;
            break;
        case (delta < 0):
            return "A função não possui raízes reais.";	
    }

    return output;
}

