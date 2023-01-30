const express = require('express');
const router = express.Router();
const controller = require("../controllers/register");

router.post('/', controller.register)
router.get('/', controller.all)
router.get('/show', controller.show)
router.delete('/:id', controller.delete)

module.exports = router;