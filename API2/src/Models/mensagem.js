class Mensagem {
    constructor(data){
        this.from = data.from;
        this.target_id = data.target_id;
        this.media = data.media;
        this.message = data.message || null;
    }
}

module.exports = Mensagem;