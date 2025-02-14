# O Principal objetivo deste projeto é uma referência para a criação de APIs REST com node.js e express.js e MongoDB.

# API REST
## Topicos abordados neste projeto
- [x] Rotas







### O que é uma API REST?
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
