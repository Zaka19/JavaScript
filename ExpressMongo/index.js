const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const personajes = require('./routes/personajes');

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/personajes', personajes);

app.get('/', function(req, res){
	res.redirect('/personajes');
});

app.all('*', function(req, res){
	res.render('error', {texto: "ERROR 404: SITIO NO ENCONTRADO"});
});

app.listen(8080);