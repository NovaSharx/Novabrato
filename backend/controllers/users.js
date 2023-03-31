const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const { User, Highscore } = db

// Need to secure this route from the public
router.get('/', async (req, res) => {
    const users = await User.findAll({ include: Highscore }) // Eager loading highscores
    res.json(users)
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const { password, ...otherUserData } = req.body
    const user = await User.create({
        ...otherUserData,
        role: 'learner',
        passwordDigest: await bcrypt.hash(password, 10)
    })

    const token = await jwt.sign({ id: user.dataValues.userId }, process.env.JWT_SECRET)
    res.json({ user, token })
})

module.exports = router