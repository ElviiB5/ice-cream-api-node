const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "nameeee",
        "website": "this is the website"
    }
    res.json(data);
})

module.exports = router;