const express = require('express');
const bodyParser = require('body-parser');


const porta = process.env.PORT || 3002;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



//MODELOS
const Mensagem = require('./src/Models/mensagem');


//ROTAS
const rotaMensagem = require('./src/Routes/rota_mensagem');

app.use('/', rotaMensagem);


app.listen(porta);
console.log('servidor aberto');