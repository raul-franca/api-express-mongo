import swaggerAutogen from 'swagger-autogen';
import app from "../app.js";

const doc = {
    info: {
        title: 'API Express Mongo Documentation',
        description: 'Automatically generated documentation',
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app.js', './src/routes/cidadeRoutes.js', './src/routes/rotaRoutes.js'];

swaggerAutogen()(outputFile, endpointsFiles).then(() => {
    console.log('Swagger documentation generated automatically.');
});
