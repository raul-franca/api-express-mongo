import express from "express";
import cidade from "./models/cidade.js";
import fetch from "node-fetch";


// Criação de uma instância do express
const app = express();
// Configuração do express para receber JSON
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Bem-vindo a Home!');
});

app.get('/cidades', async (req, res) => {
    try {
        const cidades = await cidade.find();
        res.status(200).send(cidades);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }

});

app.get('/cidades/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const cidades = await cidade.findById(id);

        if (!cidades) {
            res.status(404).send('Cidade não encontrada');
        }
        else {
            res.status(200).json(cidades);
        }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.post('/cidades', async (req, res) => {
    // validar req.body com Joi
    try {
        const addCidade = new cidade(req.body);
        const saveCidade = await addCidade.save();
        res.status(201).send(saveCidade);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.put('/cidades/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const updateCidade = await cidade.findByIdAndUpdate(id, req.body, {new: true});
        if (!updateCidade) {
            res.status(404).send('Cidade não encontrada');
        }
        res.status(200).send(updateCidade);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.delete('/cidades/:id', (req, res) => {
    try {
        const {id} = req.params;
        const deleteCidade = cidade.findByIdAndDelete(id);
        if (!deleteCidade) {
            res.status(404).send('Cidade não encontrada');
        }
        res.status(200).send(`Cidade deletada com sucesso!`);
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.get('/cidades/coordenadas/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const cidades = await cidade.findById(id);

        if (!cidades) {
            res.status(404).send('Cidade não encontrada');
        }
        else {
            const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cidades.nome)}&state=${encodeURIComponent(cidades.uf)}&format=json`;

            const response = await fetch(url, {
                headers: {
                  'User-Agent': 'Node.js Application'  // Nominatim exige que o User-Agent seja especificado
                }
            });
            const data = await response.json();
            if (data && data.length > 0) {
                res.status(200).json(data);
            }
        }
    }
    catch (err) {
        res.status(500).send({ message: err.message });
    }




});




export default app;