var http = require('http'),
    fs = require('fs')
    parser = require('./parser_var.js'),
    p = parser.parse_vars;

http.createServer(function(req, res) {
    fs.readFile('./form.html', function(err, html){
        var html_string= html.toString();

        var respuesta = p(req),
        parametros = respuesta['parametros'],
        valores =respuesta['valores'];

        for(var i=0; i<=parametros.length; i++){
            var html_string = html_string.replace('{'+parametros[i]+'}', valores[i]);
        }

        res.writeHead(200, {'Content-type': 'text'});
        res.write(html_string);
        res.end();

    });
}).listen(8080);