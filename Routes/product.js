const express = require('express')
const route = express.Router()

const { read, list, create, update, remove } = require('../Controllers/product')

// Get one product
route.get('/product/:id', read)

// Get more product
route.get('/product', list)

// Post one product
route.post('/product', create)

// Put one product
route.put('/product/:id', update)  

// Delete one product
route.delete('/product/:id', remove)

module.exports = route