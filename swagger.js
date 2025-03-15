const swaggerAutogen = require("swagger-autogen");

const doc = {
    info:{
        title: 'Contacts API',
        description: 'Contacts API',
    },
    host: 'localhost:5500',
    scheme: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);
