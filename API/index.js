
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://otavio:otavio@cluster0.ywvph.mongodb.net/NewWayDev?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const porta = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//MODELOS
const MensagensAleatorias = require('./src/Models/mensagensAleatorias');
const Mensagem = require('./src/Models/mensagem');

//ROTAS
const rotaMensagem = require('./src/Routes/rota_mensagem');

app.use('/', rotaMensagem);


app.listen(porta);
console.log('servidor aberto');