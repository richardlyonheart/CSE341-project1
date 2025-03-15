const express = require('express');

const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());

/*app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content-Type, Accept, Z-Key"
    );
    res.setHeaders("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});*/

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(PORT, () => {
            console.log(`Database is listening, and node is running ong port ${PORT}`);
        });
    }
});