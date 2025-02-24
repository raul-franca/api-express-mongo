# API RESTful com Node.js, Express.js e MongoDB 🚀

Esta API demonstra conceitos essenciais de desenvolvimento, incluindo o padrão de arquitetura MVC, validação de dados e tratamento de erros, além de implementar operações CRUD utilizando Node.js, Express.js e MongoDB.  

# Qual problema ela aborda? 🧐

Imagine que você precisa saber qual a distância entre duas cidades, fazer um cálculo do valor do frete e uma previsão do tempo para entrega. Logo temos: f( remetente, destinatario ) = { distância, valor estimado, previsão do tempo }
E agora como é que eu resolvo isso? 🤔
f( remetente, destinatario ) = { distância , valor estimado , previsão do tempo }
=   f( de,para) = { distância , valor, tempo }

1) de, para: só pelo nome da cidade não é suficiente, precisamos saber qual o estado(uf) e da localização geográfica. latitude e longitude.
   -**entidade Cidade**
   Cidade = { nome, uf, lat, long }

        -1 nome, uf: o usuário pode informar o nome da cidade e o estado.
        -2 lat, long: a API vai busacr usando uma API externa, como o Google Maps.

2) distância: precisamos saber a distância entre as cidades.
   Com as coordenadas (latitude e longitude) em mãos, podemos usar a **fórmula de Haversine** para calcular a **distância "em linha reta"** (distância ortodrômica) entre os dois pontos na superfície da Terra. que para o momento ja é suficiente.
   🚧Continue aqui 🚧 

---

## Funcionalidades ✨
- **Rotas RESTful:** Operações CRUD básicas.
- **Arquitetura MVC:** Estrutura organizada e modular para melhor manutenção e escalabilidade.
- **Integração com MongoDB:** Gerenciada via Mongoose.
- **Validação e Tratamento de Erros:** Garantia de integridade dos dados e respostas claras em caso de falhas.

## Instalação 📦

1. **Clone o repositório:**
```bash
   git clone https://github.com/raul-franca/api-express-mongo
```
2. **Acesse o diretório do projeto:**
```bash
   cd api-express-mongodb

```

3. **Instale as dependências:**
```bash
   npm install
```

4. **Inicie o servidor:**
```bash
   npm start
```
5. **Acesse a API em:**
```bash
   http://localhost:3000
```

# Estrutura de Pastas 📁
- `src/`
  - `models/` - Modelos de dados.
  - `services/` - Lógica de negócio.
  - `controllers/` - Gerenciamento de requisições e respostas.
  - `routes/` - Definição das rotas da API.
  - `docs/` - Notas e documentação de desenvolvimento.
  - `package.json` - Gerenciamento de dependências e scripts.

# Contribuição 🤝
Contribuições são bem-vindas! Faça um fork deste repositório, implemente suas alterações e envie um pull request com suas melhorias. Vamos juntos construir algo incrível! 🚀

