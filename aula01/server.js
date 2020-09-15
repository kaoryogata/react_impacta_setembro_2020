//requisitar o modulo http do Node.js
const http = require('http');

//criar a função genérica que vai responder as requisições do servidor
const tratarRespostaDaRequisicao = function(requisicao, resposta){
    resposta.writeHead(200, {'Content-Type' : 'text/html'});
    resposta.write("<h1>Meu Primeiro Servidor Web em Node.js<h1>");
}

//Executa a funcao createServer do http que espera um tratamento de
// requisicao/resposta e devolve um servidor
const server = http.createServer(tratarRespostaDaRequisicao);

//executa o servidor na porta 3000 e notifica no console qd o servidor terminar de subir
server.listen(4000, function(){
    console.log('Servidor no ar na porta 3000');
})