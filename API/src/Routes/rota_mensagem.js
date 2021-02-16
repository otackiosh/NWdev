const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controlador_mensagem');

router.get('/', controller.getAll);
router.get('/from/:id', controller.getbyFrom);
router.get('/target_id/:id', controller.getbyTarget_id);
router.post('/', controller.send);

module.exports = router;