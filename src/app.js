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

function findIndexById(id) {
    for(let i = 0; i < cidades.length; i++) {
        if (cidades[i].id === Number(id)) {
            return i;
        }
    }
    return -1;
}

app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo a Home!');
});

app.get('/cidades', (req, res) => {
    // Define o cabeçalho HTTP de resposta com status 200 e tipo de conteúdo
    res.status(200)
        // Envia a lista de cidades em formato JSON
        .json(cidades);
});

app.get('/cidades/:id', (req, res) => {
    if(cidades[findIndexById(req.params.id)]){
        res.status(200).json(cidades[findIndexById(req.params.id)]);
    }else {
        res.status(404).send('Cidade não encontrada');
    }
});

app.post('/cidades', (req, res) => {
    if (!req.body.nome) {
        return res.status(400).send('O nome da cidade é obrigatório');
    }
    cidades.push({ id: cidades.length + 1, nome: req.body.nome });
    res.status(201).send(`A cidade ${req.body.nome} foi adicionado com sucesso`);
});

app.put('/cidades/:id', (req, res) => {
    if (findIndexById(req.params.id) < 0) {
        return res.status(404).send('Cidade não encontrada');
    }
    if (!req.body.nome) {
        return res.status(400).send('O nome da cidade é obrigatório');
    }
    let msg = `O nome da cidade ${cidades[findIndexById(req.params.id)].nome} foi alterada para ${req.body.nome}`;
    cidades[findIndexById(req.params.id)].nome = req.body.nome;
    res.status(200).send(msg);
});

app.delete('/cidades/:id', (req, res) => {
    if (findIndexById(req.params.id) < 0) {
        return res.status(404).send('Cidade não encontrada');
    }
    let cidade = cidades[findIndexById(req.params.id)];
    cidades.splice(findIndexById(req.params.id), 1);
    res.status(200).send(`A cidade ${cidade.nome} foi removida com sucesso`);
});


export default app;