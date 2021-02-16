const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controlador_mensagem');

router.post('/', controller.send);

module.exports = router;