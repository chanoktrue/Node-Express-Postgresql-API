const express = require('express')
const { readdirSync } = require('fs')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = 3002

app.use(cors())
app.use(morgan('dev'))

readdirSync('./Routes').map ( (r) => {
    console.log(r)
    app.use('/api', require('./Routes/' + r))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})