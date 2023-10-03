const { Router } = require('express');
const router = Router();
const _ = require('underscore')

const icecreams = require('../controller/controller.js');

router.get('/', icecreams.findAll)
router.post('/', icecreams.create)
router.put('/:id', icecreams.update)
router.delete('/:id', icecreams.delete)

module.exports = router;