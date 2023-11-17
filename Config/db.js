const Pool = require('pg').Pool
const pool = new Pool({
    host: "127.0.0.1",
    database: 'mydb',
    port: 5432,
    user: 'roj',
    password: 'computer'    
})

module.exports = pool