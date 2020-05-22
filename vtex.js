var http = require('http');
var fs = require('fs');
var url = require('url');



var server = http.createServer(function (request, response) {



 console.log( 
   
  fs.readFileSync('src/templates/SA-home.html', 'utf8')
  .replace('<vtex:template id="SA-teste" />','teste')
 
 )


});

server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});