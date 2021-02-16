const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mensagemAleatoria = new Schema({
    message:String,
});

module.exports = mongoose.model('MensagensAleatorias', mensagemAleatoria);