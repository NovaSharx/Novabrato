const router = require('express').Router()
const db = require('../models')

const { Highscore } = db

router.get('/', async (req, res) => {
    const highscores = await Highscore.findAll()
    res.json(highscores)
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const highscore = await Highscore.create(req.body)
    res.json(highscore)
})

module.exports = router