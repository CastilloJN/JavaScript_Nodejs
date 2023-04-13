function parse_vars(req) {
    var arreglo_parametros = [];
    var parametros = [];
    var valores = [];
    var res_param = 'resultado';
    var simbolo_param = 'simbolo';

    if (req.url.indexOf('?') > 0) {
        var url_data = req.url.split('?');
        arreglo_parametros = url_data[1].split('&');
    }
    for (i = 0; i < arreglo_parametros.length; i++) {
        var parametro = arreglo_parametros[i];
        var param_data = parametro.split('=');
        parametros[i] = param_data[0];
        valores[i] = param_data[1];
    }
    for (a = 0; a < 1; a++) {
        console.log(parametros);
        if (parametros[a] === 'operacion') {
            console.log('entro');
            if (valores[a] === 'suma') {
                let sumaNumeros = 0;
                let numStr = '';
                for (b = a + 1; b < valores.length; b++) {
                    const temp = parseInt(valores[b]);
                    // Sumar el número a la variable sumaNumeros
                    sumaNumeros += temp;
                    numStr = sumaNumeros.toString();
                }
                parametros.push(res_param, simbolo_param);
                valores.push(numStr,"+");
            }
            else if (valores[a] === 'resta') {
                
                let restaNumeros = 0;
                let numStr = '';
                const temp = parseInt(valores[a+1]);
                restaNumeros = temp - parseInt(valores[a+2]);
                numStr = restaNumeros.toString();
                parametros.push(res_param, simbolo_param);
                valores.push(numStr,"-");
            }
            else if (valores[a] === 'multiplicacion') {
                
                let restaNumeros = 0;
                let numStr = '';
                const temp = parseInt(valores[a+1]);
                restaNumeros = temp * parseInt(valores[a+2]);
                numStr = restaNumeros.toString();
                parametros.push(res_param, simbolo_param);
                valores.push(numStr,"*");
            }
            else if (valores[a] === 'division') {
                
                let restaNumeros = 0;
                let numStr = '';
                const temp = parseInt(valores[a+1]);
                restaNumeros = temp / parseInt(valores[a+2]);
                numStr = restaNumeros.toString();
                parametros.push(res_param, simbolo_param);
                valores.push(numStr,"/");
            }

        } else {

        }
    }
    
    return {
        parametros: parametros,
        valores: valores
    }
}

module.exports.parse_vars = parse_vars;
