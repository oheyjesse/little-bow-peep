const express = require('express')
const router = express.Router()
// TODO: auth

router.get('/', (req, res) => {

    const bowtie = {
        id: 1,
        name: 'Brandonburg Bow',
        price: 6000
    }

    res.status(200).json(bowtie)

})

module.exports = router