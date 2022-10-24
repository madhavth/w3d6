const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(`${__dirname}`));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    console.log(name, age);
    res.status(200).send(`hello ${name}, age: ${age}`);
});

app.listen(3000);