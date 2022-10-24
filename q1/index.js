const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));

app.set(express.static(`${__dirname}`));
app.use('/css', express.static(path.join(`${__dirname}`,'css')));

app.set('view engine', 'ejs');
app.set('views', path.join(`${__dirname}`, "view"));

const dayStyle = `body {
   background-color: lightblue;
   color: black;
}`;

const nightStyle = `body {
   background-color: black;
   color: white;
}`;

app.get('/', (req,res)=> {
   const date = new Date();
   const hours = date.getHours();

   let isDay = hours >=6 && hours < 18;

   res.render("index", {
      time: date.toTimeString(),
      css: isDay? dayStyle: nightStyle
   });
});


app.listen(3000);