const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mensagem = new Schema({
    from : Number,
    target_id : Number,
    media : Boolean,
    message:{type:String, default:null},
});

module.exports = mongoose.model('Mensagem', mensagem);