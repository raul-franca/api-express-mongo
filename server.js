import http from "http";

    // Define a porta e o host para o servidor ouvinte
    const PORT = 3000;
    const HOST = "localhost";

    const rotas = {
        "/": "Bem-vindo a Home!",
        "/sobre": "Página Sobre",
        "/contato": "Página de Contato"
    }

    //Cria um servidor HTTP
    const server = http.createServer((req, res) => {
        // Define o cabeçalho HTTP de resposta com status 200 e tipo de conteúdo
        res.writeHead(200, { "Content-Type": "text/plain" });

        // Verifica se a URL existe no objeto rotas
        const mensagem = rotas[req.url] || "404 - Página não encontrada";

        // Envia a resposta de volta ao cliente
        res.end(mensagem);

    });


    // O servidor ouve na porta e host especificados
    server.listen(PORT, HOST, () => {
        console.log(`Server running at http://${HOST}:${PORT}`);
    });
