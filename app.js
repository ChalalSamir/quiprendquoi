
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', { title: 'Qui prend quoi ?' });
});

app.post('/party', function(req, res) {
    res.send('Post ok !')
    console.log(req.body);
});


app.listen(process.env.PORT, () => console.log(`Front app listening on port ${process.env.PORT}!`));

app.set('view engine', 'pug');



