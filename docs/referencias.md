# Criar o servidor

1) Crie um arquivo chamado `server.js` na raiz do projeto.
2) Adicione o seguinte código ao arquivo `server.js`:

```javascript
    const http = require("http");

    const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello World!");
    });
    
    server.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
```
3) Abra o terminal e execute o comando `node server.js`.

http é a biblioteca nativa do Node.js para criar servidores HTTP.
createServer() é um método que cria um servidor HTTP.
req(requisição) é um objeto que contém informações sobre a requisição feita pelo cliente.
res(resposta) é um objeto que contém métodos para enviar a resposta ao cliente.
writeHead() é um método que define o cabeçalho da resposta.
end() é um método que envia a resposta ao cliente.  
listen() é um método que faz o servidor escutar em uma porta específica.