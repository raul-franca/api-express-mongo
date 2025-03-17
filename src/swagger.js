import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'API Cidades, rotas',
            description: 'API RESTful com Node.js, Express.js e MongoDB 🚀\n demonstra conceitos essenciais de desenvolvimento, Cidades e Coordenadas'
        },
        servers: [
            {
                url: 'http://localhost:3000', // ajuste conforme necessário
            },
        ],
        components: {
            schemas: {
                Cidade: {
                    type: 'object',
                    properties: {
                        id: { type: 'string', description: 'ID da cidade' },
                        nome: { type: 'string', description: 'Nome da cidade' },
                        uf: { type: 'string', description: 'UF da cidade' },
                        lat: { type: 'number', description: 'Latitude da cidade' },
                        long: { type: 'number', description: 'Longitude da cidade' }
                    }
                }
            }
        }
    },
    apis: ['./src/controllers/*.js'], // caminhos dos arquivos com anotações Swagger
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };