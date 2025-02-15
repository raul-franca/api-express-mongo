# Referências
# Express
# Criar o servidor Express

1) Instale o Express com o comando `npm install express`.
2) Crie um arquivo chamado `server.js` na raiz do projeto.
3) Adicione o seguinte código ao arquivo `server.js`:

```javascript
    const express = require("express");
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
```
**require()** é uma função que importa um módulo.
**express** é um módulo que facilita a criação de servidores HTTP.
**app** é um objeto que contém métodos para criar rotas.
**get()** é um método que cria uma rota do tipo GET.
**post()** é um método que cria uma rota do tipo POST.
**send()** é um método que envia uma resposta ao cliente.

---
# Node.js
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

**Ex:** server-exemplo.js

4) Abra o terminal e execute o comando `node server.js`.

**http** é a biblioteca nativa do Node.js para criar servidores HTTP.
**createServer()** é um método que cria um servidor HTTP.
**req(requisição)** é um objeto que contém informações sobre a requisição feita pelo cliente.
**res(resposta)** é um objeto que contém métodos para enviar a resposta ao cliente.
**writeHead()** é um método que define o cabeçalho da resposta.
**end()** é um método que envia a resposta ao cliente.
**listen()** é um método que faz o servidor escutar em uma porta específica.

