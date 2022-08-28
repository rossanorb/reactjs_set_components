const express = require('express');
const router = express.Router();
const controller = require("../controllers/register");

router.post('/', controller.register)
router.get('/show', controller.show)
router.get('/registers', controller.all)

module.exports = router;