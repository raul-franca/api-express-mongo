import express from "express";

// Criação de uma instância do express
const app = express();
// Configuração do express para receber JSON
app.use(express.json());

const cidades = [
    { id: 1, nome: 'São Paulo' },
    { id: 2, nome: 'Rio de Janeiro' },
    { id: 3, nome: 'Belo Horizonte' },
    { id: 4, nome: 'Salvador' },
    { id: 5, nome: 'Porto Alegre' },
    { id: 6, nome: 'Curitiba' },
    { id: 7, nome: 'Recife' },
    { id: 8, nome: 'Fortaleza' },
]

app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo a Home!');
});

// Definição de uma rota get para /cidades
app.get('/cidades', (req, res) => {
    // Define o cabeçalho HTTP de resposta com status 200 e tipo de conteúdo
    res.status(200)
        // Envia a lista de cidades em formato JSON
        .json(cidades);
});

// Definição de uma rota get para /cidades/:id
app.get('/cidades/:id', (req, res) => {
    console.log("Requisição recebida: ", req.params);
    // Extrai o parâmetro id da URL
    const id = req.params.id;
    // Busca a cidade pelo id
    const cidade = cidades.find(c => c.id === Number(id));

    // Se a cidade não for encontrada, retorna status 404
    if (!cidade) {
        return res.status(404).send('Cidade não encontrada');
    }

    // Retorna a cidade encontrada
    res.status(200).json(cidade);
});

// Definição de uma rota post para /cidades
app.post('/cidades', (req, res) => {
    console.log("Requisição recebida: ", req.body);
    cidades.push(req.body);
    res.status(201).send('Cidade adicionada com sucesso');
});

// Definição de uma rota put para /cidades/:id
app.put('/cidades/:id', (req, res) => {
    console.log("Requisição recebida: ", req.body);
    const id = req.params.id;
    const index = cidades.findIndex(c => c.id === Number(id));
    if (index < 0) {
        return res.status(404).send('Cidade não encontrada');
    }
    cidades[index] = req.body;
    res.status(200).send('Cidade atualizada com sucesso');
});

// Definição de uma rota delete para /cidades/:id
app.delete('/cidades/:id', (req, res) => {
    console.log("Requisição recebida: ", req.params);
    const id = req.params.id;
    const index = cidades.findIndex(c => c.id === Number(id));
    if (index < 0) {
        return res.status(404).send('Cidade não encontrada');
    }
    cidades.splice(index, 1);
    res.status(204).send('Cidade removida com sucesso');
});


export default app;