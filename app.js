//npm run dev

const express = require('express');
const path = require("path");
const app = express();

app.use('/static', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'));

});


app.get('/register', (req, res) => {
    res.sendFile(path.resolve('views/register.html'));

});


app.get('/login', (req, res) => {
    res.sendFile(path.resolve('views/login.html'));

});


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor funcionando');
})