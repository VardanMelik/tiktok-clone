const express = require('express');

const app = express();

const port = process.env.port || 5000;

app.get('/', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})