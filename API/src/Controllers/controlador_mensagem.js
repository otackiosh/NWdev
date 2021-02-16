const mongoose = require('mongoose');
const Mensagem = mongoose.model('Mensagem');
const MensagemAleatoria = mongoose.model('MensagensAleatorias');

function enviar(res, dados){
    dados.save().then(x=>{
        res.status(201).send(dados);
    }).catch(e=>{
        res.status(400).send({message:'Erro', data: e});
    })
}

exports.send = (req, res) =>{
    var dados = new Mensagem(req.body);
    if (dados.message == null){
        MensagemAleatoria.find({}).then(y=>{
            MensagemAleatoria.count({}, (err, count)=>{
                var r = Math.floor(Math.random()*count);
                dados.message = y[r].message;
                enviar(res, dados);
            })
        });
    }
    enviar(res, dados);
}



exports.getAll = (req, res) =>{
    Mensagem.find({}).then(data =>{
        res.status(201).send(data)
    }).catch(e=>{
        res.status(400).send(e);
    })
}

exports.getbyFrom = (req, res) =>{
    Mensagem.find({from:req.params.id}).then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    })
    
}

exports.getbyTarget_id = (req, res) =>{
    Mensagem.find({target_id:req.params.id}).then(data=>{
        res.status(200).send(data);
    }).catch(e=>{
        res.status(400).send(e);
    })
    
}