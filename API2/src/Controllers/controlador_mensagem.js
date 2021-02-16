const Mensagem = require('../Models/mensagem');
const http = require('http');
//var querystring = require('querystring');

exports.send = (req, res) =>{
    var data = new Mensagem(req.body);

    data = JSON.stringify(data);

    var options = {
        host: 'localhost',
        port: 3001,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data)
        }
    };

    var dadosMensagemEnviada;
    var httpreq = http.request(options, function (response) {
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            dadosMensagemEnviada = chunk;
            chunk = JSON.parse(chunk);
            res.status(201).send(`{"message_status": True,"target_id": ${chunk.target_id},"from":${chunk.from},"message":${chunk.message}}`);
        });
      });

      httpreq.write(data);
      httpreq.end();
        
}
