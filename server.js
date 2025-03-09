const express = require('express');

const mongodb = require('./data/database');
const app = express();


const PORT = process.env.PORT;

app.use('/', require('./routes'));


mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(PORT, () => {console.log(`Database is listening, and node is running ong port ${PORT}`)})
    }
})
app.listen(PORT, () => {console.log(`running on port ${PORT}`)
});
