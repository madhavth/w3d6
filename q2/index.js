const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}`));
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.render("form", {
        "title": "Form Example template q2"
    });
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.render('result', {
        name, age
    });
});

app.listen(3000);