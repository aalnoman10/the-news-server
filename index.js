const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const cate = require('./data/cate.json');
const news = require('./data/News.json');

app.use(cors())
app.get('/', (req, res) => {
    res.send('The The news ')
})

app.get('/cate', (req, res) => {
    res.send(cate)
})

app.get('/cate/:id', (req, res) => {
    const id = req.params.id
    if (id === '0') {
        res.send(news)
    }
    else {
        const selected = news.filter(c => c.category_id === id)
        res.send(selected)
    }
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selected = news.find(n => n._id === id)
    res.send(selected)
})

app.listen(port, () => {
    console.log(`the news running ${port}`);
})