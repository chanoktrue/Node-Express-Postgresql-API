const express = require('express')
const route = express.Router()

const { read } = require('../Controllers/product')

// Get one product
route.get('/product/:id', read)

// Get more product
route.get('/product', (req, res) => {
    res.send('get omre product')
})

// Post one product
route.post('/product', (req, res) => {
    res.send('post one product')
})

// Put one product
route.put('/product/:id', (req, res) => {
    res.send('put one product')
})  

// Delete one product
route.delete('/product/:id', (req, res) => {
    res.send('delete one product')
})

module.exports = route