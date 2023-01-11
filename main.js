var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
  // A constante dirname retorna o diretório raiz da aplicação.
  if (request.url == "/") {
    fs.readFile(__dirname + "/artigos.html", function (err, html) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }else if(request.url == "/contato"){
    fs.readFile(__dirname + "/contato.html", function (err, html) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
      });
  }else{
    fs.readFile(__dirname + "/erro.html", function (err, html) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
      });
  }
});
server.listen(3000, function () {
  console.log("Executando Site Pessoal");
});
