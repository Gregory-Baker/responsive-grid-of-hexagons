const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");

let app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const currentYear = new Date().getFullYear();

app.get('/', (req, res) => {
  res.render('index', {currentYear: currentYear});
});

app.get('/:page', (req, res) => {
  res.render(req.params.page, {currentYear: currentYear});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));