Existem 2 API's cada uma em uma pasta difetente, "API" referente ao item 1 e 2 do desafio e "API2" referente ao item 3.
Para executar precisa executar o comando "node index.js" nos em cada um dos projetos para executar as API's.

Para testar as API's eu usei o postman:

Envio de mensagem:
    tipo do request: POST
    Endereço: http://localhost:3002/
    formato: JSON
    exemplo de mensagem: {"from": 10,"target_id": 3,"media": false,"message": "Oi"}

Listar todas mensagens:
    tipo do request: GET
    endereço: http://localhost:3001/
    
Listar mensagens filtradas por target_id:
    tipo do request: GET
    endereço: http://localhost:3001/target_id/<numero desejado>
    exemplo: http://localhost:3001/target_id/3
  
Listar mensagens filtradas por from:
    tipo do request: GET
    endereço: http://localhost:3001/from/<numero desejado>
    exemplo: http://localhost:3001/from/3
