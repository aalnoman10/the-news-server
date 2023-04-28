const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const cate = require('./data/cate.json');

app.use(cors())
app.get('/', (req, res) => {
    res.send('The The news ')
})

app.get('/cate', (req, res) => {
    res.send(cate)
})

app.listen(port, () => {
    console.log(`the news running ${port}`);
})