const { Router } = require('express');
const router = Router();
const _ = require('underscore')

const icecreams = require('../sample.json');

router.get('/', (req, res) => {
    res.json(icecreams)
})
router.post('/', (req, res) => {
    const { flavor } = req.body;
    if (flavor) {
        const id = icecreams.length + 1
        const newFlavor = { ...req.body, id }
        icecreams.push(newFlavor)
        res.status(201).json(icecreams)
    } else {
        res.status(500).send("failed")
    }
})
router.put('/:id', (req, res) => {
    const { flavor } = req.body;
    if (flavor) {
        _.each(icecreams, (icecream, index) => {
            if (icecream.id === req.params.id) {
                icecream.flavor = flavor;
            } 
        })
        res.status(201).json(icecreams)
    } else {
        res.status(500).send("failed")
    }
})
router.delete('/:id', (req, res) => {
    _.each(icecreams, (icecream, index) => {
        console.log(icecream.id);
        console.log(req.params.id);
        if (icecream.id === req.params.id) {
            console.log(icecream.flavor);
            icecreams.splice(index,  1);
        }
    })
    res.status(201).send(icecreams);
})

module.exports = router;