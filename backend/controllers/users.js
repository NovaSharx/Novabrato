const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')

const { User } = db

// Need to secure this route from the public
router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

router.post('/', async (req, res) => {
    const { password, ...otherUserData } = req.body
    const user = await User.create({
        ...otherUserData,
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})

module.exports = router