const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'));

app.listen(PORT, () => {console.log(`running on port ${PORT}`)
});
