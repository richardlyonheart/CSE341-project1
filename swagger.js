const swaggerAutogen = require("swagger-autogen");

const doc = {
    info:{
        title: 'Contacts API',
        description: 'Contacts API',
    },
    host: 'cse341-project1-egqo.onrender.com',
    scheme: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);
