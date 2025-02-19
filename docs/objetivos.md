# O Principal objetivo deste projeto é uma EX/referência para a criação de APIs RESTful com node.js e express.js e MongoDB.

Criar uma API RESTful simples para demonstrar conceitos importantes do Node.js, Express.js e MongoDB.
- **Boas Práticas**
- **Padra de Projeto MVC**
- **Tratamento de Erros**
- **Validação de Dados**
- **Testes**
- **Documentação**
- **Deploy**
- dentre outros.

## O que é uma API REST?
API REST é um conjunto de regras e definições que permitem a comunicação entre sistemas. A sigla REST significa Representational State Transfer, que é um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services. Uma API REST é uma API que segue essas regras e definições.
### Quais são as regras de uma API REST?
- **Cliente-Servidor**: O cliente e o servidor devem ser independentes um do outro.
- **Stateless**: Cada requisição feita pelo cliente ao servidor deve conter todas as informações necessárias para que o servidor entenda e responda a requisição. O servidor não deve guardar informações sobre o estado do cliente.
- **Cache**: O servidor deve informar ao cliente se a resposta pode ser armazenada em cache.
- **Interface Uniforme**: A interface de comunicação entre o cliente e o servidor deve ser uniforme, ou seja, deve seguir um padrão.
- **Sistema em Camadas**: O servidor pode ser composto por várias camadas, como servidores intermediários, que são responsáveis por intermediar a comunicação entre o cliente e o servidor final.
- **Código sob Demanda (Opcional)**: O servidor pode enviar código executável para o cliente, que pode ser executado no cliente.
- **RESTful**: Uma API que segue as regras de uma API REST é chamada de API RESTful.
- **Endpoint**: Um endpoint é uma URL que o cliente pode acessar para interagir com a API. Cada endpoint é responsável por uma ou mais operações, como criar, ler, atualizar e deletar recursos.
- **Recurso**: Um recurso é um objeto ou informação que pode ser acessado pela API. Cada recurso é identificado por um URI (Uniform Resource Identifier).
- **Métodos HTTP**: Os métodos HTTP são usados para indicar a operação que o cliente deseja realizar sobre um recurso. Os principais métodos HTTP são GET, POST, PUT e DELETE.
- **Status Code**: O status code é um código numérico que indica o resultado da requisição. Os principais status codes são 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found) e 500 (Internal Server Error).
- **JSON**: JSON (JavaScript Object Notation) é um formato de dados que é usado para representar objetos e arrays. A maioria das APIs RESTful usam JSON para enviar e receber dados.
- **JWT (JSON Web Token)**: JWT é um padrão aberto que define uma maneira compacta e autônoma para transmitir informações entre as partes como um objeto JSON. Essas informações podem ser verificadas e confiáveis porque são assinadas digitalmente.
- **CORS (Cross-Origin Resource Sharing)**: CORS é um mecanismo que permite que recursos de uma página da web sejam solicitados a partir de um domínio diferente do domínio que serviu a página.
- **HTTPS (Hypertext Transfer Protocol Secure)**: HTTPS é uma extensão do protocolo HTTP que permite a comunicação segura entre o cliente e o servidor. Ele usa criptografia para proteger os dados transmitidos entre o cliente e o servidor.
- **CRUD (Create, Read, Update, Delete)**: CRUD é um acrônimo que significa Create, Read, Update e Delete. É um conjunto de operações básicas que são comuns em aplicações que usam um banco de dados.

## Express.js
- **Express.js**: Express.js é um framework web para Node.js. Ele fornece uma maneira fácil de criar aplicações web e APIs RESTful. Ele é leve, flexível e fácil de usar.
- **Rotas**: As rotas são usadas para mapear URLs para funções que manipulam as requisições HTTP. Cada rota pode ter um ou mais métodos HTTP associados a ela.
- **Parâmetros de Rota**: Os parâmetros de rota são usados para capturar valores de uma URL e passá-los para a função que manipula a rota. Eles são definidos usando dois pontos (:) seguidos pelo nome do parâmetro.
- **Query Strings**: As query strings são usadas para passar dados para o servidor através da URL. Elas são compostas por um nome e um valor, separados por um sinal de igual (=) e separados por um sinal de e comercial (&).
- **Corpo da Requisição**: O corpo da requisição é usado para enviar dados para o servidor em uma requisição POST, PUT ou PATCH. Ele pode conter dados em vários formatos, como JSON, XML ou formulários.

## MongoDB
- **MongoDB**: MongoDB é um banco de dados NoSQL orientado a documentos. Ele armazena os dados em documentos JSON, o que facilita a integração com aplicações JavaScript. Ele é muito utilizado em aplicações web modernas, que precisam de escalabilidade e flexibilidade.
- **Mongoose**: Mongoose é uma biblioteca de modelagem de objetos para MongoDB e Node.js. Ele fornece uma solução baseada em esquemas para modelar os dados da aplicação. Ele também fornece uma API rica para interagir com o banco de dados.
- **Documentos**: Um documento é uma unidade básica de armazenamento no MongoDB. Ele é representado por um objeto JSON, que pode conter campos e valores.
- **Coleções**: Uma coleção é um grupo de documentos no MongoDB. Cada coleção é armazenada em um arquivo no disco.
- **Banco de Dados**: Um banco de dados é um conjunto de coleções no MongoDB. Cada banco de dados é armazenado em um diretório no disco.
- **Modelo de Dados**: O modelo de dados do MongoDB é flexível e pode ser alterado dinamicamente. Ele não requer um esquema fixo, o que permite que os documentos em uma coleção tenham campos diferentes.
- **Índices**: Os índices são usados para acelerar as consultas no MongoDB. Eles são semelhantes aos índices em bancos de dados relacionais, mas são mais flexíveis e podem ser criados em qualquer campo de um documento.
