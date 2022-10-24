const express = require('express');

const app = express();
const path = require('path');
const url = require('url');

app.use(express.static(`${__dirname}`));
app.use(express.urlencoded({extended: true}));
app.use('/css', express.static(path.join(`${__dirname}`,'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const hours = date.getHours();

    const isBetween6AMTo6PM = hours > 6 && hours < 18;

    const formHTML = isBetween6AMTo6PM? 'form_day.html': 'form_night.html';

    res.sendFile(path.join(__dirname, formHTML));
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    console.log(name, age);
    
    res.redirect(url.format({
        pathname: '/output',
        query: {
            'name': name,
            'age': age
        }
    }));
});

app.get('/output', (req, res)=> {
     let name = req.query.name;
     let age = req.query.age;

     res.send(`received ${name} and ${age}`);
});

app.listen(3000);